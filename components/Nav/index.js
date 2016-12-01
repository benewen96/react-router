import React from 'react';

const Nav = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img alt="Brand" src={props.brandImage}  height="30px" />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
