import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import sound from "./sound.mp3";

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
              Swal.fire({
                icon: "Acces!",
                text: "You clicked the button!",
                title: "success",
                onOpen: function () {
                  var zippi = new Audio(
                    "http://limonte.github.io/mp3/zippi.mp3"
                  );
                  zippi.play();
                },
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showCancelButton: true,
                onOpen: function () {
                  var zippi = new Audio(sound);
                  zippi.play();
                },
              });
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
      <div className="Main">
        <div>
          <QrReader
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            delay={2000}
          />
        </div>
        <p>{this.state.result}</p>
        <div className='logOut'>
          <Link to="/">
            <button >LOG OUT</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Scanner;
