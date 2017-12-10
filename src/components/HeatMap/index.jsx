import React from 'react';
import PropTypes from 'prop-types';
import HeatmapLayer from 'react-google-maps/lib/components/visualization/HeatmapLayer';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";

const HeatMap = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  >
    <HeatmapLayer
      data={props.list}
    />
  </GoogleMap>
));

HeatMap.propTypes = {
  zoom: PropTypes.number,
  center: PropTypes.object,
};

HeatMap.defaultProps = {
  zoom: 5,
  center: { lat: -9.8177974, lng: -74.739109 },
};

export default HeatMap;
