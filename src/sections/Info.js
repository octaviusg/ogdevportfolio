import React, { Component } from "react";
import "./Info.css";
import Aos from "aos";
import "aos/dist/aos.css";

class Info extends Component {
  state = {};
  render() {
    Aos.init({ duration: 2000 });
    return (
      <div className="info-section" id="info">
        <div className="info-img">img-placeholder</div>
        <div data-aos="fade" className="info-text">
          <h1>Background</h1>

          <p>
            Born and raised in Del Rio, Texas. In early parts of my life, I
            found myself following the path of web development, by picking up
            free-lance work through the early social networks that were
            available. I'm quite fortunate to have spent the time with the
            basics which has helped me ease my way through the new frameworks
            that are available today. Nowadays I find myself adapting and
            learning how to implement new technologies within my projects.
          </p>

          <h1>Skills & Experience</h1>
          <p>
            Well-organized person, problem solver, independent employee with
            high attention to detail. Knowledgeable of various developing tools.
            My expertise takes place in the frontend with proficiency in
            JavaScript, CSS, HTML.
          </p>
        </div>
      </div>
    );
  }
}

export default Info;
