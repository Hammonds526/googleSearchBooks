import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand">
        Google Books
      </h1>
      <button
        className="navbar-toggler"
        type="button"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            Search <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link" to="/saved">
            Saved
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Nav;
