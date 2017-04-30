import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

const Intro = styled.div`
  text-align: center;
  max-width: 26em;
  margin: 0 auto;
`

const IntroText = styled.p`
`

export default observer(props => {

  return (
    <Intro>
      <h1>
        Hi, I'm Daniel
      </h1>
      <IntroText>
        Instead of me just listing who I am and what I do, please, ask me anything!
      </IntroText>
    </Intro>
  )
})
