import { observable } from 'mobx'

export default () => {

  const store = observable({
    messages: [],
    danielIsWriting: false,
    greeted: 0,
    userWasRude: 0
  })

  return store
}
