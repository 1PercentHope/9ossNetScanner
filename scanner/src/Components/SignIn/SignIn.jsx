import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
    };
    this.onChangeVal = this.onChangeVal.bind(this);
  }
  onChangeVal = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log(this.state.id);
    return (
      <div>
        <input
          name="id"
          onChange={this.onChangeVal}
          placeholder="enter your secret id"
        ></input>
        <button>
          <Link to="/scanner" /> click me
        </button>
      </div>
    );
  }
}

export default SignIn;
