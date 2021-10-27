import React, { Component } from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { GiWorld } from "react-icons/gi";

import img1 from "./projectImg/hifiCovefScreenshot.jpg";
import img2 from "./projectImg/sample.jpg";
import img3 from "./projectImg/tipifyScreenshot.jpg";
import "./Projects.css";
import Aos from "aos";
import "aos/dist/aos.css";

class Projects extends Component {
  state = {};

  render() {
    Aos.init({ duration: 1500 });
    return (
      <div className="projects-section" data-aos="example-anim2" id="projects">
        <div className="projectWrapper">
          <div className="project-1">
            <div className="titlenimage">
              <div className="left">HI-FI Cover</div>
              <div className="right">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="projectText">
              The project originated from the need to catalog my current music
              collection. The social network aspect provided the avenue for
              sharing with other users a recent purchased title.
            </div>
            <div className="projectText2">
              Adobe XD helped me with the visializion of the layout along with
              working out a better UX/UI. Discogs API was the avenue in which
              the information was gathered. The user inputs the catalog number
              of the album and it returns the album title, artist, and after
              parsing the intial call. I was able to gather the track title
              information as well as the credits pertaining to the album title.
              For the client side, React js was the tool used for building of
              the UI components. Axios was the way the information was fetched,
              and react usestate was the method in which the data was displayed.
              Some of the features consist of users being able to search titles
              or artists using the search bar in the collection page. The feed
              for explore page was the most intersting component to work on. In
              order for the user to have a better experience I needed for the
              feed to randomize the images within the grid. Math.random() are
              always pretty great go to, but its not often the most effective.
              The final decision came down to using a algorythiem. this
              minimized the changes of getting the same album appearing side by
              side. and increased the likelyhood of every image getting a shot
              at being seen
              <div className="projectImg">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="projectText3">
              In the back-end the REST API was built using Nodejs, express and
              mongoDB was used for storage. Mongoose interact with MongoDB
              database
              <div className="projectImg3">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="projectText4">deployment and future features</div>
            <div className="projectLinks">
              <div className="singlePLink">
                <VscGithubInverted />
                GitHub repo
              </div>
              <span className="mid"> | </span>
              <div className="singlePLink">
                <GiWorld />
                Live website
              </div>
            </div>
          </div>

          {/* project 2 tipify */}
          <div className="project-1">
            <div className="titlenimage">
              <div className="left">tipify</div>
              <div className="right">
                <img src={img1} alt="" />
              </div>
            </div>

            <div className="projectText">
              The project originated from the need to catalog my current music
              collection. The social network aspect provided the avenue for
              sharing to other friends what I have recently purchased. Discogs
              API was the avenue in which i gathered the information. The user
              inputs the catalog number of the album and it returns the album
              title, artist, and after parsing the intial call. I was able to
              gather the track title information as well as the credits
              pertaining to the album title.
            </div>
            <div className="projectText2">
              For the client side, React js was the tool used for building of
              the UI components. Axios was the way the information was fetched,
              and react usestate was the method in which the data was displayed.
              <div className="projectImg">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="projectText3">
              In the back-end Nodejs, express and mongoose was used for the
              development of the API mongoDB was used for storage. A third party
              API is used to gather the album covers, artist, and track
              information.
              <div className="projectImg3">
                <img src={img1} alt="" />
              </div>
            </div>

            <div className="projectText4">
              In the back-end Nodejs, express and mongoose was used for the
              development of the API mongoDB was used for storage. A third party
              API is used to gather the album covers, artist, and track
              information.
            </div>

            <div className="projectLinks">
              <div className="singlePLink">
                <VscGithubInverted />
                GitHub repo
              </div>
              <span className="mid"> | </span>
              <div className="singlePLink">
                <GiWorld />
                Live website
              </div>
            </div>
          </div>

          {/* project 3 Dillo Records */}

          <div className="project-1">
            <div className="titlenimage">
              <div className="left">'Dillo Records</div>
              <div className="right">
                <img src={img1} alt="" />
              </div>
            </div>

            <div className="projectText">
              The idea for the project came from need to catalog my current
              collection. The social network aspect provided the avenue for
              sharing to other friends what I have recently purchased.
            </div>
            <div className="projectText2">
              For the client side, React js was the tool used for building of
              the UI components. Axios came in handy for fetching the
              information from the back-end, and react usestate was the method
              in which the data was displayed.
              <div className="projectImg">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="projectText3">
              In the back-end Nodejs, express and mongoose was used for the
              development of the API mongoDB was used for storage. A third party
              API is used to gather the album covers, artist, and track
              information.
              <div className="projectImg3">
                <img src={img1} alt="" />
              </div>
            </div>

            <div className="projectText4">
              In the back-end Nodejs, express and mongoose was used for the
              development of the API mongoDB was used for storage. A third party
              API is used to gather the album covers, artist, and track
              information.
            </div>

            <div className="projectLinks">
              <div className="singlePLink">
                <VscGithubInverted />
                GitHub repo
              </div>
              <span className="mid"> | </span>
              <div className="singlePLink">
                <GiWorld />
                Live website
              </div>
            </div>
          </div>

          {/* project 4 MYFLIX */}

          <div className="project-1">
            <div className="titlenimage">
              <div className="left">MYFLIX</div>
              <div className="right">
                <img src={img1} alt="" />
              </div>
            </div>

            <div className="projectText">
              The idea for the project came from need to catalog my current
              collection. The social network aspect provided the avenue for
              sharing to other friends what I have recently purchased.
            </div>
            <div className="projectText2">
              For the client side, React js was the tool used for building of
              the UI components. Axios came in handy to fetch all the
              information, and react usestate was the method in which the data
              is displayed.
              <div className="projectImg">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="projectText3">
              In the back-end Nodejs, express and mongoose was used for the
              development of the API mongoDB was used for storage. A third party
              API is used to gather the album covers, artist, and track
              information.
              <div className="projectImg3">
                <img src={img1} alt="" />
              </div>
            </div>

            <div className="projectText4">
              In the back-end Nodejs, express and mongoose was used for the
              development of the API mongoDB was used for storage. A third party
              API is used to gather the album covers, artist, and track
              information.
            </div>

            <div className="projectLinks">
              <div className="singlePLink">
                <VscGithubInverted />
                GitHub repo
              </div>
              <span className="mid"> | </span>
              <div className="singlePLink">
                <GiWorld />
                Live website
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
