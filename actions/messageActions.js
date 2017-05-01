import { collection } from 'mobx-app'
import { action } from 'mobx'
import voca from 'voca'
import _ from 'lodash'

export default state => {
  const messagesCollection = collection(state.messages)

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

  const toggleIsWriting = action('toggleIsWriting', (setTo = true) => {
    state.danielIsWriting = setTo
  })

  return {
    addMessage,
    toggleIsWriting
  }
}
