import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const active = window.location.pathname;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${active === '/' ? 'active' : null}`}>
              <Link className="nav-link" to="/">
                <i className="fa fa-home">Home</i>
              </Link>
            </li>
            <li className={`nav-item ${active === '/add-contact' ? 'active' : null}`}>
              <Link className="nav-link" to="/add-contact">
                <i className="fa fa-plus">Add</i>
              </Link>
            </li>
            <li className={`nav-item ${active === '/about' ? 'active' : null}`}>
              <Link className="nav-link" to="/about">
                <i className="fa fa-question">About</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
