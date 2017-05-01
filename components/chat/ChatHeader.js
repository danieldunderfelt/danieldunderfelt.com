import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'
import Avatar from './Avatar'

const ChatHeader = styled.header`
  background: #3388ff;
  padding: .25em .75em;
  border-top-left-radius: .5em;
  border-top-right-radius: .5em;
  position: relative;
`

const RecipientName = styled.h2`
  color: white;
  font-weight: 400;
  font-size: 1em;
  vertical-align: middle;
  display: inline-block;
`

export default observer(props => {

  return (
    <ChatHeader>
      <Avatar />
      <RecipientName>
        Daniel Dunderfelt
      </RecipientName>
    </ChatHeader>
  )
})
