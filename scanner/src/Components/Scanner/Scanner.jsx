import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import sound from "./sound.mp3";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";

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
    this.loggingOut = this.loggingOut.bind(this);
  }
  handleScan(data) {
    this.setState({
      result: data,
    });

    if (data !== null && data !== undefined) {
      console.log(data);
      let code = data;
      if (code !== undefined) {
        console.log(code);
        axios
          .delete("http://192.168.11.111:5000/thirdp/scan", {
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
  loggingOut() {
    this.props.logout();
  }

  render() {
    const previewStyle = {
      height: 150,
      width: 200,
    };

    return (
      <div className="scanner">
        <div>
          <QrReader
            // style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            delay={1000}
            // style={{ widht: "23%" }}
            resolution={1000}
          />
        </div>
        <p>{this.state.result}</p>
        <div className="logOut">
          <Link to="/">
            <button onClick={this.loggingOut}>LOG OUT</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStatetoProps, { logout })(Scanner);
