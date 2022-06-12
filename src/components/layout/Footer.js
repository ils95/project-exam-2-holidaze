import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <p>© Copyright 2022</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  width: 80vw;
  height: 10rem;
  background-color: #aeaa91;
  border-radius: 1rem 1rem 0 0;
  filter: drop-shadow(0 0.3rem 0.3rem #cccccc);
  color: white;
  display: flex;
  justify-items: center;
  align-items: center;

  p {
    width: 100%;
    text-align: center;
  }
`;

export default Footer;
