import { runInAction } from 'mobx'
import script from '../daniel_says.json'
import sentiment from 'sentiment'
import _ from 'lodash'

export default (message, state) => {
  const messageSentiment = sentiment(message)
  const greetings = _.get(script, 'greeting', {})
  let response = ''

  if(messageSentiment.score < 0) {
    runInAction(() => {
      state.userWasRude = state.userWasRude + 1
    })

    response = _.sample(_.get(greetings, 'negative', ['']))
  } else {
    response = _.sample(_.get(greetings, 'positive', ['']))
  }

  runInAction(() => {
    state.greeted = state.greeted + 1
  })

  return response
}
