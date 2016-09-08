import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from 'reducers'

let middleware

if (process.NODE_ENV === 'process') {
  middleware = applyMiddleware(
    createLogger(),
    thunk
  )
} else {
  middleware = applyMiddleware(thunk)
}

const store = createStore(reducers, middleware)

export default store

