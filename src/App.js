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
      appname: 'loading...',
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
            appname
          });
        });});
    console.log(appname);
  };

  render() {
    const { appname } = this.state;
    let u = {name:"Kliver"};
    return (
      <Router>
        <NavBar appname={appname} user={u} />
        <div className="App">
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
            integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
            crossOrigin="anonymous"
          />
          <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossOrigin="anonymous"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossOrigin="anonymous"
          />
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossOrigin="anonymous"
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
