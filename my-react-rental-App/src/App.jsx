import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/HouseHold.jsx";
import Personal from "./components/PersonalInfo.jsx";
import Residence from "./components/Residence.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Personal />} /> {/* Change made here */}
        <Route path="/header" element={<Header />} />
        <Route path="/residence" element={<Residence />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;
