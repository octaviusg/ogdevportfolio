import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

class Main extends Component {
  state = {};
  render() {
    Aos.init({ duration: 3000 });
    return (
      <div className="main-section" id="main">
        <div data-aos="fade-up" className="bio">
          <h1>
            <span className="hello">Hello</span>, I am a web developer based out
            of Austin, Tx.
          </h1>
          <p>
            I specialize in generating creative interactions with minimalistic
            design layouts
          </p>
        </div>
      </div>
    );
  }
}

export default Main;
