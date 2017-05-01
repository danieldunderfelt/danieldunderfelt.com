import messageActions from '../actions/messageActions'
import _ from 'lodash'

export default state => {
  const actions = messageActions(state)

  return response => {
    const resLength = response.length
    const resTimeLow = resLength * 200
    const resTimeHigh = resLength * 400

    // First, random response lag
    setTimeout(() => {
      actions.toggleIsWriting(true)

      // Then, random time to write the response
      setTimeout(() => {
        actions.toggleIsWriting(false)
        actions.addMessage(response, 'daniel')
      }, _.random(resTimeLow, resTimeHigh))
    }, _.random(500, 5000))
  }
}
