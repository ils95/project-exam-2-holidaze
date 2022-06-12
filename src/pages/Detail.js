import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

function Detail() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [image, setImage] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://holidaze-strapi-ils95.herokuapp.com/api/hotels/${params.id}?populate=*&apiKey=${process.env.HOLIDAZE_STRAPI_API_KEY}`
      );

      const data = await response.json();

      const detailData = data.data.attributes;
      setDetails(detailData);

      const imageData =
        data.data.attributes.Image.data.attributes.formats.large;
      setImage(imageData);
    };
    fetchDetails();
  }, [params.id]);

  return (
    <Wrapper>
      <Landing>
        <section
          style={{
            backgroundImage: `url(${image.url})`,
          }}
        ></section>
        <StyledDiv>
          <h2>{details.Title}</h2>
          <p>{details.Description}</p>
          <p>Price/night: {details.Price}</p>
        </StyledDiv>
      </Landing>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 150vh;
`;

const StyledDiv = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(25px);
  filter: drop-shadow(0 0.3rem 0.3rem #cccccc);
  color: #5c5c5c;
  width: 80%;
  top: 85%;
  left: 10%;
  border-radius: 1rem;
  padding: 1.5rem;
`;

const Landing = styled.div`
  width: 100%;
  position: relative;
  margin: 0 0 10rem 0;
  border-radius: 1rem;

  section {
    border-radius: 1rem;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    filter: drop-shadow(0 0.3rem 0.3rem #cccccc);
    min-height: 30rem;
  }

  img {
    width: 100%;
    max-height: 30rem;
    border-radius: 1rem;
    filter: drop-shadow(0 0.3rem 0.3rem #cccccc);
  }
`;

export default Detail;
