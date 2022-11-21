import React from "react";
import GoogleMapReact from "google-map-react";

import styled from "styled-components";

const Map = () => {


  const coordinates = { lat: 0 , lng: 0 }

  return (
    <StyleMap>
      <div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center = {coordinates}
        defaultZoom={15}
        margin={[50,50,50,50]}
        options = {``}
        onChange = {``}
        onChildClick= {``}
      >

      </GoogleMapReact>
      </div>
    </StyleMap>
  );
};

const StyleMap = styled.div``;

export default Map;
