import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  const [input, setInput] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
  };
  return (
    <SearchDiv>
      <p>Where would you like to stay?</p>
      <FormStyle onSubmit={searchHandler}>
        <input
          onChange={(event) => setInput(event.target.value)}
          type="text"
          value={input}
          placeholder="Search hotels, cabins etc."
        />
        <Button>
          <FaSearch />
        </Button>
      </FormStyle>
    </SearchDiv>
  );
}

const SearchDiv = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(25px);
  filter: drop-shadow(0 0.3rem 0.3rem #cccccc);
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
`;

const Button = styled.div`
  width: 7%;
  background-color: #aeaa91;
  border-radius: 0 0.5rem 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default Searchbar;
