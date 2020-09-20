import React, { useState } from "react";
import "../App.css";
import sort from "../Ressources/sort.png";

import Sokoban from "../Ressources/Sokoban.png";
import P4 from "../Ressources/P4.png";
import sudoku from "../Ressources/sudoku.png";
import movies from "../Ressources/movies.png";
import takuzu from "../Ressources/takuzu.png";
import WB from "../Ressources/WB.png";
import fanorana from "../Ressources/fanorana.jpg";
import plane from "../Ressources/plane.png";
import Pygame from "../Ressources/Pygame.png";
import shell from "../Ressources/shell.png";
import train from "../Ressources/train.png";

function Projects() {
  const [techno, setTechno] = useState("React");

  const change = (t) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTechno(t);
  };

  const projects = () => {
    return (
      <div className="container">
        <div className="section">
          {techno === "React" ? (
            <div className="row">
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      style={{ width: `150px`, height: `110px` }}
                      src={sort}
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Sorting Algorithms Visulaser</h5>
                    {/*eslint-disable-next-line*/}
                    <p className="light">
                      Visualize sorting Algorithms. Quick sort, shell sort and
                      more🔥
                    </p>
                    <div className="card-action">
                      <a
                        href="https://sorting-algos-visualizer-8022c.web.app/"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WebSite
                      </a>
                      <a
                        href="https://github.com/boukrisw/sorting-algos"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      style={{ width: `150px`, height: `110px` }}
                      src={P4}
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Connect Four Chat ROOM</h5>
                    <p className="light">Connect Four game with your friends</p>
                    <div className="card-action">
                      <a
                        href="https://connect4roomchat.web.app/"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WebSite
                      </a>
                      <a
                        href="https://github.com/boukrisw/connect4"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      style={{ width: `150px`, height: `110px` }}
                      src={WB}
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">This Portfolio</h5>
                    <p className="light">Professional portfolio</p>
                    <div className="card-action">
                      <a href="/" className="teal-text">
                        WebSite
                      </a>
                      <a
                        href="https://github.com/boukrisw/portfolio"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      style={{ width: `150px`, height: `110px` }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/langfr-220px-Instagram_logo_2016.svg.png"
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Instagram clone</h5>
                    {/*eslint-disable-next-line*/}
                    <p className="light">SignUp and post a picture🔥</p>
                    <div className="card-action">
                      <a
                        href="https://instagram-clone20.web.app/"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WebSite
                      </a>
                      <a
                        href="https://github.com/boukrisw/Instagram-clone"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      style={{ width: `150px`, height: `110px` }}
                      src="https://gusandco.net/wp-content/uploads/2015/08/td-amazon-smile-logo-01-large.jpg"
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Amazon clone</h5>
                    {/*eslint-disable-next-line*/}
                    <p className="light">
                      AMAZON clone with REACT Context API 🚀
                      <br />
                    </p>
                    <div className="card-action">
                      <a
                        href="https://clone-ade69.web.app/"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WebSite
                      </a>
                      <a
                        href="https://github.com/boukrisw/Amazon-clone"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      style={{ width: `150px`, height: `110px` }}
                      src="https://yt3.ggpht.com/a/AATXAJyzyrPJMwSCUxtTlY-MQ9sEqX8XHm8MYq4yr7e6Gw=s900-c-k-c0xffffffff-no-rj-mo"
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Netflix clone</h5>
                    {/*eslint-disable-next-line*/}
                    <p className="light">
                      NETFLIX clone using Material-UI and TMDB API🌟
                    </p>
                    <div className="card-action">
                      <a
                        href="https://netflix-clone-42aed.web.app/"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WebSite
                      </a>
                      <a
                        href="https://github.com/boukrisw/Netflix-clone"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      style={{ width: `150px`, height: `110px` }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/langfr-220px-WhatsApp.svg.png"
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">WhatsApp clone</h5>
                    {/*eslint-disable-next-line*/}
                    <p className="light">
                      Create a Chat Room and talk with your friends, family 🌟
                    </p>
                    <div className="card-action">
                      <a
                        href="https://whatsapp-clone97.web.app/"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WebSite
                      </a>
                      <a
                        href="https://github.com/boukrisw/whatsapp-clone"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      style={{ width: `150px`, height: `110px` }}
                      src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Airbnb clone</h5>
                    {/*eslint-disable-next-line*/}
                    <p className="light">Airbnb clone with REACT 🚀🚀</p>
                    <div className="card-action">
                      <a
                        href="https://airbnb-clone97.web.app/"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WebSite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      style={{ width: `150px`, height: `110px` }}
                      src={sudoku}
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Sudoku solver</h5>
                    <p className="light">
                      Can't solve a Sudoku problem!
                      <br />
                      Go check the solution here
                    </p>
                    <div className="card-action">
                      <a
                        href="https://suduko-solver-25e58.web.app/"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WebSite
                      </a>
                      <a
                        href="https://github.com/boukrisw/Sudoku-solver"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : techno === "Angular" ? (
            <div className="row">
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      src={Sokoban}
                      style={{ width: `150px`, height: `110px` }}
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Shortest Path Visulaser</h5>
                    <p className="light">
                      Visualize Pathfinding Algorithms.
                      <br />
                      (A* search, dijkstra and more)
                    </p>
                    <div className="card-action">
                      <a
                        href="https://shortest-path-f1101.web.app/?fbclid=IwAR08A_WlqZKuzerRFU7kwFoQiGvQMGAcnlHN2QEs5uhN4qnKVBsmNucDQac"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WebSite
                      </a>
                      <a
                        href="https://github.com/boukrisw/shortest-path"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      style={{ width: `150px`, height: `110px` }}
                      src={movies}
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Movies library</h5>
                    <p className="light">
                      Search for movies and see people's opinion
                    </p>
                    <div className="card-action">
                      <a
                        href="https://movies-lib.web.app/"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WebSite
                      </a>
                      <a
                        href="https://github.com/boukrisw/Movies-library"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      style={{ width: `150px`, height: `110px` }}
                      src={takuzu}
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">takuzu solver</h5>
                    <p className="light">
                      Can't solve a Takuzu problem!
                      <br /> Go check the solution here
                    </p>
                    <div className="card-action">
                      <a
                        href="https://takuzu-solver.web.app/?fbclid=IwAR3waKjwCAvJVljBwe2uuC1vpH86hC4yqqElKyMcshpgSShjNoV34LqftVo"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        WebSite
                      </a>
                      <a
                        href="https://github.com/boukrisw/takuzu-solver"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : techno === "JAVA" ? (
            <div className="row">
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      src={fanorana}
                      style={{ width: `150px`, height: `110px` }}
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Fanorana</h5>
                    <p className="light">
                      A Malagasy strategy board game with some powerful IA.
                    </p>
                    <div className="card-action">
                      <a
                        href="https://github.com/boukrisw/Fanorona/blob/master/IA.pdf"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Presentation
                      </a>
                      <a
                        href="https://github.com/boukrisw/Fanorona"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      src={plane}
                      style={{ width: `150px`, height: `110px` }}
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Air Chance</h5>
                    <p className="light">
                      An application to manage airline flights and customer's
                      reservation
                    </p>
                    <div className="card-action">
                      <a
                        href="https://drive.google.com/file/d/1QHLyrXsJb9g6k4vepTfuU_Bkx0--p0ye/view"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Demo
                      </a>
                      <a
                        href="https://github.com/boukrisw/AirChanceApp"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : techno === "Python" ? (
            <div className="row">
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      src={Pygame}
                      style={{ width: `150px`, height: `110px` }}
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Sokoban Advance</h5>
                    <p className="light">
                      A game where it rains bricks!
                      <br />
                      Avoid them.
                    </p>
                    <div className="card-action">
                      <a
                        href="https://drive.google.com/file/d/1a5_l7WUp1mTtVqEjGkZxp952ohvHnE5x/view?usp=sharing"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Demo
                      </a>
                      <a
                        href="https://github.com/boukrisw/Sokoban"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : techno === "C" ? (
            <div className="row">
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      src={shell}
                      style={{ width: `150px`, height: `110px` }}
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Mini shell</h5>
                    <p className="light">
                      Mini shell with management of pipes, redirects and signals
                      ...
                    </p>
                    <div className="card-action">
                      <a
                        href="https://github.com/boukrisw/mini-shell"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="card small center imageProject">
                  <div>
                    <img
                      src={train}
                      style={{ width: `150px`, height: `110px` }}
                      alt="Projet"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Find your Train</h5>
                    <p className="light">Search for a train</p>
                    <div className="card-action">
                      <a
                        href="https://github.com/boukrisw/Projet_Systemes_Reseaux"
                        className="teal-text"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Error</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <span className="d-block p-2 bg-primary text-white .d-print-block">
        <ul className="pagination center pin-bottom">
          <li
            onClick={() => change("React")}
            className={`${techno === "React" ? "active teal" : "waves-effect"}`}
          >
            &nbsp;&nbsp;&nbsp;React&nbsp;&nbsp;&nbsp;
          </li>
          <li
            onClick={() => change("Angular")}
            className={`${
              techno === "Angular" ? "active teal" : "waves-effect"
            }`}
          >
            &nbsp;&nbsp;&nbsp;Angular&nbsp;&nbsp;&nbsp;
          </li>
          <li
            onClick={() => change("JAVA")}
            className={`${techno === "JAVA" ? "active teal" : "waves-effect"}`}
          >
            &nbsp;&nbsp;&nbsp;JAVA&nbsp;&nbsp;&nbsp;
          </li>
          <li
            onClick={() => change("Python")}
            className={`${
              techno === "Python" ? "active teal" : "waves-effect"
            }`}
          >
            &nbsp;&nbsp;&nbsp;Python&nbsp;&nbsp;&nbsp;
          </li>
          <li
            onClick={() => change("C")}
            className={`${techno === "C" ? "active teal" : "waves-effect"}`}
          >
            &nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;
          </li>
        </ul>
      </span>
      <span className="d-block p-2 bg-dark text-white">{projects()}</span>
      <span className="d-block p-2 bg-primary text-white .d-print-block">
        <ul className="pagination center pin-bottom">
          <li
            onClick={() => change("React")}
            className={`${techno === "React" ? "active teal" : "waves-effect"}`}
          >
            &nbsp;&nbsp;&nbsp;React&nbsp;&nbsp;&nbsp;
          </li>
          <li
            onClick={() => change("Angular")}
            className={`${
              techno === "Angular" ? "active teal" : "waves-effect"
            }`}
          >
            &nbsp;&nbsp;&nbsp;Angular&nbsp;&nbsp;&nbsp;
          </li>
          <li
            onClick={() => change("JAVA")}
            className={`${techno === "JAVA" ? "active teal" : "waves-effect"}`}
          >
            &nbsp;&nbsp;&nbsp;JAVA&nbsp;&nbsp;&nbsp;
          </li>
          <li
            onClick={() => change("Python")}
            className={`${
              techno === "Python" ? "active teal" : "waves-effect"
            }`}
          >
            &nbsp;&nbsp;&nbsp;Python&nbsp;&nbsp;&nbsp;
          </li>
          <li
            onClick={() => change("C")}
            className={`${techno === "C" ? "active teal" : "waves-effect"}`}
          >
            &nbsp;&nbsp;&nbsp;C&nbsp;&nbsp;&nbsp;
          </li>
        </ul>
      </span>
    </div>
  );
}

export default Projects;
