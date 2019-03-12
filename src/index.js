import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';
import * as serviceWorker from './serviceWorker';

import { composeWithDevTools } from "redux-devtools-extension";

import uuid from 'uuid/v4'

const initialState = [
  {
    text: 'Cook breakfast',
    completed: false,
    id: uuid()
  }
]

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return state.concat({
        completed: false,
        text: '',
        id: uuid()
      })
    case 'CHANGE': {
      const { text, id } = action
      const index = state.findIndex(v => v.id === id)
      return [
        ...state.slice(0, index),
        { ...state[index], text },
        ...state.slice(index + 1, state.length)
      ]
    }
    case 'TICK': {
      const { id } = action
      const index = state.findIndex(v => v.id === id)
      return [
        ...state.slice(0, index),
        { ...state[index], completed: !state[index].completed },
        ...state.slice(index + 1, state.length)
      ]
    }
    case 'DELETE':
      return state
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
