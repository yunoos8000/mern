import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Default from "./components/Default";
import Navbar from "./components/Navbar";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route  component={Default} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
