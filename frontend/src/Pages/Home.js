
// // import React from "react";
// // import Box from "../Components/Box"; // Ensure correct path
// // import styled from "styled-components";

// // const Home = () => {
// //   return (
    
// //     <HomeContainer>
// //      <Content>
// //      <h1>Welcome to ECG Analysis</h1>
// //      <Box />
// //      </Content>
      
// //     </HomeContainer>
// //   );
// // };

// // export default Home;

// // // Styled Components
// // const HomeContainer = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   height: 100vh; /* Full viewport height */
// //   background-color:rgb(220, 81, 81); /* Light background */
// //    overflow: hidden;
// // `;
// // const Content = styled.div`
// //   text-align: center;
// //   color: Black; /* Adjust color for contrast */
// //   font-size: 1.2rem;
  
// //   h1 {
// //     margin-bottom: 20px;
// //   }
// //     `;
// import React from "react";
// import Box from "../Components/Box"; // Ensure correct path
// import styled from "styled-components";

// const Home = () => {
//   return (
//     <HomeContainer>
//       <Content>
//         <Heading>Welcome to ECG Analysis</Heading>
//         <Box />
//       </Content>
//     </HomeContainer>
//   );
// };

// export default Home;

// // Styled Components
// const HomeContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh; /* Full viewport height */
//   background: linear-gradient(135deg, #ff4b2b, #ff416c); /* Modern gradient background */
//   overflow: hidden;
// `;

// const Content = styled.div`
//   text-align: center;
//   color: blach; /* White text for better contrast */
//   font-size: 1.2rem;
//   padding: 100px;
//   background: rgba(255, 255, 255, 0.1); /* Subtle glass effect */
//   border-radius: 15px;
//   backdrop-filter: blur(10px);
//   box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* Modern shadow */
//   max-width: 600px;
//   width: 90%;
// `;

// const Heading = styled.h1`
//   font-size: 2.5rem;
//   font-weight: bold;
//   text-transform: uppercase;
//   margin-bottom: 20px;
//   letter-spacing: 2px;
//   background: linear-gradient(90deg, #fff, #ddd);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent; /* Cool gradient text effect */
// `;
import React from "react";
import Box from "../Components/Box"; // Ensure correct path
import styled from "styled-components";

const Home = () => {
  return (
    <HomeContainer>
      <Content>
        <Heading>Welcome to ECG Analysis</Heading>
        <BoxWrapper>
          <Box />
        </BoxWrapper>
      </Content>
    </HomeContainer>
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
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
