import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Header from './js/modules/Header.jsx'
import Profile from './js/modules/profileComponents/profile.jsx'
import AllMessages from './js/modules/AllMessages.jsx'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Header}>
    	<Route path="/profile" component={Profile}/>
    	<Route path="/messages/:messageId" component={AllMessages}/>
    </Route>
  </Router>
), document.getElementById('app'))