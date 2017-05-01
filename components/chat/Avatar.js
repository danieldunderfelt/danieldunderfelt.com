import React from 'react'
import { observer } from 'mobx-react'
import styled from 'styled-components'

const Avatar = styled.div`
  position: relative;
  width: ${({ size = '2em' }) => size };
  height: ${({ size = '2em' }) => size };
  display: inline-block;
  margin-right: .75em;
  vertical-align: middle;
`

const HeaderImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`

const Indicator = styled.span`
  background-color: #55ee66;
  border-radius: 50%;
  border: 2px solid ${({ background = '#3388ff' }) => background };
  width: .75rem;
  height: .75rem;
  position: absolute;
  top: 0;
  left: 75%;
  vertical-align: middle;
`

export default observer(props => {
  const { size = '2em', background = '#3388ff', className } = props

  return (
    <Avatar size={ size } className={ className }>
      <HeaderImage src="/static/images/me.jpg" />
      <Indicator background={ background } />
    </Avatar>
  )
})
