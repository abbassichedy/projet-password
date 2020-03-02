import React, { Component } from "react";
import axios from "axios";
import "../src/login.css"
import { withRouter } from "react-router-dom";

class Add extends Component {
  state = {
    email: "",
    password: "",
    typeuser: "worker",
    exist: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async addUser() {
    const { email, password, typeuser } = this.state;
    // try {
    //   await axios.post("http://localhost:7000/api/users/", {
    //     email: email,
    //     password: password
    //   });
    //   console.log(response.status);
    //   this.props.history.push("/login");

    // } catch (e) {
    //   console.log(e.response.status);
    //   alert("the user already exist");
    // }

    axios
      .post("http://localhost:7008/api/users/", {
        email: email,
        password: password,
        typeuser: typeuser
      })
      .then(response => {
        console.log("the status is:", response.status);
        if (response.status === 200) this.props.history.push("/login");
      })
      .catch(err =>
        this.setState({ exist: "User Already exist", password: "" })
      );
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        {/* <h3>Add User</h3> */}
        {/* <input
          type="text"
          placeholder="Please type your email"
          name="email"
          value={this.state.email}
          onChange={e => this.handleChange(e)}
        /> */}
        {/* <input
          type="text"
          placeholder="Please type your password"
          name="password"
          value={this.state.password}
          onChange={e => this.handleChange(e)}
        /> */}
        {/* <button onClick={() => this.addUser()}>Add</button> */}
        <p>{this.state.exist}</p>
       
        <div className='from-register'>
<h1 className='title'>Identification</h1>
<form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-4">
      <input  type="text"
          placeholder="Please type your email"
          name="email" class="form-control" id="inputEmail3"  value={this.state.email}
          onChange={e => this.handleChange(e)}/>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-4">
      <input   type="text"
          placeholder="Please type your password"
          name="password"class="form-control" id="inputPassword3" value={this.state.password}
          onChange={e => this.handleChange(e)}/>
    </div>
  </div>
  {/* <select class="custom-select" name="typeuser" onChange={(e) => this.handleChange(e)}  >
            <option value="worker" selected >worker</option>
            <option value="client">client</option>

          </select> */}
  {/* <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Account</legend>
      <div class="col-sm-4" >
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label class="form-check-label" for="gridRadios1">
            Worker
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label class="form-check-label" for="gridRadios2">
            Client
          </label>
        </div>
      </div>
    </div>
  </fieldset> */}
   <div>
          <select class="custom-select" name="typeuser" onChange={(e) => this.handleChange(e)}  >
            <option value="worker" selected >worker</option>
            <option value="client">client</option>

          </select>
        </div>
  <div class="form-group row">
    <div class="col-sm-4">
      {/* <button type="submit" class="btn btn-danger" onClick={() => this.addUser()}>Login</button> */}
      <button onClick={() => this.addUser()}>Add</button>
    </div>
  </div>
</form>
</div>
      </div>
    );
  }
}
export default withRouter(Add);
