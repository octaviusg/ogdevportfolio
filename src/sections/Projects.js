import React, { Component } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { GiWorld } from "react-icons/gi";
import { ExternalLink } from "react-external-link";
import img1 from "./projectImg/hifiCovefScreenshot.jpg";
import img2 from "./projectImg/hifimobile-1.png";
import img3 from "./projectImg/tipifyScreenshot.jpg";
import img4 from "./projectImg/typifymobile.png";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";

class Projects extends Component {
  state = {};

  render() {
    Aos.init({ duration: 800 });

    return (
      <div className="projects-section" data-aos="example-anim2" id="projects">
        <div className="projectWrapper">
          <div className="project-1">
            <div className="projectTitle">HI-FI Cover</div>
            <div className="right">
              <img className="hifiCoverweb" src={img1} alt="" />

              <img className="hifiCoverMobile" src={img2} alt="" />
            </div>

            <div className="projectText">
              The application came about from the need of cataloging my music
              collection. The information is gathered using Discogs API. The
              user inputs a catalog number for a specific album and in return is
              the album artwork and track titles, along with other credits. This
              information is then stored for each user.
            </div>
            <div className="projectLinks">
              <ExternalLink
                className="PPLink"
                href="https://github.com/octaviusg/albumcover"
              >
                <div className="singlePLink">
                  <VscGithubInverted />
                  GitHub repo
                </div>
              </ExternalLink>
              <span className="mid"> | </span>
              <ExternalLink
                className="PPLink"
                href="https://hificover.herokuapp.com/"
              >
                <div className="singlePLink">
                  <GiWorld />
                  Live website
                </div>
              </ExternalLink>
            </div>
          </div>

          {/* project 2 tipify */}
          <div className="project-1">
            <div className="projectTitle">typify</div>
            <div className="right">
              <img className="hifiCoverweb" src={img3} alt="" />

              <img className="hifiCoverMobile" src={img4} alt="" />
            </div>

            <div className="projectText">
              Built like an image blog app with the feature of letting users
              create their own accounts to bookmark any post within the website.
              Admins are the only users who can curate website.
            </div>
            <div className="projectLinks">
              <ExternalLink
                className="PPLink"
                href="https://github.com/octaviusg/tipify"
              >
                <div className="singlePLink">
                  <VscGithubInverted />
                  GitHub repo
                </div>
              </ExternalLink>
              <span className="mid"> | </span>
              <ExternalLink
                className="PPLink"
                href="https://typify-23c41.web.app/"
              >
                <div className="singlePLink">
                  <GiWorld />
                  Live website
                </div>
              </ExternalLink>
            </div>
          </div>

          {/* project 3 Dillo Records */}
          {/* <div className="project-1">
            <div className="projectTitle">La Honda Records</div>
            <div className="right">
              <img className="hifiCoverweb" src={img1} alt="" />

              <img className="hifiCoverMobile" src={img2} alt="" />
            </div>

            <div className="projectText">
              An E-commerce website, a blog feature for company news, and a few
              static pages for La Honda Records.
            </div>
            <div className="projectLinks">
              <ExternalLink
                className="PPLink"
                href="https://github.com/octaviusg/dillorecords"
              >
                <div className="singlePLink">
                  <VscGithubInverted />
                  GitHub repo
                </div>
              </ExternalLink>
              <span className="mid"> | </span>

              <div className="singlePLinkDisabled">
                <ExternalLink
                  className="PPLink"
                  href="https://hificover.herokuapp.com/"
                >
                  <div className="singlePLink">
                    <GiWorld />
                    Live website
                  </div>
                </ExternalLink>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Projects;
