// // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import Navigation from "./Components/Navigation";
// // import { Router } from "react-router-dom";



// // function App() {
// //   return(
// //   <h1>ECG Classification using ensemble classifier</h1>
  

 
// //   )
// // }

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./Components/Navigation";
// import "./App.css"; // Ensure the path is correct


// function App() {
//   return (
//     <Router>
//       <Navigation />
//       <h1>ECG Classification using ensemble classifier</h1>

//       {/* Define Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/predict" element={<Predict />} />
//       </Routes>
//     </Router>
//   );
// }

// // Dummy components for routes (Replace with actual components)
// const Home = () => <h2>Home Page</h2>;
// const Features = () => <h2>Features Page</h2>;
// const Predict = () => <h2>Predict Page</h2>;

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./Components/Navigation";
// import "./App.css"; // Ensure the path is correct

// function App() {
//   return (
//     <Router>
//       <Navigation />
//       <div className="container">
//         <h1>ECG Classification using Ensemble Classifier</h1>

//         {/* Define Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/features" element={<Features />} />
//           <Route path="/predict" element={<Predict />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// // Dummy components for routes (Replace with actual components)
// const Home = () => <h2>Home Page</h2>;
// const Features = () => <h2>Features Page</h2>;
// const Predict = () => <h2>Predict Page</h2>;

// export default App;
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./Components/Navigation";
// import "./App.css"; // Ensure correct path

// function App() {
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 300) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     });
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <Router>
//       <Navigation />
//       <h1>ECG Classification using ensemble classifier</h1>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/features" element={<Features />} />
//         <Route path="/predict" element={<Predict />} />
//       </Routes>

//       {/* Back to Top Button */}
//       {showButton && (
//         <button id="backToTopBtn" onClick={scrollToTop}>
//           ⬆
//         </button>
//       )}
//     </Router>
//   );
// }

// // Dummy components
// const Home = () => <h2>Home Page</h2>;
// const Features = () => <h2>Features Page</h2>;
// const Predict = () => <h2>Predict Page</h2>;

// export default App;
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
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/predict" element={<Predict />} />

        {/* Class-Based Analysis Pages */}
        <Route path="/analysis/N" element={<Normal />} />
        <Route path="/analysis/S" element={<Supraventricular />} />
        <Route path="/analysis/V" element={<Ventricular />} />
        <Route path="/analysis/Q" element={<MyocardialInfarction />} />
        <Route path="/analysis/F" element={<Hypertrophy />} />
        <Route path="/analysis/Uncertain" element={<Uncertain />} />
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

