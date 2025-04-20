


import React from "react";
import Box from "../Components/Box"; // Ensure correct path
import styled from "styled-components";
import backgroundImage from "../assets/back.jpeg"; // Ensure the correct path
import bgimage from "../assets/bgimage.jpg";

const Home = () => {
  return (
    <>
      <ParallaxSection>
        <TextOverlay>ECG Analysis using Ensemble Classifier</TextOverlay>
      </ParallaxSection>

      <ContentContainer>
        <Content>
          <Heading>ECG Analysis using Ensemble Classifier</Heading>
          <BoxWrapper>
            <Box />
          </BoxWrapper>
        </Content>
      </ContentContainer>
    </>

  );
};

export default Home;

// Styled Components

const HomeContainer = styled.div`
 background-image: url("./assets/back.jpeg");
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background: linear-gradient(135deg, #ff4b2b, #ff416c); /* Modern gradient background */
  overflow: hidden;
`;



// Parallax Section (First Full Screen)
const ParallaxSection = styled.div`
  width: 100vw;
  height: 710px; /* Full viewport height */
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax Effect */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// Text Overlay on the Image
const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 100px;
  font-weight: bold;
  text-align: center;
  padding: 10px 15px;
`;

// Content Section (Appears Below Parallax)
const ContentContainer = styled.div`
  width: 100vw;
  padding: 50px 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgimage}); /* Light background */
  background-size: cover;
`;

// Styled Content Box

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: Black; /* White text for contrast */
  font-size: 1.2rem;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1); /* Glassmorphism effect */
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* Modern shadow */

  color: black;
  font-size: 1.2rem;
  padding: 40px;
  background: rgba(255, 255, 255, 0.2); /* Glassmorphism effect */
  border-radius: 15px;
  backdrop-filter: blur(10px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);

  max-width: 600px;
  width: 90%;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 30px;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #fff, #ddd);
  -webkit-background-clip: text;

  -webkit-text-fill-color: transparent; /* Cool gradient text effect */
  -webkit-text-fill-color: transparent;
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
`;
