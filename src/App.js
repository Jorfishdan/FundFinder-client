import Landing from "./components/Landing/Landing";
import Homepage from "./pages/Homepage";
import Signup from "./components/SignUp/SignUp";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./styles/styles.scss";
import { ToastContainer } from "react-toastify";

function App() {
  const URL = process.env.REACT_APP_BASE_URL;
  const login = "/login";
  const signup = "/signup";

  const [user, setUser] = useState({});
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("APP:", URL);
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
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Homepage
              user={user}
              setUser={setUser}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
