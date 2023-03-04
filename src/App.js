import Landing from "./components/Landing/Landing";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing user={user} setUser={setUser} />} />
        <Route path="/dashboard" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
