// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import "./ECGPages.css";

// const ConductionDisturbance = () => {
//   return (
//     <AnalysisContainer>
//       <Card>
//         <h1>Conduction Disturbance (R) - Right Bundle Branch Block (RBBB)</h1>
//         <p>
//           Right conduction disturbance occurs when there's a delay or blockage in the electrical impulses that travel through the right bundle branch of the heart's conduction system.
//         </p>
//         <p>
//           <strong>ECG Significance:</strong> Widened QRS complex (&gt;120 ms), rsR′ pattern in lead V1, and a wide slurred S wave in leads I and V6.
//         </p>
//         <p>
//           <strong>Clinical Implications:</strong> May be seen in healthy individuals but could also suggest pulmonary embolism, congenital heart disease, or right ventricular hypertrophy.
//         </p>
//         <StyledLink to="/analysis">Back to Analysis</StyledLink>
//       </Card>
//     </AnalysisContainer>
//   );
// };

// export default ConductionDisturbance;

// // Styled Components
// const AnalysisContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background: linear-gradient(to right, rgb(203, 221, 229), rgb(3, 135, 171));
//   padding: 20px;
// `;

// const Card = styled.div`
//   background: white;
//   padding: 30px;
//   border-radius: 12px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//   text-align: center;
//   max-width: 600px;
//   width: 100%;

//   h1 {
//     font-size: 1.9rem;
//     color: #333;
//     margin-bottom: 15px;
//   }

//   p {
//     font-size: 1.1rem;
//     color: #555;
//     margin: 10px 0;
//   }
// `;

// const StyledLink = styled(Link)`
//   display: inline-block;
//   margin-top: 20px;
//   padding: 10px 20px;
//   background: #007bff;
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
//   font-weight: bold;
//   transition: 0.3s;

//   &:hover {
//     background: #0056b3;
//   }
// `;
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ConductionDisturbance = () => {
  return (
    <AnalysisContainer>
      <Card>
        <h1>Conduction Disturbance</h1>
        <p>Conduction disturbances are abnormalities in the electrical conduction system of the heart. These can affect how the heart beats.</p>
        <p><strong>Common types:</strong> Bundle Branch Blocks, AV Blocks, etc.</p>
        <p><strong>Significance:</strong> May cause arrhythmias, bradycardia, or indicate structural heart disease.</p>
        <StyledLink to="/predict">Back to Analysis</StyledLink>
      </Card>
    </AnalysisContainer>
  );
};

export default ConductionDisturbance;

// Styled Components
const AnalysisContainer = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
   background-image: url("./assets/back.jpeg");
  padding: 20px;
    overflow: hidden;
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 600px;
  width: 100%;

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    color: #555;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }
`;
