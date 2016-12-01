import React from 'react';

import JazzyCard from '../../JazzyCard';
import Card from '../../Card';

// this is a page called Demo, it's nested in the Template route in main.js so will
// inherit the Template layout

const Demo = () => (
  <div>
    <Card>
      <div>Normal DOM Element</div>
    </Card>

    <JazzyCard title='This title is a prop of the component!'>
      <h4>and I'm just normal html but I belong to a react component </h4>
      <p>I adhere to JSX standards.</p>
    </JazzyCard>
  </div>
);

export default Demo;
