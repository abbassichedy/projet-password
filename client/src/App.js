import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./login";
import Add from "./add";
import Home from "./home";
import Navbar from "./navbar";
import Client from "./Client";

import Footer from "./composant/Footer";
import Caroussel from "./composant/Caroussel";
import Category from './composant/Categorie'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Caroussel/>
              <Category/>
              <Footer/>
            </Route>
            <Route exact path="/login">
              <Navbar />
              <Login/>
            </Route>
            <Route exact path="/add">
              <Navbar />
              <Add />
            </Route>
            <Route exact path="/home">
              <Navbar />
              <Caroussel/>
              <Home />
              <Footer/>
            </Route>
            <Route exact path="/client">
              <Navbar />
              <Client />
            </Route>
          </Switch>
          
        </BrowserRouter>
      </div>
    );
  }
}
