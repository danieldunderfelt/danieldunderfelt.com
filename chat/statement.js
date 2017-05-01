import sentiment from 'sentiment'
import { runInAction } from 'mobx'
import daniel_says from '../daniel_says'
import _ from 'lodash'

export default (message, state) => {
  const messageSentiment = sentiment(message.out('text'))
  let response = _.sample(_.get(daniel_says, 'defaultStatement.positive', ['']))

  if(messageSentiment.score < 0) {
    runInAction(() => {
      state.userWasRude = state.userWasRude + 1
    })

    response = _.sample(_.get(daniel_says, 'defaultStatement.negative', ['']))
  }

  return response
}
