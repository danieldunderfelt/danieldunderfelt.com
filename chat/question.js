import script from '../daniel_says.json'
import _ from 'lodash'
import voca from 'voca'

export default (message, state) => {
  const topics = Object.keys(_.get(script, 'topics', {}))
  let response = _.sample(_.get(script, 'noAnswer', ['']))

  const topic = topics.find(topic => voca.matches(voca.latinise(voca.lowerCase(message.out('text'))), topic))

  if(topic) {
    response = _.sample(script.topics[ topic ])
  }

  return response
}
