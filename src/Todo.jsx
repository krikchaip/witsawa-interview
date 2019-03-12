import React from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'

import Checkbox from './Checkbox'

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
`

const TextWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(213, 213, 213);
`

const Text = styled.input.attrs({
  type: 'text'
})`
  font-size: 12px;
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  ${({ check }) => check && css`
    color: #999;
  `}
`

function Todo({ children, id, change, completed }) {
  return (
    <Container>
      <Checkbox id={id} check={completed} />
      <TextWrapper>
        <Text value={children}
              onChange={(e) => change(id, e.target.value)}
              check={completed} />
      </TextWrapper>
    </Container>
  )
}

export default connect(
  null,
  dispatch => ({
    change: (id, text) => dispatch({
      type: 'CHANGE',
      text,
      id
    })
  }))(Todo)
