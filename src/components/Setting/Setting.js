import React from "react";
import { useState} from "react";
import ResetEmail from "../RestEmail/ResetEmail";

export default function Setting({ openSetting, resetUser, currentEmail, setCurrentEmail }) {
  const [resetEmail, setResetEmail] = useState(false);

  if (!openSetting) return null;

  function handleResetEmail() {
    setResetEmail(!resetEmail);
  }


  return (
    <>
      <main className="setting__container">
        <h1 className="setting__title">Settings</h1>
        <p className="setting__reset" onClick={() => handleResetEmail()}>
          Reset Email
        </p>
      </main>
      <ResetEmail
        resetEmail={resetEmail}
        resetUser={resetUser}
        currentEmail={currentEmail}
        setCurrentEmail={setCurrentEmail}
      />
    </>
  );
}
