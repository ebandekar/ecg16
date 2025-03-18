
  
// import React from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// const Navigation = () => {
//   return (
//     <NavBar>
//       <NavList>
//         <NavItem>
//           <NavLinkStyled to="/" activeClassName="active">Home</NavLinkStyled>
//         </NavItem>
//         <NavItem>
//           <NavLinkStyled to="/features" activeClassName="active">Features</NavLinkStyled>
//         </NavItem>
//         <NavItem>
//           <NavLinkStyled to="/predict" activeClassName="active">Predict</NavLinkStyled>
//         </NavItem>
//       </NavList>
//     </NavBar>
//   );
// };

// // Styled Components
// const NavBar = styled.nav`
//   background-color: #2c3e50;
//   padding: 10px 0;
//   position: sticky;
//   top: 0;
//   z-index: 100;
// `;

// const NavList = styled.ul`
//   display: flex;
//   justify-content: center;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const NavItem = styled.li`
//   margin: 0 20px;
// `;

// const NavLinkStyled = styled(NavLink)`
//   text-decoration: none;
//   color: white;
//   font-size: 18px;
//   transition: color 0.3s ease-in-out;

//   &:hover {
//     color: #3498db;
//   }

//   &.active {
//     color: #e74c3c;
//     font-weight: bold;
//   }
// `;

// export default Navigation;
// import React from "react";
// import { NavLink } from "react-router-dom";
// import styled from "styled-components";

// const Navigation = () => {
//     return (
//       <NavBar>
//         <NavList>
//           <NavItem>
//             <NavLinkStyled to="/">Home</NavLinkStyled>
//           </NavItem>
//           <NavItem>
//             <NavLinkStyled to="/features">Features</NavLinkStyled>
//           </NavItem>
//           <NavItem>
//             <NavLinkStyled to="/predict">Predict</NavLinkStyled>
//           </NavItem>
//         </NavList>
//       </NavBar>
//     );
// };

// const NavBar = styled.nav`
//   background-color:rgb(1, 2, 2);
//   padding: 10px 0;
//   position: sticky;
//   top: 0;
//   z-index: 100;
// `;

// const NavList = styled.ul`
//   display: flex;
//   justify-content: center;
//   list-style: none;
//   margin: 0;
//   padding: 0;
// `;

// const NavItem = styled.li`
//   margin: 0 20px;
// `;

// const NavLinkStyled = styled(NavLink)`
//   text-decoration: none;
//   color: white;
//   font-size: 18px;
//   transition: color 0.3s ease-in-out;

//   &:hover {
//     color:rgb(192, 208, 219);
//   }

//   &.active {
//     color: #e74c3c;
//     font-weight: bold;
//   }
// `;

// export default Navigation;

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navigation = () => {
    return (
      <NavBar>
        <NavList>
          <NavItem>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/features">Features</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/predict">Predict</NavLinkStyled>
          </NavItem>
        </NavList>
      </NavBar>
    );
};

// const NavBar = styled.nav`
//   background-color: rgb(206, 11, 11);
//   box-shadow:10;
//   border :none;
//   padding: 10px 0;
//   position: sticky;
//   top: 0;
//   z-index: 100;
// `;
const NavBar = styled.nav`
  background-color: rgba(206, 11, 11, 0.7); /* Semi-transparent red */
  backdrop-filter: blur(5px); /* Adds a slight blur effect */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;


const NavList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 40px; /* Added spacing between NavItems */
`;

const NavItem = styled.li`
  padding: 0 10px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: rgb(192, 208, 219);
  }

  &.active {
    color:rgb(34, 16, 14);
    font-weight: bold;
  }
`;

export default Navigation;
