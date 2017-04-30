import { reaction } from 'mobx'
import _ from 'lodash'
import sentiment from 'sentiment'
import messageActions from './actions/messageActions'
import nlp from 'compromise'
import script from './daniel_says.json'

export default state => {
  const actions = messageActions(state)

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
    const messageSentiment = sentiment(message)
    const analysis = nlp(message)

    console.log(messageSentiment.score)

    if(messageSentiment.score < 0) {
      actions.addMessage('Fuck off until you can be polite.', 'daniel')
    } else {
      actions.addMessage('Hello!', 'daniel')
    }
  }

  return disposer
}
