import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Uncertain = () => {
  return (
    <AnalysisContainer>
      <Card>
      <h1>Uncertain (M) - Unclassified ECG</h1>
        <p>The ECG data does not strongly indicate any particular condition.</p>
        <p><strong>Symptoms:</strong> No clear pattern detected. Further tests may be required.</p>
        <StyledLink to="/analysis">Back to Analysis</StyledLink>
      </Card>
    </AnalysisContainer>
  );
};

export default Uncertain;

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
  max-width: 500px;
  width: 100%;

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    color: #666;
  }
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background:135deg,rgb(36, 12, 7),rgb(224, 53, 53);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }
`;