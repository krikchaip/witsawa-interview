import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

function TodoContainer({ todos }) {
  return todos.map(t => (
    <Todo key={t.id} id={t.id} completed={t.completed}>{t.text}</Todo>
  ))
}

export default connect(
  state => ({ todos: state })
)(TodoContainer)
