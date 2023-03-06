import Landing from "./components/Landing/Landing";
import Homepage from "./pages/Homepage";
import Signup from "./components/SignUp/SignUp";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles/styles.scss";
import { ToastContainer } from "react-toastify";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
  const URL = "http://localhost:8080";
  const login = "/login";
  const signup = "/signup";
  const [resetUser, setResetUser] = useState([]);
  const [currentEmail, setCurrentEmail] = useState("")
  const [currentName, setCurrentName] = useState("")


  const { userId } = useParams();

  async function getUserData() {
    try {
      const { data } = await axios.get(`http://localhost:8080/users`);
      setResetUser(data);
    } catch (error) {
      console.log(error, "Error");
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  const [user, setUser] = useState({});
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <ToastContainer position="top-left" />
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              user={user}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              URL={URL}
              login={login}
              setCurrentEmail={setCurrentEmail}
              setCurrentName={setCurrentName}
              
            />
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              isSignedUp={isSignedUp}
              setIsSignedUp={setIsSignedUp}
              URL={URL}
              signup={signup}
              setCurrentEmail={setCurrentEmail}
              setCurrentName={setCurrentName}
            />
          }
        />
        <Route path="/reset-password" element={<ForgotPassword URL={URL} />} />
        <Route
          path="/dashboard"
          element={
            <Homepage
              user={user}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              resetUser={resetUser}
              userId={userId}
              currentEmail={currentEmail}
              currentName={currentName}
              setCurrentEmail={setCurrentEmail}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
