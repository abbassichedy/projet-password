import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

import { withRouter } from "react-router-dom";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    const { email, password } = this.state;
    axios
      .post("http://localhost:7008/api/users/login", { email, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        var token = res.data.token;
        var decoded = jwt_decode(token);
        console.log(decoded);

        if (decoded.typeuser === "client") this.props.history.push("/client");
        else this.props.history.push("/home");
      })
      .catch(err =>
        // console.error(err)
        alert("Please verify your login & password")
      );
  };

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <h3>Login Page</h3>
        <input
          type="text"
          placeholder="Please type your email"
          name="email"
          onChange={e => this.handleChange(e)}
          value={this.state.email}
        />
        <input
          type="password"
          placeholder="Please type your password"
          name="password"
          onChange={e => this.handleChange(e)}
          value={this.state.password}
        />
        <button onClick={() => this.login()}>Login</button>
      </div>
      
    );
  }
}
export default withRouter(Login);
