import heroimage from "../img/hero-landscape.webp";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Browse() {
  const [searchTitle, setSearchTitle] = useState("");
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
      <Landing>
        <SearchDiv>
          <p>Where would you like to stay?</p>
          <FormStyle>
            <input
              type="text"
              placeholder="Search hotels, cabins etc."
              onChange={(e) => setSearchTitle(e.target.value)}
            />
            <Button>
              <FaSearch />
            </Button>
          </FormStyle>
        </SearchDiv>
      </Landing>

      <Wrapper>
        {hotels
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.attributes.Title.toLowerCase().includes(
                searchTitle.toLowerCase()
              )
            ) {
              return value;
            }
            return false;
          })
          .map((hotel) => (
            <Card key={hotel.id}>
              <Link to={"/detail/" + hotel.id}>
                <div>
                  <div
                    style={{
                      backgroundImage: `url(${hotel.attributes.Image.data.attributes.formats.small.url})`,
                    }}
                  ></div>
                </div>
                <p>{hotel.attributes.Title}</p>
              </Link>
            </Card>
          ))}
      </Wrapper>
    </div>
  );
}

const Landing = styled.div`
  position: relative;
  margin: 0 0 14rem 0;
  width: 100%;
  height: 10vw;
  background-image: url(${heroimage});
  border-radius: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  filter: drop-shadow(0 0.3rem 0.3rem #cccccc);
`;

const SearchDiv = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  color: #5c5c5c;
  width: 80%;
  height: 10rem;
  top: 80%;
  left: 10%;
  border-radius: 1rem;
  padding: 1.5rem;
`;

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  input {
    border: none;
    width: 93%;
    font-size: 0.7rem;
    padding: 1rem;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`;

const Button = styled.div`
  width: 7%;
  background-color: white;
  border-radius: 0 0.5rem 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aeaa91;
`;

const Wrapper = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;

  h3 {
    margin: 1rem 0;
  }
`;

const Card = styled.div`
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  width: 30%;
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

export default Browse;
