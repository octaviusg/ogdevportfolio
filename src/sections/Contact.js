import React, { Component } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

import Mailto from "reactv16-mailto";
import { ExternalLink } from "react-external-link";

class Contact extends Component {
  state = {};
  render() {
    Aos.init({ duration: 2000 });
    return (
      <div className="contact-section" id="contact">
        <div data-aos="fade-up" className="contact-text">
          <h1>For work inquiries / questions send me an email:</h1>
          <Mailto
            className="email"
            email="hello@octaviogarcia.com"
            obfuscate={true}
          >
            <h1>hello@octaviogarcia.co</h1>
          </Mailto>

          <h1 className="sub-text">
            I share some of my work on{" "}
            <ExternalLink
              className="ig"
              href="https://www.instagram.com/octaviodevs/"
            >
              <span>Instagram.</span>
            </ExternalLink>{" "}
            Most of my repos can be found on{" "}
            <ExternalLink
              className="github"
              href="https://github.com/octaviusg"
            >
              <span>Github.</span>
            </ExternalLink>{" "}
            The information that is on this website can be also be found on my{" "}
            <ExternalLink
              className="linkedin"
              href="https://linkedin.com/in/octaviusgarcia"
            >
              <span>LinkedIn.</span>
            </ExternalLink>
          </h1>
        </div>
      </div>
    );
  }
}

export default Contact;
