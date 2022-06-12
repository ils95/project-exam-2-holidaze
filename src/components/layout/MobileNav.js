import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { media } from "../constants/mediaQueries";

const MobileNav = ({ open }) => {
  return (
    <NavLinks open={open}>
      <NavLink to={"/browse"}>
        <LinkTo>Browse Accomodations</LinkTo>
      </NavLink>
      <NavLink to={"/contact"}>
        <LinkTo>Contact</LinkTo>
      </NavLink>
      <NavLink to={"/login"}>
        <LinkTo>Log in</LinkTo>
      </NavLink>
    </NavLinks>
  );
};

const NavLinks = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  z-index: 100;
  margin: 0;
  color: #5c5c5c;

  a:hover {
    color: #97a099;
  }

  ${media.tablet} {
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: #ffffff;
    border-radius: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    transform: ${({ open }) => (open ? "translateY(0%)" : "translateY(-100%)")};
    transition: transform 0.5s ease-in;
    z-index: 100;
  }
`;

const LinkTo = styled.h4`
  font-size: 1rem;

  ${media.laptop} {
    font-size: 0.8rem;
  }
`;

export default MobileNav;
