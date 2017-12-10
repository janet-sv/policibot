import React, { PureComponent } from 'react';
import HeatMap from 'components/HeatMap';
import securityService from 'services/security';
import './styles.scssm';

class HeatMapReport extends PureComponent {
  state = {
    information: null,
    points: [],
  };

  componentDidMount() {
    this.fetchPoints();
  };

  fetchPoints = async () => {
    try {
      this.setState({ information: await securityService.getHeatMapPoints() }, () => {
        const points = this.state.information.map(point => (
          new window.google.maps.LatLng(parseFloat(point.latitude), parseFloat(point.longitude))
        ));
        this.setState({
          points: points,
        });
      });
    } catch(error) {
      console.log(error);
    }
  };

  render() {
    let {
      points,
    } = this.state;

    return (
      <div>
        <h2 styleName="title">Mapa de zonas inseguras</h2>
        <HeatMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuMyAcDMUIAfRV7kGVSxWNiZxvtwx4oNY&v=3.exp&libraries=geometry,drawing,places,visualization"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `480px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          center={{ lat: -12.11609, lng: -77.044919 }}
          zoom={13}
          list={points}
        />
      </div>
    );
  }
}

export default HeatMapReport;
