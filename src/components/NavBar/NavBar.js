import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../config/firebase';

export default class NavBar extends Component {
  render() {
    const { appname, user } = this.props || 'hola';
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">
              {appname}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tasks">
                    Tasks
                  </Link>
                </li>
              </ul>
            </div>
            <span className="my-2 my-lg-0">Bienvenido: {user.name}</span>
          </div>
        </nav>
      </div>
    );
  }
}
