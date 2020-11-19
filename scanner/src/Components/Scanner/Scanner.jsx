import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Link } from "react-router-dom";
import axios from "axios";

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result",
      statusText: "",
      response: {},
    };

    this.handleScan = this.handleScan.bind(this);
  }
  async handleScan(data) {
    this.setState({
      result: data,
    });

    if (data !== null && data !== undefined) {
      let code = data.substring(7);
      if (code !== undefined) {
        console.log(code);
        await axios
          .delete("http://localhost:5000/thirdp/scan", {
            data: { code },
          })
          .then((res) => {
            console.log(res);
            this.setState({ statusText: res.statusText });
            if (res.statusText.toLowerCase() === "ok") {
              alert("ok");
            } else {
              alert("NO");
            }
          })
          .catch((err) => console.log(err));
      }
    }
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
