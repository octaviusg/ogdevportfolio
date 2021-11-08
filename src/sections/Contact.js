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
      <div data-aos="example-anim4" className="contact-section" id="contact">
        <div data-aos="fade-up" className="contact-text">
          For work inquiries / questions send me an email:
          <Mailto
            className="email"
            email="hello@octaviogarcia.co"
            obfuscate={true}
          >
            {" "}
            hello@octaviogarcia.co
          </Mailto>
          <div className="sub-text">
            Most of my repos can be found on{" "}
            <ExternalLink
              className="github"
              href="https://github.com/octaviusg"
            >
              <span>GitHub.</span>
            </ExternalLink>{" "}
            The information that is on this website can also be found on my{" "}
            <ExternalLink
              className="linkedin"
              href="https://linkedin.com/in/octaviusgarcia"
            >
              <span>LinkedIn. </span>
            </ExternalLink>{" "}
            From time to time I step out of my dwelling and practice{" "}
            <ExternalLink className="ig" href="https://octaviogarcia.co">
              <span>photography.</span>
            </ExternalLink>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
