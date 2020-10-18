import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { SEARCH, LOGIN, BASE, PASSWORD, USER } from '../../actions/constants';

const Logged = () => (
  <div className="collapse navbar-collapse" id="navbarNav">
    <Search />
    <ul className="navbar-nav ml-auto">
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
    </ul>
  </div>
)

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="collapse navbar-collapse" id="navbarNav">
      <Search />
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
        {
          showLogin ? 
          <form className="form-inline my-2 my-lg-0">
            <input type="text" className="form-control  mr-sm-2" id={USER} placeholder={USER} />
            <input type="password" className="form-control  mr-sm-2" id={PASSWORD} placeholder={PASSWORD} />
            <button type="submit" className="btn btn-primary my-2 my-sm-0">{LOGIN}</button>
          </form>
          :
          <Link onClick={() => setShowLogin(true)} className="nav-link">Iniciar sesión</Link>
        }

        </li>
      </ul>
    </div>
  )
}

function Search() {
  return (
  <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder={SEARCH} aria-label={SEARCH} />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{SEARCH}</button>
  </form>
  )
}

export default class NavBar extends Component {
  render() {
    const { appname, user } = this.props;
    const navStyle = {
      backgroundColor: 'silver',
    }
    return (
      <div>
        <nav
          className="navbar navbar-expand-md navbar-light fixed-top"
          style={navStyle}
        >
          <div className="container">
            <Link className="navbar-brand" to="/">
              <i class="fas fa-user-shield"></i>
              {' '+appname}
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
              <span className="navbar-toggler-icon"></span>
            </button>
            { user.id==='' ?  <Login /> : <Logged /> }
          </div>
        </nav>
      </div>
    );
  }
}
