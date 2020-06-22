// import 'babel-polyfill'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import redditStore from '../redux/redditStore'
import AsyncApp from '../containers/AsyncApp'

const store = redditStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    )
  }
}