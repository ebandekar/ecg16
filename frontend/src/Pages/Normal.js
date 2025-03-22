import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Normal = () => {
  return (
    <AnalysisContainer>
      <Card>
        <h1>Normal (N) - Normal ECG</h1>
        <p>Indicates a healthy heart with a normal sinus rhythm.</p>
        <p><strong>Symptoms:</strong> None, the heart is functioning normally.</p>
        <StyledLink to="/">Back to Analysis</StyledLink>
      </Card>
    </AnalysisContainer>
  );
};

export default Normal;

// Styled Components
const AnalysisContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, rgb(212, 181, 186), rgb(236, 15, 11));
  padding: 20px;
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
