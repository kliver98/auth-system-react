import React, { Component } from "react";
import './App.css';
import routes from "./config/routes";

import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user_logged: "Kliver",
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <p>{this.state.user_logged}</p>
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
