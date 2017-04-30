import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import MessageDisplay from './MessageDisplay'
import MessageInput from './MessageInput'

const ChatWrapper = styled.div`
  width: 22em;
  border-top-left-radius: .5em;
  border-top-right-radius: .5em;
  box-shadow: 0 0 40px 0 rgba(0,0,0,.25);
`

export default observer(props => {

  return (
    <ChatWrapper>
      <ChatHeader />
      <MessageDisplay />
      <MessageInput />
    </ChatWrapper>
  )
})
