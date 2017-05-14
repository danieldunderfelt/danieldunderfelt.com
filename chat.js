import { reaction } from 'mobx'
import _ from 'lodash'
import sentiment from 'sentiment'
import nlp from 'compromise'
import respond from './chat/respond'
import question from './chat/question'
import statement from './chat/statement'
import greeting from './chat/greeting'
import isGreeting from './chat/isGreeting'
import autoChatMessage from './chat/autoChat'
import messageActions from './actions/messageActions'

export default state => {
  const sendResponse = respond(state)
  const actions = messageActions(state)

  let disposer
  let autoChat = 0
  let autoTimeout = _.random(20000, 30000)

  function createAutoChatter() {
    clearInterval(autoChat)

    autoChat = setTimeout(() => {
      sendResponse(autoChatMessage())
        .then(responseTime => {
          autoTimeout = responseTime + _.random(10000, 30000)
        })
        .then(createAutoChatter)
    }, autoTimeout)
  }

  function onChange(change) {
    if(_.get(change, 'added', []).length > 0) {
      const message = _.get(change, 'added[0]')

      if(message.from !== 'daniel') {
        clearInterval(autoChat)
        clearTimeout(state.responseTimer)
        actions.toggleIsWriting(false)

        onMessage(message.rawBody)

        setTimeout(createAutoChatter, 10000)
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

  if(typeof window !== 'undefined') {
    createAutoChatter()
    disposer = state.messages.observe(onChange)
  }

  return disposer
}
