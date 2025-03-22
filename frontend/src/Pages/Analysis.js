import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Analysis = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const navigate = useNavigate();

  // Handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle drag & drop functionality
  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Prevent default behavior when dragging over
  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  // Remove highlight when dragging leaves the drop area
  const handleDragLeave = () => {
    setDragging(false);
  };

  // Upload image and get classification result
  const handleUpload = async () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      setLoading(true);
      const response = await axios.post("http://127.0.0.1:5000/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const prediction = response.data.prediction;
      navigate(`/analysis/${prediction}`); // Navigate to the respective page
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error in classification.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnalysisContainer>
      <Card>
        <h1>ECG Analysis</h1>
        <p>Upload an ECG image for classification</p>

        {/* Drag and Drop Area */}
        <DropArea 
          dragging={dragging} 
          onDragOver={handleDragOver} 
          onDragLeave={handleDragLeave} 
          onDrop={handleDrop}
        >
          <p>Drag & Drop an image here or</p>
          <input type="file" id="fileInput" accept="image/*" onChange={handleImageChange} />
          <label htmlFor="fileInput">Choose an Image</label>
        </DropArea>

        {preview && (
          <PreviewContainer>
            <h3>Uploaded Image:</h3>
            <img src={preview} alt="ECG" />
          </PreviewContainer>
        )}

        <Button onClick={handleUpload} disabled={loading}>
          {loading ? "Analyzing..." : "Analyze"}
        </Button>
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

// Drop Area Styling
const DropArea = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 2px dashed ${props => (props.dragging ? "#007bff" : "#ccc")};
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  background: ${props => (props.dragging ? "#f0f8ff" : "white")};

  input {
    display: none;
  }

  label {
    display: block;
    margin-top: 10px;
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

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    background: #218838;
  }
`;
