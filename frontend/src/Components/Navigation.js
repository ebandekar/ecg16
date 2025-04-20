
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/features">Features</Link></NavItem>
        <NavItem><Link to="/predict">Predict</Link></NavItem>
        {/* <NavItem><Link to="/analysis">Analysis</Link></NavItem> */}
        <NavItem><Link to="/contact">Contact Us</Link></NavItem>

        <Dropdown>
  <NavItemMain>ECG Categories ▼</NavItemMain>
  <DropdownContent>
    <DropdownItem><Link to="/normal">Normal ECG</Link></DropdownItem>
    <DropdownItem><Link to="/conduction">Conduction Disturbance</Link></DropdownItem>
    <DropdownItem><Link to="/supraventricular">Supraventricular</Link></DropdownItem>
    <DropdownItem><Link to="/infarction">Myocardial Infarction</Link></DropdownItem>
    <DropdownItem><Link to="/hypertrophy">Hypertrophy</Link></DropdownItem>
   
  </DropdownContent>
</Dropdown>

      </NavList>
    </NavContainer>
  );
};

export default Navigation;

// Styled Components
// const NavContainer = styled.nav`
//   background: transparent;
//   padding: 15px;
// `;

// const NavList = styled.ul`
//   list-style: none;
//   display: flex;
//   justify-content: center;
//   gap: 20px;
// `;

// const NavItem = styled.li`
//   display: inline;
//   font-size: 1.2rem;

//   a {
//     text-decoration: none;
//     color: white;
//     padding: 10px;
//     transition: 0.3s;

//     &:hover {
//       color: #ffdd57;
//     }
//   }
// `;

// // Dropdown Styles
// const Dropdown = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// const NavItemMain = styled.div`
//   font-size: 1.2rem;
//   color: white;
//   cursor: pointer;
//   padding: 10px;
//   transition: 0.3s;

//   &:hover {
//     color: #ffdd57;
//   }
// `;

// const DropdownContent = styled.div`
//   display: none;
//   position: absolute;
//   background: white;
//   min-width: 200px;
//   box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
//   border-radius: 5px;
//   z-index: 1;
  
//   ${Dropdown}:hover & {
//     display: block;
//   }
// `;

// const DropdownItem = styled.div`
//   padding: 10px;
//   text-align: left;

//   a {
//     color: black;
//     text-decoration: none;
//     display: block;
    
//     &:hover {
//       background: #f0f0f0;
//     }
//   }
// `;
// const NavContainer = styled.nav`
//   background: transparent;
//   padding: 15px;
// `;

// const NavList = styled.ul`
//   list-style: none;
//   display: flex;
//   justify-content: space-between;  /* Distribute items across the available space */
//   gap: 10px;  /* Increased gap between items */
//   width: 100%; /* Ensures the list spans across the full width of the container */
// `;

// const NavItem = styled.li`
//   display: inline;
//   font-size: 1.2rem;

//   a {
//     text-decoration: none;
//     color: white;
//     padding: 10px;
//     transition: 0.3s;

//     &:hover {
//       color: #ffdd57;
//     }
//   }
// `;

// // Dropdown Styles
// const Dropdown = styled.div`
//   position: relative;
//   display: inline-block;
// `;

// const NavItemMain = styled.div`
//   font-size: 1.2rem;
//   color: white;
//   cursor: pointer;
//   padding: 10px;
//   transition: 0.3s;

//   &:hover {
//     color: #ffdd57;
//   }
// `;

// const DropdownContent = styled.div`
//   display: none;
//   position: absolute;
//   background: white;
//   min-width: 200px;
//   box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
//   border-radius: 5px;
//   z-index: 1;
  
//   ${Dropdown}:hover & {
//     display: block;
//   }
// `;

// const DropdownItem = styled.div`
//   padding: 10px;
//   text-align: left;

//   a {
//     color: black;
//     text-decoration: none;
//     display: block;
    
//     &:hover {
//       background: #f0f0f0;
//     }
//   }
// `;
const NavContainer = styled.nav`
  background: transparent;
  padding: 15px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;  /* Evenly spaced items across the available space */
  width: 100%; /* Ensures the list spans across the full width of the container */
`;

const NavItem = styled.li`
  font-size: 1.2rem;

  a {
    text-decoration: none;
    color: white;
    padding: 10px;
    transition: 0.3s;

    &:hover {
      color: #ffdd57;
    }
  }
`;

// Dropdown Styles
const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const NavItemMain = styled.div`
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  padding: 10px;
  transition: 0.3s;

  &:hover {
    color: #ffdd57;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background: white;
  min-width: 200px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 1;
  
  ${Dropdown}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.div`
  padding: 10px;
  text-align: left;

  a {
    color: black;
    text-decoration: none;
    display: block;
    
    &:hover {
      background: #f0f0f0;
    }
  }
`;
