import { observable } from 'mobx'

export default () => {

  const store = observable({
    messages: [],
    responseTimer: 0,
    danielIsWriting: false,
    greeted: 0,
    userWasRude: 0
  })

  return store
}
