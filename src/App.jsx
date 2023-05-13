import Home from "./Pages/Home.jsx";
import Navbar from "./Pages/Navbar.jsx";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-sky-100 h-[200vh]">
      <Router>
        <Navbar />
        <Home />
        <Routes>

          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
