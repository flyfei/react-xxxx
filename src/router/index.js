import React from 'react'
import { Router, IndexRoute, Route, Redirect, browserHistory } from 'react-router'
import store from 'store'
import { Provider } from 'react-redux'

import Layout from 'containers/Layout'
import Home from 'containers/index'
import NotFound from 'containers/NotFound'
import Demo from 'components/Demo'

export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Redirect from="/" to="index" />
      <Route path="index" component={Layout}>
        <IndexRoute component={Home} />
      </Route>
      <Route path="/components" component={Demo} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
)
