import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "../../assets/icons/logo/logo2.png";
const ForgotPassword = ({URL}) => {
  const navigate = useNavigate();
  const formRef = useRef();

  const handleNewPass = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const email = form.email.value;
    const newPassword = form.newpassword.value;

    if (!email || !newPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    axios
      .patch(`${URL}/users/reset-password`, {
        email: email,
        password: newPassword,
      })
      .then(() => {
        toast.success("You have successfully changed your password");
        navigate("/");
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main className="main__container">
      <section className="main__side">
        <img src={Logo} alt="FundFinder logo" className="main__logo" />
        <p className="main__text">
          Please Provide your new password in order to reset it
        </p>
        <form className="main__signin" onSubmit={handleNewPass} ref={formRef}>
          <label className="main__signin--label">Email</label>
          <input
            className="main__signin--input"
            placeholder="Email..."
            type="email"
            name="email"
          ></input>
          <label className="main__signin--label">New Password</label>
          <input
            className="main__signin--input"
            placeholder="New Password..."
            type="password"
            name="newpassword"
          ></input>
          <button className="main__signin--button">Reset</button>
          <hr></hr>
          <section className="main__google">
            <div id="signInDiv" className="main__google--box"></div>
          </section>
          {/* <Link to="/dashboard" className="main__google--guest">
                CONTINUE AS GUEST
              </Link> */}
        </form>

        {/* <section className="main__button">
              <Link to="/signup" className="main__button--link">
                <p className="main__button--signup">SIGN UP</p>
              </Link>
              <p className="main__button--forgot">FORGOT PASSWORD?</p>
            </section>
          <img className="main__img" src={WelcomeImg} alt="Growing money" /> */}
      </section>
    </main>
  );
};

export default ForgotPassword;
