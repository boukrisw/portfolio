import React from 'react'
import "./Home.css";
import Particles from "react-particles-js";

function Entete() {
    return (
        <div className="section no-pad-bot" id="index-banner">
       
        <div className="container">
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 25,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
            },
          }}
        />
          <h1 className="header center  text-lighten-2">
            Full stack Developper
          </h1>
          <hr />
          <div className="center">
            <span>
              <h5 className="header col s12 light">
                <i title="java" className="fab fa-java turn spaan"></i>
                &nbsp;Artificial Intelligence&nbsp;
                <i title="node" className="fab fa-node turn spaan"></i>
              </h5>
            </span>

            <span>
              <h5 className="header col s12 light">
                <i title="react" className="fab fa-react turn spaan"></i>
                &nbsp;Web Development&nbsp;
                <i title="angular" className="fab fa-angular turn spaan"></i>
              </h5>
            </span>

            <span>
              <h5 className="header col s12 light">
                <i title="python" className="fab fa-python turn spaan"></i>
                &nbsp;Computer Vision&nbsp;
                <i title="python" className="fab fa-python turn spaan"></i>
              </h5>
            </span>
          </div>
          <hr />
        </div>
      </div>
    )
}

export default Entete
