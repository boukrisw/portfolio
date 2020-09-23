import React from "react";
import CV from "../Ressources/CV.pdf";
import "../App.css";

function Footer() {
  return (
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
                  href="https://github.com/boukrisw"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="footer waves-effect waves-light btn-small"
                >
                  <i className="fab fa-github"></i>&nbsp; Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/walid-boukris-179771157/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="footer waves-effect waves-light btn-small"
                >
                  <i className="fab fa-linkedin"></i>&nbsp; Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://www.fiverr.com/boukrisw"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="footer waves-effect waves-light btn-small"
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
          <a
            href={CV}
            className="light-blue-text  text-lighten-2"
            rel="noopener noreferrer"
            target="_blank"
          >
            Walid BOUKRIS
          </a>{" "}
          with ReactJs and deployed in Firebase!
        </div>
      </div>
    </footer>
  );
}

export default Footer;
