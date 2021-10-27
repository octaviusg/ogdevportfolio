import React, { Component } from "react";
import "./Main.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Draggable from "react-draggable"; // Both at the same time

class Main extends Component {
  state = {};
  render() {
    Aos.init({ duration: 1200 });

    return (
      <div className="main-section" id="main">
        <Draggable>
          <div className="base one"></div>
        </Draggable>

        <Draggable>
          <div className="base three"></div>
        </Draggable>

        <Draggable>
          <div className="base four"></div>
        </Draggable>

        <div className="bio">
          <div class="reveal-text">
            <span class="hello">Hello</span>, I am a web developer specializing
            in the development of creative interactions, by utilizing
            minimalistic design layouts.
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
