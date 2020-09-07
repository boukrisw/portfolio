import React, { useState } from "react";
import "../App.css";
import emailjs from "emailjs-com";
import CV from "../Ressources/CV.pdf";
import Error from "./Error";
function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  const sendMail = () => {
    if (name !== "" && subject !== "" && email !== "" && message !== "") {
      emailjs
        .send(
          "service_4itys1o",
          "template_aj2r0m8",
          {
            name: name,
            subject: subject,
            message: message,
            email: email,
          },
          "user_pOKwUkjpmTg496GRhIV14"
        )
        .then((result) => {
          setDone(true);
          setName("");
          setSubject("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => console.log("the error is :", error));
    } else {
      setDone(false);
      setError(true);
    }
  };

  return (
    <div>
      <form>
        <fieldset>
          <div className="row position first">
            <div className="col positionDiv">
              <input
                onChange={(e) => {
                  setError(false);
                  setDone(false);
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                className="form-control"
                placeholder="Name * "
              />
            </div>
          </div>
          <div className="row position">
            <div className="col positionDiv">
              <input
                onChange={(e) => {
                  setError(false);
                  setDone(false);
                  setEmail(e.target.value);
                }}
                value={email}
                type="text"
                className="form-control"
                placeholder="Email * "
              />
            </div>
          </div>
          <div className="row position">
            <div className="col positionDiv">
              <input
                onChange={(e) => {
                  setError(false);
                  setDone(false);
                  setSubject(e.target.value);
                }}
                value={subject}
                type="text"
                className="form-control"
                placeholder="Subject * "
              />
            </div>
          </div>
          <div>
            <textarea
              className="Message position"
              value={message}
              onChange={(e) => {
                setError(false);
                setDone(false);
                setMessage(e.target.value);
              }}
              cols="50"
              rows="15"
              placeholder="Message * "
            ></textarea>
          </div>

          <div onClick={sendMail} className="light center">
            <div className="waves-effect waves-light btn-large">
              <i className="material-icons center">send</i>
            </div>
          </div>
          <Error error={error} done={done} />
        </fieldset>
      </form>
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
                    href="https://www.fiverr.com/boukrisw"
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
    </div>
  );
}

export default Contact;
