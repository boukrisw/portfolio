import React from "react";
import "../App.css";

import Typical from "react-typical";

function Home() {
  return (
    <div>
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <Typical
            className="center light-blue-text typicalSize"
            steps={[
              "Hello world!",
              1000,
              "Hello world! Welcome to Walid BOUKRIS PORTFOLIO",
              500,
            ]}
            loop={1}
            wrapper="p"
          />
          <h1 className="header center teal-text  text-lighten-2">
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
                <h2 className="center light-blue-text">
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
                <h2 className="center light-blue-text">
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
                <h2 className="center light-blue-text">
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
                <h2 className="center light-blue-text">
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
                <h2 className="center light-blue-text">
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
                <h2 className="center light-blue-text">
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
      <footer className="page-footer grey">
        <div className="container">
          <div className="row">
            <div className="col l6 s14">
              <h5 className="white-text">About Me</h5>
              <p className="grey-text text-lighten-4">
                Currently I'am preparing my 1st year of Master in Computer
                Science, I'am full of energy and ready to take up any challenge.
                <br /> I'am open to any mission anywhere in the world, front or
                back end, in all languages!
              </p>
            </div>
            <div className="col l2 s12">
              <h5 className="white-text">Connect</h5>
              <ul>
                <li>
                  <a
                    className="white-text footer-text"
                    href="https://github.com/boukrisw"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github"></i>&nbsp; Github
                  </a>
                </li>
                <li>
                  <a
                    className="white-text footer-text"
                    href="https://www.linkedin.com/in/walid-boukris-179771157/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin"></i>&nbsp; Linkedin
                  </a>
                </li>
                <li>
                  <a
                    className="white-text footer-text"
                    href="https://www.linkedin.com/in/walid-boukris-179771157/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fas fa-briefcase"></i>&nbsp; Fiverr
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l4 s12">
              <h5 className="white-text">Contact</h5>
              <ul>
                <li>
                  <div className="white-text footer-text">
                    <i className="fas fa-phone"></i> (+33) 6 45 36 96 39
                  </div>
                </li>
                <li>
                  <div className="white-text footer-text">
                    <i className="fas fa-envelope"></i> boukrisw@gmail.com
                  </div>
                </li>
                <li>
                  <div className="white-text footer-text">
                    <i className="fas fa-map-marker-alt"></i> Grenoble, France
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            Made by{" "}
            <a href="/" className="light-blue-text  text-lighten-2">
              Walid BOUKRIS
            </a>{" "}
            with ReactJs and deployed in Firebase (;
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
