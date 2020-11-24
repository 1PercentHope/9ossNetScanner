import Scanner from "./Components/Scanner/Scanner.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import "./App.css";
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  render() {
    return (
      <div className="main">
        <div className="logIn">
          <center>
            {" "}
            <Provider store={store}>
              <Router>
                <Route path="/" exact component={SignIn} />

                <Route path="/scanner" component={Scanner} />
              </Router>
            </Provider>
          </center>
        </div>
      </div>
    );
  }
}

export default App;
