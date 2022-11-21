import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import styled from "styled-components";

const Map = () => {


  const containerStyle = {
    width: "100%",
    height: "90vh"
  };
  const center = {
    lat: 0,
    lng: 0
  };

  return (
    <StyleMap>
      <div>
      <LoadScript
        googleMapsApiKey= {process.env.REACT_APP_GOOGLE_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          defaultCenter={center}
          center={center}
          zoom={5}
          options={``}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
      </div>
    </StyleMap>
  );
};

const StyleMap = styled.div``;

export default Map;
