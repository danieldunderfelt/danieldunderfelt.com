import script from '../daniel_says.json'
import _ from 'lodash'

export default state => {
  return _.sample(_.get(script, 'autoChat', ['Hello?']))
}
