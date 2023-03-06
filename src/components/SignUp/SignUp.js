import { Link, useNavigate } from "react-router-dom";
import WelcomeImg from "../../assets/images/welcome.svg";
import Logo from "../../assets/icons/logo/logo2.png";
import jwt_decode from "jwt-decode";
import { useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import googleIcon from "../../assets/icons/google.png";

export default function Welcome({
  user,
  setUser,
  isSignedUp,
  setIsSignedUp,
  URL,
  signup,
}) {
  console.log("SIGNUP:", URL);

  const navigate = useNavigate();
  const formRef = useRef();

  const handleSignup = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    axios
      .post(`${URL}/users${signup}`, {
        name: name,
        email: email,
        password: password,
      })
      .then(() => {
        setIsSignedUp(true);
        toast.success("Sign up successful");
        navigate("/");
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const handleCallbackResponse = (response) => {
      console.log("Encoded JWT ID token:" + response.credential);
      const userObject = jwt_decode(response.credential);
      console.log(userObject);
      setUser(userObject);
    };
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "93707773417-58kvvun0e2pivdpjb716q92cuk8ts2d8.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, [setUser]);

  // useEffect(() => {
  //   if (user) {
  //     navigate("/dashboard");
  //   } else {
  //     navigate("/");
  //   }
  // }, [user, navigate]);

  return (
    <main className="main__container">
      <section className="main__side">
        <img src={Logo} alt="FundFinder logo" className="main__logo" />
        <p className="main__text">
          ARE YOU STRUGGLING TO FIND FINANCIAL SUPPORT FOR YOUR EDUCATION,
          BUSNIESS OR FOR PERSONAL REASONS? FUNDFINDER MAKES FINDING FUNDS EASY
          SO THAT YOU CAN EXPERIENCE YOUR LIFE TO THE FULLEST.<br></br>
          <br></br>DON'T LET FINANCIAL BARRIES HOLD YOU BACK - LET US HELP YOU
          FIND THE FUNDING YOU NEED TO PURSUE YOUR DREAMS
        </p>
        <form className="main__signin" onSubmit={handleSignup} ref={formRef}>
          <label className="main__signin--label">Name</label>
          <input
            className="main__signin--input"
            placeholder="Name..."
            type="name"
            name="name"
          ></input>
          <label className="main__signin--label">Email</label>
          <input
            className="main__signin--input"
            placeholder="Email..."
            type="email"
            name="email"
          ></input>
          <label className="main__signin--label">Password</label>
          <input
            className="main__signin--input"
            placeholder="Password..."
            type="password"
            name="password"
          ></input>
          <button className="main__signin--button">Sign Up</button>
          <hr></hr>
          <section className="signup__google">
            <Link
              to="https://accounts.google.com/signup/v2/webcreateaccount?continue=https%3A%2F%2Fmyaccount.google.com%3Futm_source%3Daccount-marketing-page%26utm_medium%3Dcreate-account-button&flowName=GlifWebSignIn&flowEntry=SignUp"
              target="_blank"
            >
              <div className="signup__google--signup">
                <p className="signup__google--text">Sign Up with Google</p>
                <img className="signup__google--icon" src={googleIcon}></img>
              </div>
            </Link>
          </section>
          <Link to="/dashboard" className="main__google--guest">
            CONTINUE AS GUEST
          </Link>
        </form>
        <section className="main__button">
          <Link to="/" className="main__button--link">
            <p className="main__button--signup">Login</p>
          </Link>
          <Link to="/reset-password" className="main__button--link">
            <p className="main__button--forgot">FORGOT PASSWORD?</p>
          </Link>
        </section>
      </section>
      <img className="main__img" src={WelcomeImg} alt="Growing money" />
    </main>
  );
}
