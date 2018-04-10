import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Search from '../search/search'
import About from '../about/about'
import Pokemon from '../pokemon/pokemon'

export default props => (
  <Router history={hashHistory}>
    <Route path="/search" component={Search} />
    <Route path="/about" component={About} />
    <Route path="/pokemon/:pokemonName" component={Pokemon} />
    <Redirect from="*" to="/search" />
  </Router>
)