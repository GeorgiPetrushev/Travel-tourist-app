import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <StyleHeader>
      <div>Travel Advisor</div>
      <div className="header-right">
        {" "}
        <h2>Explore New Places</h2>
        <BiSearchAlt className="search-icon" />
        <input placeholder="Search for place ..." className="header-input"></input>
      </div>
    </StyleHeader>
  );
};

const StyleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .header-right {
    display: flex;
  }
  .search-icon {
    margin-left:1rem;
      font-size: 2rem;
      height: auto;
    }
    .header-input{
      border:none;
      font-size:1.4rem;
      padding:0.5rem;
      &:focus{
        outline: none;
      }
    }
`;

export default Header;
