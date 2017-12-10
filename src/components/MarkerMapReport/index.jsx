import React, { PureComponent } from 'react';
import MarkerMap from 'components/MarkerMap';
import securityService from 'services/security';
import marker1 from 'assets/images/marker1.png';
import marker2 from 'assets/images/marker2.png';
import marker3 from 'assets/images/marker3.png';
import marker4 from 'assets/images/marker4.png';
import marker5 from 'assets/images/marker5.png';
import marker6 from 'assets/images/marker6.png';
import './styles.scssm';

class MarkerMapReport extends PureComponent {
  state = {
    information: null,
    points: [],
  };

  componentDidMount() {
    this.fetchPoints();
  };

  getIcon = (type) => {
    let icon = null;

    switch (type) {
      case 'ACOSO-VIOLACION':
        icon = marker1;
        break;
      case 'ROBO':
        icon = marker2;
        break;
      case 'HURTO':
        icon = marker3;
        break;
      case 'HOMICIDIO':
        icon = marker4;
        break;
      case 'DROGAS':
        icon = marker5;
        break;
      case 'OTROS':
        icon = marker6;
        break;
      default:
        icon = null;
    }
    return icon;
  };

  fetchPoints = async () => {
    try {
      this.setState({ information: await securityService.getHeatMapPoints() }, () => {
        const points = this.state.information.map(complaint => ({
          icon: this.getIcon(complaint.kind.toUpperCase()),
          position: { lat: parseFloat(complaint.latitude), lng: parseFloat(complaint.longitude) },
        }));
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
        <MarkerMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuMyAcDMUIAfRV7kGVSxWNiZxvtwx4oNY&v=3.exp&libraries=geometry,drawing,places,visualization"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `480px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          center={{ lat: -12.11609, lng: -77.044919 }}
          zoom={12}
          list={points}
        />
        <div styleName="legend-container">
          <div styleName="legend-column">
            <div styleName="legend"><div styleName="legend-sign" style={{ background: '#d90022' }}></div> Robo</div>
            <div styleName="legend"><div styleName="legend-sign" style={{ background: '#ffcb44' }}></div> Hurto</div>
          </div>
          <div styleName="legend-column">
            <div styleName="legend"><div styleName="legend-sign" style={{ background: '#ff4471' }}></div> Acoso</div>
            <div styleName="legend"><div styleName="legend-sign" style={{ background: '#4caf50' }}></div> Homicidio</div>
          </div>
          <div styleName="legend-column">
            <div styleName="legend"><div styleName="legend-sign" style={{ background: '#2196f3' }}></div> Drogas</div>
            <div styleName="legend"><div styleName="legend-sign" style={{ background: '#795548' }}></div> Otros</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarkerMapReport;
