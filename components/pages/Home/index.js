import React from 'react';
import { Router, Route, Link } from 'react-router';

import JazzyCard from '../../JazzyCard';
import Card from '../../Card';

// this is a page called Demo, it's nested in the Template route in main.js so will
// inherit the Template layout

const Home = () => (
  <div>
    <Card>
      <div>I'm the home page.</div>
      <Link to='/demo'>Demo</Link>
    </Card>


  </div>
);

export default Home;
