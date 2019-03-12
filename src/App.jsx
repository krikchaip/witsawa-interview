import React from 'react'
import { connect } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'

import TodoContainer from './TodoContainer'

const Global = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: Helvetica, sans-serif;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TodoBox = styled.div`
  width: 600px;
  height: 400px;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 30% 1fr;
  border: 1px solid rgb(213, 213, 213);
  overflow: hidden;
`

const SideBar = styled.div`
  background-color: rgb(246, 246, 246);
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  border-right: inherit;
`

const TodoPlane = styled.div`
  padding: 12px;
`

const Heading = styled.div`
  margin-top: 10px;
  padding-bottom: 2px;
  border-bottom: 1px solid rgb(213, 213, 213);
  position: relative;
`

const Title = styled.span`
  font-size: 28px;
  letter-spacing: 1px;
  color: rgb(251, 130, 38);
  user-select: none;
`

const AddButton = styled.i`
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 8px;
  padding: 4px 10px;
  border: 1px solid rgb(213, 213, 213);
  border-radius: 4px;
  font-size: 12px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);

  &:active {
    background-color: rgb(246, 246, 246);
  }
`

function App({ addTodo }) {
  return (
    <>
      <Global />
      <Container>
        <TodoBox>
          <SideBar>
          </SideBar>
          <TodoPlane>
            <Heading>
              <Title>Todos</Title>
              <AddButton
                className="fas fa-plus"
                onClick={addTodo}
              />
            </Heading>

            <TodoContainer />

          </TodoPlane>
        </TodoBox>
      </Container>
    </>
  )
}

export default connect(
  null,
  dispatch => ({
    addTodo: () => dispatch({ type: 'ADD' })
  }))(App)
