import { observable } from 'mobx'

export default () => {

  const store = observable({
    messages: [],
    danielIsWriting: false
  })

  return store
}
