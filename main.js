import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory } from 'react-router';

// import our react routes

import Template from './components/pages/Template';
import Demo from './components/pages/Demo';
import Home from './components/pages/Home';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Template} >
      <Route path="/" component={Home} />
      <Route path="/demo" component={Demo} />
    </Route>
  </Router>,
  document.getElementById('app')
);
