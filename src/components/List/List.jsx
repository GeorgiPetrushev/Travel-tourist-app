import styled from "styled-components";
import React, { useState } from "react";
import Details from "../Details/Details";

const List = () => {
  const [type, setType] = useState("restaurant");
  const [rating, setRating] = useState(0);
  const plaices = [
    { name: "beer club" },
    { name: "strip club" },
    { name: "pool club" },
    { name: "beer club" },
    { name: "strip club" },
    { name: "pool club" },
    { name: "beer club" },
    { name: "strip club" },
    { name: "pool club" },
  ];

  const TriggerType = (e) => {
    setType(e.target.value);
  };

  const TriggerRating = (e) => {
    setRating(e.target.value);
  };

  return (
    <div>
      <StyleTittle>
        {" "}
        <h2>Restaurant , Hotels and Attraction near you</h2>
      </StyleTittle>
      <StyleType><h5>Type</h5></StyleType>
      <StyleSelection>
        <div className="type block">
          <select value={type} onChange={TriggerType}>
            <option value="restaurant">Restaurant</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </div>
        <div className="rating block">
          <select value={rating} onChange={TriggerRating}>
            <option value={0}>Rating</option>
            <option value={1}>1+ Stars</option>
            <option value={2}>2+ Stars</option>
            <option value={3}>3+ Stars</option>
            <option value={3.5}>3.5+ Stars</option>
            <option value={4}>4+ Stars</option>
            <option value={4.5}>4.5+ Stars</option>
          </select>
        </div>
      </StyleSelection>
      <StyleResults>
        {plaices?.map((plaice) => (
          <h1>
            <Details plaice={plaice} />
          </h1>
        ))}
      </StyleResults>
    </div>
  );
};

const StyleTittle = styled.div`
  padding: 1rem 0.5rem;
`;

const StyleType = styled.div`
padding: 1rem 0rem 0rem 0.5rem;
`;

const StyleSelection = styled.div`
  padding: 0rem 0rem 2rem 0.5rem;
  font-size: 1.5rem;
  display: flex;
  .block {
    margin-right: 1rem;
    select {
      margin-right: 0.5rem;
      width: 100%;
      max-width: 900px;
      padding: 0.4rem 0.7rem;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      appearance: none;
      background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat;
      background-position: right 0.001rem top 50%;
      background-size: 0.65rem auto;
      &:focus {
        outline: none;
      }
      &:hover {
        transition: 300ms;
        background-color: #eee;
      }
    }
  }
`;

const StyleResults = styled.div``;

export default List;
