import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <StyleHeader>
      <div><h2>Travel Advisor</h2></div>
      <div className="header-right">
        {" "}
        <h2>Explore New Places</h2>
        <BiSearchAlt className="search-icon" />
        <input
          placeholder="Search for place ..."
          className="header-input"
        ></input>
      </div>
    </StyleHeader>
  );
};

const StyleHeader = styled.div`
  background-color: #494D5F;
  color:#ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2{
    padding: 0 1rem;
  }
  .header-right {
    display: flex;
  }
  .search-icon {
    margin-left: 1rem;
    font-size: 2rem;
    height: auto;
  }
  .header-input {
    background-color:transparent;
    border: none;
    font-size: 1.4rem;
    color#fff;
    &:focus {
      outline: none;
    }
    ::placeholder{
      color:#dddddd;
    }
  }
`;

export default Header;
