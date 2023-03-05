import Landing from "./components/Landing/Landing";
import Homepage from "./pages/Homepage";
import Signup from './components/SignUp/SignUp'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './styles/styles.scss'

function App() {
  const [user, setUser] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing user={user} setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
