import React, { useState } from "react";

const List = () => {
  const [type, setType] = useState("restaurant");
  const [rating, setRating] = useState("");
  const TriggerType = (e) => {
    setType(e.target.value);
  };
  const TriggerRating = (e) =>{
    setRating(e.target.value)
  }
  return (
    <div>
      <h4> Restaurant , Hotels and Attraction near you</h4>

      <div>
      <label>Type</label>
        <select value={type} onChange={TriggerType}>
          <option value="restaurant">Restaurant</option>
          <option value="hotels">Hotels</option>
          <option value="attractions">Attractions</option>
        </select>
        <label>Rating</label>
        <select value={rating} onChange={TriggerRating}>
          <option value={0}>All start</option>
          <option value={1}>1+ Stars</option>
          <option value={2}>2+ Stars</option>
          <option value={3}>3+ Stars</option>
          <option value={3.5}>3.5+ Stars</option>
          <option value={4}>4+ Stars</option>
          <option value={4.5}>4.5+ Stars</option>
        </select>
      </div>
    </div>
  );
};

export default List;
