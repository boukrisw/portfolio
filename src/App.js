import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/Projects" component={Projects} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
