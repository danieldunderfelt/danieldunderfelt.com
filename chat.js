import { reaction } from 'mobx'
import _ from 'lodash'
import sentiment from 'sentiment'
import nlp from 'compromise'
import respond from './chat/respond'
import question from './chat/question'
import statement from './chat/statement'
import greeting from './chat/greeting'
import isGreeting from './chat/isGreeting'

export default state => {
  const sendResponse = respond(state)

  const disposer = state.messages.observe(change => {
    if(_.get(change, 'added', []).length > 0) {
      const message = _.get(change, 'added[0]')

      if(message.from !== 'daniel') {
        onMessage(message.rawBody)
      }
    }
  })

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

  return disposer
}
