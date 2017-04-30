import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'

const MessageWrapper = styled.div`
  position: relative;
  color: white;
  height: 26em;
  background: white;
  overflow: hidden;
`

const MessageStack = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: .75em;
  display: flex;
  flex-direction: column;
`

const Message = styled.article`
  padding: .5em .75em;
  color: #444;
  max-width: 90%;
  font-size: .9em;
  border-radius: .5em;
  position: relative;
  margin-bottom: .5em;
  align-self: ${({ from }) => from === 'receiver' ? 'flex-start' : 'flex-end' };
  background: ${({ from }) => from === 'receiver' ? '#C7E5FF' : '#dedede' };
`

@inject('store')
@observer
class MessageDisplay extends Component {

  render() {
    const { messages } = this.props.store

    return (
      <MessageWrapper>
        <MessageStack>
          { messages.map(message => (
            <Message
              key={ message.timestamp }
              from={ message.from === 'daniel' ? 'receiver' : 'sender' }>
              { message.body }
            </Message>
          ))}
        </MessageStack>
      </MessageWrapper>
    )
  }
}

export default MessageDisplay

