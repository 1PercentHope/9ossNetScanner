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
    this.props.login(id, password).then((res) => console.log(res));
  };
  render() {
    if (this.props.auth.isAuthenticated)
      return <Redirect to="/scanner"></Redirect>;

    return (
      <div className="inputContainer">
        {/* <nav className="navBar">
          <div className="icon">
            <h1 className="title">Qr-</h1>
            <h1 className="title2">Scanner</h1>
          </div>
        </nav> */}

        <div className="reminder">
          <center>
            <div id="container">
              scan
              <div id="flip">
                <div>
                  <div>qr</div>
                </div>
                <div>
                  <div>code</div>
                </div>
                <div>
                  <div>soccer</div>
                </div>
              </div>
              <div className="verify">VERIFY!</div>
            </div>
          </center>
        </div>
        <div className="parent">
          <form action="" onSubmit={this.checkUser} className="form">
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
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps, { login })(SignIn);
