import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import Avatar from './Avatar'

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
  padding: .75em .75em 1em;
  display: flex;
  flex-direction: column;
`

const Message = styled.article`
  position: relative;
  margin-bottom: .5em;
  max-width: 90%;
  display: flex;
  align-self: ${({ from = 'receiver' }) => from === 'receiver' ? 'flex-start' : 'flex-end' };
`

const MessageAvatar = styled(Avatar)`
  width: 1.5em;
  height: 1.5em;
  margin-top: .15em;
`

const MessageBubble = styled.div`
  padding: .5em .75em;
  color: #444;
  font-size: .9em;
  border-radius: .5em;
  background: ${({ colored = false }) => colored ? '#C7E5FF' : '#dedede' };
`

const IndicateWriting = styled.span`
  position: absolute;
  bottom: .25rem;
  left: .8rem;
  font-size: .75em;
  color: #aaa;
`

@inject('store')
@observer
class MessageDisplay extends Component {

  render() {
    const { messages, danielIsWriting } = this.props.store

    return (
      <MessageWrapper>
        <MessageStack>
          { messages.map(message => (
            <Message
              key={ message.timestamp }
              from={ message.from === 'daniel' ? 'receiver' : 'sender' }>
              { message.from === 'daniel' && (
                <MessageAvatar background="white" />
              )}
              <MessageBubble
                colored={ message.from === 'daniel' }>
                { message.body }
              </MessageBubble>
            </Message>
          ))}
        </MessageStack>
        { danielIsWriting && (
          <IndicateWriting>
            Daniel is typing...
          </IndicateWriting>
        )}
      </MessageWrapper>
    )
  }
}

export default MessageDisplay

