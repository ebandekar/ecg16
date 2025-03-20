import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Box = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/analysis"); // Redirect to the analysis page
  };

  return (
    <BoxContainer>
      <h1>Electrocardiogram Analysis</h1>
      <p>Click the button below to check the analysis.</p>
      <Button onClick={handleClick}>Check Analysis</Button>
    </BoxContainer>
  );
};

export default Box;

// Styled Components
const BoxContainer = styled.div`
  
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 20px auto;
  width: 500px;  /* Adjust width */
  padding: 50px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
