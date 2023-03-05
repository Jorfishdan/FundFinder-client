import { Link, useNavigate } from "react-router-dom";
import WelcomeImg from "../../assets/images/welcome.svg";
import Logo from "../../assets/icons/logo/logo2.png";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";

export default function Welcome({ user, setUser }) {
  const navigate = useNavigate();
  const handleCallbackResponse = (response) => {
    console.log("Encoded JWT ID token:" + response.credential);
    const userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
  };

  useEffect(() => {
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
  }, []);

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
        <form className="main__signin">
        <label className="main__signin--label">Name</label>
          <input
            className="main__signin--input"
            placeholder="Name..."
            type="email"
          ></input>
          <label className="main__signin--label">Email</label>
          <input
            className="main__signin--input"
            placeholder="Email..."
            type="email"
          ></input>
          <label className="main__signin--label">Password</label>
          <input
            className="main__signin--input"
            placeholder="Password..."
            type="password"
          ></input>
          <button className="main__signin--button">Sign In</button>
          <hr></hr>
          <section className="main__google">
          <div id="signInDiv" className="main__google--box"></div>
          {/* <button onClick={(e)=> handleSignOut(e)}>Sign Out</button> */}
        </section>
          <Link to="/dashboard" className="main__google--guest">
            CONTINUE AS GUEST
          </Link>
        </form>
     
        <section className="main__button">
         <Link to='/'className="main__button--link"><p className="main__button--signup">Login</p></Link> 
          <p className="main__button--forgot">FORGOT PASSWORD?</p>
        </section>
      </section>
      <img className="main__img" src={WelcomeImg} alt="Growing money" />
    </main>
  );
}
