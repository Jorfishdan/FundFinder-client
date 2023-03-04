import Welcome from "./components/Welcome/Welcome";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/dashboard" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
