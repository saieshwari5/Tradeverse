import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./components/Signup.js";
import Login from "./components/Login.js";
import Dashboard from "./components/Dashboard.js";
import Landing from "./components/Landing.js";

function App() {
  return (
    <Router>
      <nav>
        {/* <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link> */}
        {/* <Link to="/landing">Landing</Link> */}
      </nav>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;


