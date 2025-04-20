
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import backgroundimage from "../assets/humanheart.jpeg";
// import styled from "styled-components";

// const Predict = () => {
//   const navigate = useNavigate();

//   const handleAnalysis = () => {
//     navigate("/analysis");
//   };

//   return (
//     <Container>
//       <Content>
//         <Heading>Analyze the ECG Signal</Heading>
//         <AnalysisButton onClick={handleAnalysis}>Start Analysis</AnalysisButton>
//       </Content>
//     </Container>
//   );
// };

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background-image: url("./assets/back.jpeg");
//   background-size: cover;
//   background-position: center;
//   background-attachment: fixed;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// `;

// const Content = styled.div`
//   max-width: 600px;
//   margin: 60px auto;
//   padding: 40px;
//   border-radius: 16px;
//   backdrop-filter: blur(12px);
//   background: rgba(30, 30, 30, 0.65);
//   box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
//   color: #f0f0f0;
//   font-family: 'Inter', sans-serif;
//   text-align: center;
// `;

// const Heading = styled.h1`
//   font-size: 2rem;
//   margin-bottom: 16px;
//   color: #ffffff;
// `;

// const AnalysisButton = styled.button`
//   background: linear-gradient(135deg, #5cc6ff, #007bff);
//   color: white;
//   padding: 12px 24px;
//   border: none;
//   border-radius: 10px;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 18px rgba(0, 123, 255, 0.3);
//   }

//   &:active {
//     transform: translateY(0);
//     box-shadow: none;
//   }
// `;

// export default Predict;
import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundimage from "../assets/humanheart.jpeg";
import styled from "styled-components";

const Predict = () => {
  const navigate = useNavigate();

  const handleAnalysis = () => {
    navigate("/analysis");
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

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundimage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Content = styled.div`
  max-width: 650px;
  width: 100%;
  padding: 40px;
  background: rgba(30, 30, 30, 0.8);
  border-radius: 18px;
  backdrop-filter: blur(12px);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5);
  color: #f0f0f0;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 20px;
  line-height: 1.3;
`;

const AnalysisButton = styled.button`
  background: linear-gradient(135deg, #5cc6ff, #007bff);
  color: white;
  padding: 14px 28px;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  display: inline-block;
  margin-top: 20px;

  &:hover {
    background: linear-gradient(135deg, #007bff, #5cc6ff);
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
    background: linear-gradient(135deg, #0062cc, #4c8bff);
    box-shadow: none;
  }
`;

export default Predict;
