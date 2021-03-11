import React from 'react';
import { Link } from 'react-router-dom';

const NavComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
  <Link className="navbar-brand" to={'/'}>Home</Link>
  <div className="collapse navbar-collapse">
  <ul className="navbar-nav ml-auto">

  <li className="nav-item active">
        <Link className="nav-link" to={'/login'}>Login</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to={'/register'}>signup</Link>
      </li>
</ul>
  </div>
  

  </div>
</nav>
    </div>
  );
}

export default NavComponent;
