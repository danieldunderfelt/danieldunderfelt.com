import React, { Component } from 'react'
import { runInAction } from 'mobx'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import MessageDisplay from './MessageDisplay'
import MessageInput from './MessageInput'
import chat from '../../chat'
import respond from '../../chat/respond'
import daniel_says from '../../daniel_says'
import _ from 'lodash'

const ChatWrapper = styled.div`
  width: 22em;
  border-radius: .5em;
  box-shadow: 0 0 40px 0 rgba(0,0,0,.25);
  margin: 4em auto 0;
`

@inject('store')
@observer
class Chat extends Component {

  sendResponse = (respond(this.props.store))
  chat = (chat(this.props.store))

  componentDidMount() {
    const { store } = this.props

    if(typeof window === 'undefined') {
      return
    }

    const initMessage = _.sample(_.get(daniel_says, 'initialMessage', []))

    if(store.greeted < 1) {
      runInAction(() => {
        store.greeted = store.greeted + 1
      })

      this.sendResponse(initMessage, true)
    }
  }

  componentWillUnmount() {
    // Dispose message observer
    this.chat()
  }

  render() {

    return (
      <ChatWrapper>
        <ChatHeader />
        <MessageDisplay />
        <MessageInput />
      </ChatWrapper>
    )
  }
}

export default Chat

