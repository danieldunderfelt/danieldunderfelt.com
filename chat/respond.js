import messageActions from '../actions/messageActions'
import _ from 'lodash'

export default state => {
  const actions = messageActions(state)

  return (response = '', quick = false) => {
    if(!response) return

    const resLength = response.length
    const resTimeLow = quick ? 500 : resLength * 100
    const resTimeHigh = quick ? 1500 : resLength * 200

    // First, random response lag
    setTimeout(() => {
      actions.toggleIsWriting(true)

      // Then, random time to write the response
      setTimeout(() => {
        actions.toggleIsWriting(false)
        actions.addMessage(response, 'daniel')
      }, _.random(resTimeLow, resTimeHigh))
    }, _.random(500, quick ? 1000 : 3000))
  }
}
