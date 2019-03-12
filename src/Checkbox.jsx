import React from 'react'
import { connect } from 'react-redux'

import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 35px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Ticker = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgb(213, 213, 213);
  cursor: pointer;

  ${props => props.check && css`
    background-color: rgb(251, 130, 38);
    box-shadow: inset 0 0 0 2px white;
  `}
`

function Checkbox({ check, id, tick }) {
  return (
    <Container onClick={() => tick(id)}>
      <Ticker check={check} />
    </Container>
  )
}

export default connect(
  null,
  // state => ({ check:  }),
  dispatch => ({
    tick: (id) => dispatch({
      type: 'TICK',
      id
    })
  })
)(Checkbox)
