import React, { Component } from "react";
import './Projects.css'
import Aos from "aos";
import "aos/dist/aos.css";

class Projects extends Component {
    state = {};
    render() {
      Aos.init({ duration:3000 });
      return (
            
        <div className="projects-section" id="projects">


        <div className="project-1" >
          <div className="left" data-aos="fade-right"><h1>The 830 Times</h1></div>
          <div className="right" data-aos="fade-up">img placeholder </div>
                 
        </div>
        
        <div className="project-1">
        <div className="right-3" data-aos="fade-up">img placeholder</div>
        <div className="left-3" data-aos="fade-left"><h1>Mechanic Manager</h1></div>
        
        </div>

        <div className="project-1">
        <div className="left" data-aos="fade-up" ><h1>Dillo Records</h1></div>
        <div className="right" data-aos="fade-up">img placeholder</div>
     
         
        </div>

         
      
       </div>

    );
    }
}

export default Projects;

