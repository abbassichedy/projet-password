import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
// import Caroussel from './composant/Caroussel'
// import Category from "./composant/Categorie";
// import Footer from "./composant/Footer";
import Navebar from "./composant/Navebar";
class Navbar extends Component {
  logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };
  render() {
    return (
      <div
        style={{ justifyContent: "flex-end" }}
      >
        {localStorage.getItem("token") !== null ? (
          <button onClick={() => this.logout()}>Logout</button>
        ) : (
          <div>
            <Navebar/>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/add">
              <button>Register</button>
            </Link>
            <Link to="/client">
              <button>client</button>
            </Link>
            
            {/* <Caroussel/> */}
            {/* <Category/> */}
            

          </div>
        )}
      </div>
    );
  }
}
export default withRouter(Navbar);
