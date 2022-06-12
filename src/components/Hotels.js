import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Hotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    const checkStorage = localStorage.getItem("hotels");

    if (checkStorage) {
      setHotels(JSON.parse(checkStorage));
    } else {
      const api = await fetch(
        `https://holidaze-strapi-ils95.herokuapp.com/api/hotels?populate=*&apiKey=${process.env.HOLIDAZE_STRAPI_API_KEY}`
      );
      const data = await api.json();

      localStorage.setItem("hotels", JSON.stringify(data.data));
      setHotels(data.data);
      console.log(data.data);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Trending right now</h3>
        <Splide
          options={{
            perPage: 4,
            breakpoints: {
              1024: {
                perPage: 3,
              },
              767: {
                perPage: 2,
              },
              640: {
                perPage: 1,
              },
            },
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3vw",
          }}
        >
          {hotels.map((hotel) => {
            return (
              <SplideSlide key={hotel.id}>
                <Card>
                  <div>
                    <div
                      style={{
                        backgroundImage: `url(${hotel.attributes.Image.data.attributes.formats.small.url})`,
                      }}
                    ></div>
                  </div>

                  <p>{hotel.attributes.Title}</p>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;

  h3 {
    margin: 1rem 0;
  }
`;

const Card = styled.div`
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 10rem;

  div {
    border-radius: 1rem;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    min-height: 10rem;
    filter: drop-shadow(0 0.3rem 0.3rem #cccccc);
  }

  p {
    margin: 1rem 0;
  }
`;

export default Hotels;
