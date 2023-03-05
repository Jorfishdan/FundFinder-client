import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

import { useState, useRef } from "react";
import Dashboard from "../components/Dashboard/Dashboard";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorSubject, setErrorSubject] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const formRef = useRef();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const isNameValid = () => {
    if (name.length < 2) {
      return false;
    }
    return true;
  };
  const isEmailValid = () => {
    if (!email.includes("@")) {
      return false;
    }
    return true;
  };
  const isSubjectValid = () => {
    if (subject.length < 2) {
      return false;
    }
    return true;
  };

  const isMessageValid = () => {
    if (message.length < 3) {
      return false;
    }
    return true;
  };


  const emailSent = () =>
    toast.success("Your email has been sent!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_vzds7w6",
        "template_6vzukpk",
        formRef.current,
        "OX5NrXu9_kJTaHFK_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetForm = () => {
    formRef.current.name.value = "";
    formRef.current.email.value = "";
    formRef.current.subject.value = "";
    formRef.current.message.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNameValid()) {
      setErrorName(true);
    }
    if (!isEmailValid()) {
      setErrorEmail(true);
    }
    if (!isSubjectValid()) {
      setErrorSubject(true);
    }
    if (!isMessageValid()) {
      setErrorMessage(true);
    } else {
      sendEmail();
      emailSent();
      resetForm();
    }
  };
  return (
    <>
      <Header />
      <section className="contact__main">
      <ToastContainer className="toast" />
        <form className="contact__form" onSubmit={handleSubmit} ref={formRef}>
          <div className="contact__tablet">
            <h1 className="contact__title">Contact</h1>
            <label className="contact__label">Your Name</label>
            <input
              placeholder="Your name here..."
              type="text"
              className={`contact__input ${
                errorName && name.length <= 0 ? "contact__input--invalid" : ""
              }`}
              value={name}
              onChange={handleName}
              name="name"
            ></input>
          </div>
          <div className="contact__tablet">
            <label className="contact__label">Your Email </label>
            <input
              placeholder="Your email here..."
              type="email"
              className={`contact__input ${
                errorEmail && !email.includes("@")
                  ? "contact__input--invalid"
                  : ""
              }`}
              value={email}
              onChange={handleEmail}
              name="email"
            ></input>
          </div>
          <div className="contact__tablet">
            <label className="contact__label">Subject</label>
            <input
              placeholder="Subject here..."
              type="text"
              className={`contact__input ${
                errorSubject && subject.length <= 0
                  ? "contact__input--invalid"
                  : ""
              }`}
              value={subject}
              onChange={handleSubject}
              name="subject"
            ></input>
          </div>
          <div className="contact__message--box">
            <section className="contact__message--container">
              <label className="contact__label-message">Message </label>
              <textarea
                placeholder="Your message here..."
                cols="20"
                rows="5"
                className={`contact__message ${
                  errorMessage && message.length <= 0
                    ? "contact__message--invalid"
                    : ""
                }`}
                value={message}
                onChange={handleMessage}
                name="message"
              ></textarea>
            </section>
            <section className="contact__button--container">
              <button className="contact__button" type="submit">
                Send
              </button>
              <p
                className="contact__button--cancel"
                onClick={() => {
                  resetForm();
                }}
              >
                Cancel
              </p>
            </section>
          </div>
        </form>
        <Dashboard />
      </section>
      <Footer />
    </>
  );
}
