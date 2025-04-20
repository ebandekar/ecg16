
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Predict from "./Pages/Predict";
import Analysis from "./Pages/Analysis";
import Normal from "./Pages/Normal";
import Supraventricular from "./Pages/Supraventricular";
import Ventricular from "./Pages/Ventricular";
import MyocardialInfarction from "./Pages/MyocardialInfarction";
import Hypertrophy from "./Pages/Hypertrophy";
import Uncertain from "./Pages/Uncertain";
import "./App.css"; // Ensure correct path
import Contact from "./Pages/Contact"; // Import the Contact Page
import ConductionDisturbance from "./Pages/ConductionDisturbance";
import Login from './Pages/Login'; 
import Register from './Pages/Register';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <Navigation />
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/contact" element={<Contact />} />
        {/* Class-Based Analysis Pages */}
        {/* <Route path="/analysis/N" element={<Normal />} />
        <Route path="/analysis/S" element={<Supraventricular />} />
        <Route path="/analysis/V" element={<Ventricular />} />
        <Route path="/analysis/Q" element={<MyocardialInfarction />} />
        <Route path="/analysis/F" element={<Hypertrophy />} />
        <Route path="/analysis/Uncertain" element={<Uncertain />} />
        <Route path="/contact" element={<Contact />} /> */}
           <Route path="/normal" element={<Normal />} />
        <Route path="/hypertrophy" element={<Hypertrophy />} />
        <Route path="/infarction" element={<MyocardialInfarction />} />
        <Route path="/supraventricular" element={<Supraventricular />} />
        <Route path="/uncertain" element={<Uncertain />} />
        <Route path="/ventricular" element={<Ventricular />} />
        <Route path="/conduction" element={<ConductionDisturbance />} /> 
      </Routes>

      {showButton && <BackToTopButton onClick={scrollToTop}>⬆</BackToTopButton>}
    </Router>
  );
}

export default App;

// Styled Back-to-Top Button
const BackToTopButton = styled.button`
  display: block;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  font-size: 1.7em;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 50%;
  background-color: #007bff;
  color: white;
  transition: 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

