import { reaction } from 'mobx'
import _ from 'lodash'
import sentiment from 'sentiment'
import nlp from 'compromise'
import respond from './chat/respond'
import question from './chat/question'
import statement from './chat/statement'
import greeting from './chat/greeting'
import isGreeting from './chat/isGreeting'
import messageActions from './actions/messageActions'

export default state => {

  if(typeof window === 'undefined') {
    return
  }

  const sendResponse = respond(state)
  const actions = messageActions(state)

  function onChange(change) {
    if(_.get(change, 'added', []).length > 0) {
      const message = _.get(change, 'added[0]')

      if(message.from !== 'daniel') {
        actions.toggleIsWriting(false)
        onMessage(message.rawBody)
      }
    }
  }

  function onMessage(message) {
    const analysis = nlp(message)
    let response = ''

    if(isGreeting(message)) {
      response = greeting(message, state)
    } else if(analysis.questions().data().length > 0) {
      response = question(analysis, state)
    } else if(analysis.statements().data().length > 0) {
      response = statement(analysis, state)
    }

    sendResponse(response)
  }

  const disposer = state.messages.observe(onChange)

  return disposer
}
