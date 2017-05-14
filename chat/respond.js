import messageActions from '../actions/messageActions'
import _ from 'lodash'
import { action } from 'mobx'

export default state => {
  const actions = messageActions(state)

  const setResponseTimer = action('Set response timer', (timerHandle = 0) => {
    state.responseTimer = timerHandle
  })

  return (response = '', quick = false) => {
    if(!response) return Promise.resolve()

    return new Promise((resolve, reject) => {
      const resLength = response.length
      const resTimeLow = quick ? 500 : resLength * 100
      const resTimeHigh = quick ? 2000 : resLength * 200

      const randomResTime = _.random(resTimeLow, resTimeHigh)
      const randomReactTime = _.random(500, quick ? 2000 : 3000)

      // First, random response lag
      const timer = setTimeout(() => {
        actions.toggleIsWriting(true)

        // Then, random time to write the response
        const timer = setTimeout(() => {
          actions.addMessage(response, 'daniel')
          actions.toggleIsWriting(false)

          // Resolve with how long it took to respond
          resolve(randomReactTime + randomReactTime)
        }, randomResTime)

        setResponseTimer(timer)
      }, randomReactTime)

      setResponseTimer(timer)
    })
  }
}
