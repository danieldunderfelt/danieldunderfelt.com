import React, { Component } from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

const MessageWrapper = styled.div`
  position: relative;
  color: white;
  height: 26em;
`

const MessageStack = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: .75em 1em;
  display: flex;
  flex-direction: column;
`

const Message = styled.article`
  padding: .5em .75em;
  color: #444;
  font-size: .9em;
  border-radius: .5em;
  position: relative;
  align-self: ${({ from }) => from === 'receiver' ? 'flex-start' : 'flex-end' };
  background: ${({ from }) => from === 'receiver' ? '#A3D3FF' : '#cdcdcd' };
  
  &:before {
    position: absolute;
    content: "";
    ${({ from }) => from === 'receiver' ? 'left' : 'right' }: -1.25em;
    top: .4em;
    width: 0;
    height: 0;
    border: .5em solid transparent;
    border-${({ from }) => from === 'receiver' ? 'right' : 'left' }: 1em solid ${({ from }) => from === 'receiver' ? '#A3D3FF' : '#cdcdcd' };
  }
`

@observer
class MessageDisplay extends Component {

  render() {

    return (
      <MessageWrapper>
        <MessageStack>
          <Message from="sender">
            Hi how's it goin
          </Message>
          <Message from="receiver">
            Good!
          </Message>
        </MessageStack>
      </MessageWrapper>
    )
  }
}

export default MessageDisplay

