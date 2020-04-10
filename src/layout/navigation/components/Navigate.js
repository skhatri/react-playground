import React, { Component } from "react";

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
            <a href="/widgets" className="nav-item nav-link" href="#">
              <span className="nav-item nav-link">Widgets</span>
            </a>
            <a href="/" className="nav-item nav-link disabled" href="#">
              <span className="nav-item nav-link">TODO</span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigate;
