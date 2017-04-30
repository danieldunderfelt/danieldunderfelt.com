import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import MessageDisplay from './MessageDisplay'
import MessageInput from './MessageInput'
import chat from '../../chat'

const ChatWrapper = styled.div`
  width: 22em;
  border-radius: .5em;
  box-shadow: 0 0 40px 0 rgba(0,0,0,.25);
  margin: 4em auto 0;
`

@inject('store')
@observer
class Chat extends Component {

  chat

  componentDidMount() {
    this.chat = chat(this.props.store)
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

