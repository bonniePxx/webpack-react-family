import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore.js'
import { Provider } from 'react-redux'
import BasicExample from './routes'

const store = configureStore();

render(
  <Provider store={store}>
    <BasicExample />
  </Provider>,
  document.getElementById('root'))

