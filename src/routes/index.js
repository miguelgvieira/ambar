import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../containers/Home'
import MinMax from '../containers/MinMax'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/more" exact={true} component={MinMax} />
      </Switch>
    </ BrowserRouter>
  )
}

export default Routes
