import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import Error from "../Error";
function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);

  const sendMail = () => {
    setSending(true);
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
          setSending(false);
        })
        .catch((error) => {
          console.log("the error is :", error);
          setSending(false);
        });
    } else {
      setDone(false);
      setError(true);
      setSending(false);
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

          <div onClick={!sending && sendMail} className="light center">
            <div className="waves-effect waves-light btn-large">
              <i className="material-icons center">send</i>
            </div>
          </div>
          <Error error={error} done={done} />
        </fieldset>
      </form>
    </div>
  );
}

export default Contact;
