import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PersonalAddress from "./pages/PersonalAddress.jsx"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/PersonalAddress" element={<PersonalAddress />} />
      </Routes>
    </Router>
  );
};

export default App;