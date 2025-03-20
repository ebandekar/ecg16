import React from "react";

import backgroundimage from "../assets/humanheart.jpeg"; // Ensure correct path
import styled from "styled-components";

const Predict = () => {
  const handleAnalysis = () => {
    alert("ECG Analysis Started!"); // Replace this with actual analysis logic
  };

  return (
    <Container>
      <Content>
        <Heading>Analyze the ECG Signal</Heading>
        <AnalysisButton onClick={handleAnalysis}>Start Analysis</AnalysisButton>
      </Content>
    </Container>
  );
};

// ✅ Main Container with Background Image
const Container = styled.div`
  width: 100vw;
  height: 100vh; /* Full viewport height */
  background-image: url(${backgroundimage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax Effect */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// ✅ Styled Content Box (Inside Container)
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: rgba(239, 239, 239, 0.43); /* Glassmorphism effect */
  backdrop-filter: blur(10px);
  padding: 60px 30px;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 500px;
`;

// ✅ Heading Style
const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: white;
`;

// ✅ Box Wrapper
const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  color: white;
  font-size: 1.2rem;
`;

// ✅ Button for Analysis
const AnalysisButton = styled.button`
  background-color: #ff4d4d; /* Red Button */
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 15px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #cc0000; /* Darker Red */
  }
`;

export default Predict;
