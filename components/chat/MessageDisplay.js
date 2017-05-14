import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { reaction } from 'mobx'
import styled from 'styled-components'
import Avatar from './Avatar'
import { Scrollbars } from 'react-custom-scrollbars'

const MessageWrapper = styled.div`
  position: relative;
  color: white;
  height: 26em;
  background: #f6f6f6;
  overflow: hidden;
`

const MessageStack = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  //max-height: 100%;
  overflow: hidden;
`

const MessageContainer = styled.div`
  padding: .75em .75em 1em;
  display: flex;
  flex-direction: column;
`

const Message = styled.article`
  position: relative;
  margin-bottom: .5em;
  max-width: 90%;
  display: flex;
  align-items: flex-start;
  align-self: ${({ from = 'receiver' }) => from === 'receiver' ? 'flex-start' : 'flex-end' };
`

const MessageAvatar = styled(Avatar)`
  width: 1.45em;
  height: 1.45em;
`

const MessageBubble = styled.div`
  padding: .5em .75em;
  color: #444;
  font-size: .9em;
  border-radius: .5em;
  background: ${({ colored = false }) => colored ? '#C7E5FF' : '#dedede' };
  
  p {
    margin: 0;
  }
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
          <MessageContainer>
            { messages.map(message => (
              <Message
                key={ message.timestamp }
                from={ message.from === 'daniel' ? 'receiver' : 'sender' }>
                { message.from === 'daniel' && (
                  <MessageAvatar background="#f6f6f6"/>
                )}
                <MessageBubble
                  dangerouslySetInnerHTML={{ __html: message.body }}
                  colored={ message.from === 'daniel' }>
                </MessageBubble>
              </Message>
            ))}
          </MessageContainer>
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

