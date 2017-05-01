import { reaction } from 'mobx'
import _ from 'lodash'
import sentiment from 'sentiment'
import nlp from 'compromise'
import respond from './chat/respond'
import question from './chat/question'
import statement from './chat/statement'

export default state => {
  const sendResponse = respond(state)

  const chatState = {
    greeted: 0,
    userRude: 0
  }

  const disposer = state.messages.observe(change => {
    if(_.get(change, 'added', []).length > 0) {
      const message = _.get(change, 'added[0]')

      if(message.from !== 'daniel') {
        onMessage(message.body)
      }
    }
  })

  function onMessage(message) {
    const analysis = nlp(message)
    let response = 'Hello!'

    if(analysis.questions().data().length > 0) {
      response = question(analysis, chatState)
    } else if(analysis.statements().data().length > 0) {
      response = statement(analysis, chatState)
    }

    sendResponse(response)
  }

  return disposer
}
