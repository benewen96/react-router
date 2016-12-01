import React from 'react';
import { Link } from 'react-router';

import Nav from '../../Nav';

// this is our main template component, all routes are rendered at {props.children}

const Template = (props) => (
  <div>
    <Nav brandImage='img/logo.png'/>

    <div className='container'>
      {props.children}
    </div>
  </div>
);

export default Template;
