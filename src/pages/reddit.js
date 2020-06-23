// import React from 'react'
// import { Provider } from 'react-redux'
// import redditStore from '../redux/redditStore'
// import AsyncApp from '../components/AsyncApp'

// const store = redditStore()

// export default function reddit() {
//     return (
//       <Provider store={store}>
//         <AsyncApp />
//       </Provider>
//     )
// }

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import redditStore from '../redux/redditStore'
import AsyncApp from '../components/AsyncApp'

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