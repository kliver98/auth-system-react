import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import routes from './config/routes';
import NavBar from './components/NavBar/NavBar';
import firebase from './config/firebase';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BASE } from './actions/constants';

function Sidebar() {
  let sidebarStyle = {marginTop: '3em',
                      marginLeft: '2em',
                      position: 'fixed',
        top: '0',
        bottom: '0',
        minHeight: '100vh !important',
        zIndex: '100',
        padding: '5em 1em 0 0',
        boxShadow: 'inset -1px 0 0 rgba(0, 0, 0, .1)',
  };
  return (
    <div className="sidebar-style" style={sidebarStyle}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="nav-link font-weight-bold h5">Dependencias</span>
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
          <span className="nav-link font-weight-bold h5">Usuarios</span>
          <ul class="nav flex-column">
            <li class="nav-item">
              <Link class="nav-link active" to={BASE+"user/create"}>Crear</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={BASE+"user/search"}>Buscar</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to={BASE+"user/modify"}>Editar / Eliminar</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      appname: '',
      user: {
        id: '',
        fullname: '',
        email:'',
      },
      db: firebase.firestore(),
    };
  }

  componentDidMount = () => {
    let appname = '';
    this.state.db
      .collection("app")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          appname = doc.data().name;
          this.setState({
            appname,
          });
        });});
  };

  render() {
    const { appname, user } = this.state;
    const appStyle = {
      marginTop: '4em',
    }
    return (
      <Provider store={store}>
        <Router>
          <Sidebar/>
          <NavBar appname={appname} user={user} />
          <div className="App" style={appStyle}>
            <link 
              rel="stylesheet" 
              href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
              integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
              crossOrigin="anonymous"
            />
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            {routes}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
