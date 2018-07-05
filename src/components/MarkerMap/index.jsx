import React from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MarkerMap = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  >
    {
      props.list && props.list.map((item, key) => (
        <Marker
          key={key}
          icon={item.icon}
          position={item.position}
        />
      ))
    }
  </GoogleMap>
));

MarkerMap.propTypes = {
  zoom: PropTypes.number,
  center: PropTypes.object,
};

MarkerMap.defaultProps = {
  zoom: 5,
  center: { lat: -9.8177974, lng: -74.739109 },
};

export default MarkerMap;
