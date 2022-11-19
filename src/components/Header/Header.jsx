import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  return (
    <StyleHeader>
      <div>
        <h2>Travel Advisor</h2>
      </div>
      <div className="header-right">
        {" "}
        <h2>Explore New Places</h2>
        <div className="icon-and-search">
          {" "}
          <BiSearchAlt className="search-icon" />
          <input
            placeholder="Search for place ..."
            className="header-input"
          ></input>
        </div>
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
    align-items: center;
  }
  .icon-and-search{
    margin-right:3rem;
    background-color:rgba(255,255,255,0.3);
    height:60%;
    text-align: center;
    
  }
  .search-icon {
    margin-left: 0.4rem;
    font-size: 1.2rem;
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
