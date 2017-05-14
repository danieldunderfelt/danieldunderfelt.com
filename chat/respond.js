import messageActions from '../actions/messageActions'

export default state => {
  const actions = messageActions(state)

  return (response = '') => {
    if(!response) return Promise.resolve()

    return new Promise(resolve => {
      setTimeout(() => {
        actions.addMessage(response, 'daniel')
        actions.toggleIsWriting(false)

        resolve(response)
      }, 500)
    })
  }
}
