import React from 'react';

const Card = (props) => {
  return (
    <div className="thumbnail">
      <div className="caption">
        <h3 style={{"fontSize":"26px"}}>{props.title}</h3>
        {props.children}
      </div>
    </div>
  );
};
export default Card;
