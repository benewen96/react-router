import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory } from 'react-router';

// import our react routes

import Template from './components/pages/Template';
import Demo from './components/pages/Demo';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Template} >
      <Route path="/demo" component={Demo} />
    </Route>
  </Router>,
  document.getElementById('app')
);
