import React from "react";
import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


export default function ResetEmail({ resetEmail, resetUser, currentEmail, setCurrentEmail }) {


  const handleEmail = (e) => {
    setCurrentEmail(e.target.value);
  };
  const id = resetUser.id;
  const formRef = useRef();


  if (!resetEmail) return null;

  const emailReset = () =>
  toast.success("Your email has been updated!", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`http://localhost:8080/reset-email`, {
        id: id,
        email: formRef.current.email.value,
      })
      .catch((error) => {
        console.log(error.message, "Error");
      });
      emailReset();
  };

  return (
    <main className="reset__email--container">
      <ToastContainer className="toast" />
      <h1 className="reset__email--title">Reset Email</h1>
      <form className="reset__email--form" onSubmit={handleOnSubmit}>
        <label className="reset__email--form--label">New Email</label>
        <input
          className="reset__email--form--input"
          placeholder={currentEmail || "New email here..."}
          type="email"
          onChange={handleEmail}
          id="email"
        ></input>
        <button className="reset__email--form--button" type="submit">
          Update
        </button>
      </form>
    </main>
  );
}
