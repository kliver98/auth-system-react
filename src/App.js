import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './config/routes';
import NavBar from './components/NavBar/NavBar';
import firebase from './config/firebase';

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
      <Router>
        <NavBar appname={appname} user={user} />
        <div className="App" style={appStyle}>
          <link 
            rel="stylesheet" 
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
