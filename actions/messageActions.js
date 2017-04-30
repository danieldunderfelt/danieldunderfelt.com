import { collection } from 'mobx-app'
import { toJS } from 'mobx'
import voca from 'voca'

export default store => {
  const messagesCollection = collection(store.messages)

  function addMessage(body, from = 'anonymous') {
    const messageText = voca
      .chain(body)
      .trim()
      .wordWrap({ width: 32, cut: true })
      .value()

    if(voca.isBlank(messageText)) return

    messagesCollection.addItem({
      body: messageText,
      from,
      timestamp: Date.now()
    })
  }

  return {
    addMessage
  }
}
