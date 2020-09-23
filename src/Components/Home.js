import React from "react";
import "../App.css";
import Particles from "react-particles-js";

function Home() {
  return (
    <div>
      <div className="section no-pad-bot" id="index-banner">
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
            },
          }}
        />
        <div className="container">
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

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center">
                  <i className="fas fa-server"></i>
                </h2>
                <h5 className="center">Back-end</h5>

                <p className="light center">
                  Fluency in multiple major programming languages.
                  <br />
                  JAVA, Python, NodeJs and C.
                  <br />
                  Ability to write quality unit tests.
                  <br />
                  Knowledge of Algorithms and data structures.
                  <br />
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center">
                  <i className="fas fa-file-code"></i>
                </h2>
                <h5 className="center">Front-end</h5>

                <p className="light center">
                  Extensive experience with web development, with frequent
                  production releases.
                  <br />
                  ReactJs, Angular, TypeScript.
                  <br />
                  Proficient in materializecss and Bootstrap.
                  <br />
                  Firebase Authentication, Hosting and Realtime Database.
                  <br />
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center">
                  <i className="fas fa-database"></i>
                </h2>
                <h5 className="center">Database</h5>

                <p className="light center">
                  Knowledge of various DBMS technology.
                  <br />
                  Well versed with DBA processes SQL and NoSQL.
                  <br />
                  MySQL, Oracle, JDBC, PL/SQL.
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center">
                  <i className="fas fa-laptop"></i>
                </h2>
                <h5 className="center">Tools</h5>

                <p className="light center">
                  Knowledge of software version control systems.
                  <br />
                  Git, github and gitlab. <br />
                  Hands on experience on operating systems like Ubuntu, Linux
                  Mint.
                  <br />
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center">
                  <i className="fas fa-star"></i>
                </h2>
                <h5 className="center">Soft skills</h5>

                <p className="light center">
                  Constantly learning and improving.
                  <br />
                  Able to manage time and prioritize.
                  <br />
                  Communicating well with others.
                  <br />
                  Attention to detail.
                  <br />
                  Creative vision.
                  <br />
                </p>
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <h2 className="center">
                  <i className="fas fa-lightbulb"></i>
                </h2>
                <h5 className="center">Check some funny Projects</h5>
                <p className="light center">
                  <a
                    href="/Projects"
                    className="waves-effect waves-light btn-large"
                  >
                    <i className="material-icons center">send</i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
