import React, { Component } from "react";
import "./Info.css";
import Aos from "aos";
import "aos/dist/aos.css";
import profileImg from "./projectImg/profileImg.jpg";

class Info extends Component {
  state = {};
  render() {
    Aos.init({ duration: 1000 });
    window.addEventListener("load", Aos.refresh);
    return (
      <div className="info-section" id="info" data-aos="example-anim3">
        <div className="imgContainer">
          <img src={profileImg} alt="" className="profileImage" />
        </div>

        <div data-aos="fade" className="info-text">
          <h1>Background</h1>

          <p>
            Born and raised in Texas; In early parts of my life, I found myself
            following the path of web development, by picking up free-lance work
            through the early social networks available. The understanding of
            prior technologies has helped me ease my way through the new
            frameworks that are available today. Nowadays I find myself adapting
            and learning how to implement new methods within my projects.
          </p>

          <h1>Skills & Experience</h1>
          <p>
            Well-organized person, problem solver, independent employee with
            high attention to detail. Skilled in multiple developing tools. My
            expertise takes place in the frontend with proficiency in
            JavaScript, CSS and HTML.
          </p>
        </div>
      </div>
    );
  }
}

export default Info;
