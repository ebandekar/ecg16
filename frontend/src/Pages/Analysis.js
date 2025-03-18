import React, { useState } from "react";
import styled from "styled-components";

const Analysis = () => {
  const [image, setImage] = useState(null);

  // Handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <AnalysisContainer>
      <Card>
        <h1>ECG Analysis</h1>
        <p>Upload an ECG image for analysis</p>

        <UploadContainer>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
          />
          <label htmlFor="fileInput">Choose an Image</label>
        </UploadContainer>

        {image && (
          <PreviewContainer>
            <h3>Uploaded Image:</h3>
            <img src={image} alt="Uploaded ECG" />
          </PreviewContainer>
        )}
      </Card>
    </AnalysisContainer>
  );
};

export default Analysis;

// Styled Components
const AnalysisContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right,rgb(212, 181, 186),rgb(236, 15, 11));
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

const UploadContainer = styled.div`
  margin-top: 20px;
  position: relative;
  display: inline-block;

  input {
    display: none;
  }

  label {
    background: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;

    &:hover {
      background: #0056b3;
    }
  }
`;

const PreviewContainer = styled.div`
  margin-top: 20px;
  text-align: center;

  h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #333;
  }

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;
