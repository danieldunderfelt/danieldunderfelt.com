import { observable } from 'mobx'

export default () => {

  const store = observable({
    messages: []
  })

  return store
}
