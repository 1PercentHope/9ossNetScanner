import Scanner from "./Components/Scanner/Scanner.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import store from "./store.js";
import { Provider } from "react-redux";
import './App.css'
import React, { Component } from 'react'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
  }
  changeView() {
    this.setState({ toggle: true })
  }
  render() {
    return (
      <div className='main'>
        <nav className="navBar">
          <div className="icon">
            <h1 className="title">Qr-</h1>
            <h1 className="title2">Scanner</h1>
          </div>

        </nav>
        {!this.state.toggle && <div className="reminder">
          <center><h1>
            Reminder
          </h1>
            <p>
              This app is mainly for Qr codes scanning. Please leave the app if you don't have a permission to use it.
          </p>
            <p>And if you have a licence from the admin you can</p>
            <h1 onClick={() => { this.changeView() }} className='loginText'>Log in</h1>  </center>
        </div>}
        <div className='logIn'>
          <center> <Provider store={store}>
            <Router>
              <root>
                {this.state.toggle && <Route path="/" exact={true} component={SignIn} />}
                <Route path="/scanner" component={Scanner} />
              </root>
            </Router>
          </Provider></center>
        </div>
      </div>
    );
  }
}

export default App;
