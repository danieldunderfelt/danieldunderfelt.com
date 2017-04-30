import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import messageActions from '../../actions/messageActions'

const InputArea = styled.form`
  border-top: 1px solid #ccc;
  border-bottom-left-radius: .5em;
  border-bottom-right-radius: .5em;
  position: relative;
`

const ChatInput = styled.input`
  padding: .5em 4.5em .5em .75em;
  background: #efefef;
  border: 0;
  display: block;
  width: 100%;
  min-height: 3.5em;
  line-height: 1.5;
  font-size: 1em;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  appearance: none;
  outline: 0;
  border-bottom-left-radius: .5em;
  border-bottom-right-radius: .5em;
`

const SendButton = styled.button`
  background: #3388ff;
  color: white;
  font-size: .75em;
  border: 0;
  border-radius: .25em;
  text-transform: uppercase;
  padding: 1em .75em;
  position: absolute;
  right: .75em;
  top: 50%;
  transform: translateY(-50%);
`

@inject('store')
@observer
class MessageInput extends Component {

  messageActions = messageActions(this.props.store)
  @observable message = ''

  @action sendMessage = e => {
    e.preventDefault()

    this.messageActions.addMessage(this.message, 'anonymous')
    this.message = ''
  }

  @action onInput = e => {
    this.message = e.target.value
  }

  render() {

    return (
      <InputArea
        onSubmit={ this.sendMessage }
        action="">
        <ChatInput
          type="text"
          placeholder="Your message..."
          onChange={ this.onInput }
          value={ this.message } />
        <SendButton type="submit">
          Send
        </SendButton>
      </InputArea>
    )
  }
}

export default MessageInput

