import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SEARCH, LOGIN, BASE, PASSWORD, USER, LOGOUT } from '../../actions/constants';

let user = {};

const Logged = () => (
  <div className="collapse navbar-collapse" id="navbarNav">
    <Search />
    <ul className="navbar-nav ml-auto">
      <li className="nav-item dropdown">
        <span className="nav-link dropdown-toggle" data-toggle="dropdown" role="button">{user.fullname}</span>
        <div className="dropdown-menu">
          <Sidebar/>
        </div>
      </li>
      <li className="nav-item">
          <Link className="nav-link" to={BASE+"logout"}>
          <i className="fas fa-sign-out-alt"></i>
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
          <span onClick={() => setShowLogin(true)} className="nav-link" style={{cursor:"pointer"}}>Iniciar sesión</span>
        }

        </li>
      </ul>
    </div>
  )
}

function Search() {
  return (
  <>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder={SEARCH} aria-label={SEARCH} />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{SEARCH}</button>
    </form>
  </>
  )
}

function Sidebar() {
  let cursorTitle = {
    cursor: 'default',
  }
  return (
    <>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="nav-link font-weight-bold h5" style={cursorTitle}>Mi perfil</span>
          <ul class="nav flex-column">
            <li class="nav-item">
              <Link class="nav-link active" to={BASE+"user/modify/"+user.email}>Ver</Link>
            </li>
          </ul>
        </li>
        <li className="list-group-item">
          <span className="nav-link font-weight-bold h5" style={cursorTitle}>Dependencias</span>
          <ul class="nav flex-column">
            <li class="nav-item">
              <Link class="nav-link active" to={BASE+"dependency/create"}>Crear</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={BASE+"dependency/search"}>Buscar</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={BASE+"dependency/modify"}>Editar / Eliminar</Link>
            </li>
          </ul>
        </li>
        <li className="list-group-item">
          <span className="nav-link font-weight-bold h5" style={cursorTitle}>Usuarios</span>
          <ul class="nav flex-column">
            <li class="nav-item">
              <Link class="nav-link active" to={BASE+"user/create"}>Crear</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={BASE+"user/search"}>Buscar</Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}

class NavBar extends Component {
  render() {
    const { appname } = this.props;
    const navStyle = {
      backgroundColor: 'silver',
    }
    user = this.props.user;
    return (
      <div>
      
        <nav
          className="navbar navbar-expand-md navbar-light fixed-top"
          style={navStyle}
        >
          <div className="container">
            <Link className="navbar-brand" to={BASE}>
              <i className="fas fa-user-shield"></i>
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
            { user.email==='' ?  <Login /> : <Logged/> }
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

export default connect(mapStateToProps)(NavBar);