import styled from "styled-components";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { media } from "../constants/mediaQueries";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MobileNav open={open} />
    </>
  );
};

const StyledBurger = styled.div`
  display: none;
  z-index: 1000;

  ${media.tablet} {
    display: block;
    cursor: pointer;

  div {
    width: 25px;
    height: 2px;
    background-color: #000000;
    margin: 5px;
    background-color: ${({ open }) => (open ? "#000" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(40deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(100%)" : "translateX(0%)"};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-40deg)" : "rotate(0)")};
    }
  }
`;

export default Burger;
