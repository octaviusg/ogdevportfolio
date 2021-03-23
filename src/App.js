import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Main from "./sections/Main";
import Info from "./sections/Info";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Main />

        <Projects />
        <Info />
        <Contact />
      </div>
    );
  }
}

export default App;
