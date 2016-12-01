import React from 'react';

const Card = (props) => {
  return (
    <div className="panel panel-default">
      <div className="panel-body">
        {props.children}
      </div>
    </div>
  );
};
export default Card;
