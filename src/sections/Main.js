import React, { Component } from "react";
import "./Main.css";
import Aos from "aos";
import "aos/dist/aos.css";

class Main extends Component {
  state = {};
  render() {
    Aos.init({ duration: 1000 });

    return (
      <div className="main-section" id="main">
        <div className="base one"></div>

        <div className="base three"></div>

        <div className="base four"></div>

        <div className="bio">
          <div class="reveal-text">
            <div class="hello">Hello </div>I am a web developer specializing in
            the development of creative interactions, by utilizing minimalistic
            layouts.
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
