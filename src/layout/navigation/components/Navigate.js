import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navigate extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
        <a className="navbar-brand" href="#">
          React Playground
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="K8S Dashboard"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              <span className="nav-item nav-link">TODO</span>
            </Link>
            <Link to="/widgets" className="nav-item nav-link">
              <span className="nav-item nav-link">Widgets</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigate;
