import styled from "styled-components";
import Logo from "../../img/logo.png";
import Burger from "./Burger";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <Nav>
      <LogoDiv>
        <NavLink to={"/"}>
          <img src={Logo} alt="Logo" />
        </NavLink>
      </LogoDiv>
      <Burger />
    </Nav>
  );
}

const LogoDiv = styled.div`
  img {
    width: 5vw;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 2vw 0;
  height: 5vw;
`;

export default Navigation;
