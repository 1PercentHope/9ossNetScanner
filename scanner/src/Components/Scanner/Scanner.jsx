import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Link } from "react-router-dom";
import Axios from "axios";

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data,
    });
  }
  deleteRequest = () => {
    Axios.delete("http://localhost:5000//thirdp/logout");
  };
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <div>
        <div>
          <QrReader
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
          />
        </div>

        <p>{this.state.result}</p>
        <div>
          <Link to="/">
            <button>LOG OUT</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Scanner;
