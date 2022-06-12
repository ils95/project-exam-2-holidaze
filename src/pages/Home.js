import Hotels from "../components/Hotels";
import heroimage from "../img/hero-landscape.webp";
import styled from "styled-components";

function Home() {
  return (
    <>
      <Landing>
        <img src={heroimage} alt="heroimage" />
        <Intro>
          <p>Explore the beautiful areas in and around Bergen, Norway</p>
        </Intro>
        <Button>
          <p>Get started</p>
        </Button>
      </Landing>
      <Hotels />
    </>
  );
}

const Landing = styled.div`
  position: relative;
  margin: 0 0 5rem 0;

  img {
    width: 100%;
    border-radius: 1rem;
    filter: drop-shadow(0 0.3rem 0.3rem #cccccc);
  }
`;

const Intro = styled.div`
  position: absolute;
  width: 50%;
  top: 13%;
  left: 10%;
  font-size: 4vw;
  font-weigth: 700;
  line-height: 4vw;
`;

const Button = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b5142;
  filter: drop-shadow(0 0.3rem 0.3rem #3b5142);
  color: white;
  border-radius: 1rem;
  width: 15%;
  height: 7%;
  top: 40%;
  left: 10%;

  p {
    margin: 0;
    font-size: 1.3vw;
  }
`;

export default Home;
