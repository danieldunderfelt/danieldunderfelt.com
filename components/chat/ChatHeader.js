import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

const ChatHeader = styled.header`
  background: #3388ff;
  padding: .25em .75em;
  border-top-left-radius: .5em;
  border-top-right-radius: .5em;
  position: relative;
`

const HeaderImage = styled.img`
  height: 2em;
  width: 2em;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: .75em;
`

const RecipientName = styled.h2`
  color: white;
  font-weight: 400;
  font-size: 1em;
  vertical-align: middle;
  display: inline-block;
`

const Indicator = styled.span`
  background-color: #55ee66;
  border-radius: 50%;
  border: 2px solid #3388ff;
  width: .75rem;
  height: .75rem;
  position: absolute;
  top: .75em;
  left: 2.15em;
  display: inline-block;
  vertical-align: middle;
`

export default observer(props => {

  return (
    <ChatHeader>
      <HeaderImage src="/static/images/me.jpg" />
      <Indicator />
      <RecipientName>
        Daniel Dunderfelt
      </RecipientName>
    </ChatHeader>
  )
})
