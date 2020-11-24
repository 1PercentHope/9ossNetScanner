import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import "./SignIn.css";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      user: [],
      root: "/",
    };
    this.onChangeVal = this.onChangeVal.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }
  onChangeVal = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  checkUser = (e) => {
    e.preventDefault();
    const { id, password } = this.state;
    this.props.login(id, password);
  };
  render() {
    if (this.props.auth.isAuthenticated)
      return <Redirect to="/scanner"></Redirect>;

    return (
      <div className="inputContainer">
        <nav className="navBar">
          <div className="icon">
            <h1 className="title">Qr-</h1>
            <h1 className="title2">Scanner</h1>
          </div>
        </nav>

        <div className="reminder">
          <center>
            <h1>Reminder</h1>
            <p>
              This app is mainly for Qr codes scanning. Please leave the app if
              you don't have a permission to use it.
            </p>
            <p>And if you have a licence from the admin you can</p>
          </center>
        </div>
        <form action="" onSubmit={this.checkUser}>
          <input
            className="inputId"
            name="id"
            onChange={this.onChangeVal}
            placeholder="enter your secret id"
          ></input>
          <input
            className="inputId"
            name="password"
            type="password"
            onChange={this.onChangeVal}
            placeholder="enter your password"
          ></input>
          <input type="submit" value="login" className="inputButton" />
        </form>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps, { login })(SignIn);
