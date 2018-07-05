import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import securityService from 'services/security';
import MixBarChart from 'components/MixBarChart';
import './styles.scssm';

class BarReport extends PureComponent {
  state = {
    information: null,
    dataChart: [],
  };

  componentDidMount() {
    this.fetchStatistics();
  };

  fetchStatistics = async () => {
    try {
      this.setState({ information: await securityService.getDistricsComplaints() }, () => {
        const dataChart = this.state.information.map(item => ({
          id: item.id,
          name: item.district,
          stole: item.stole,
          rob: item.rob,
          violent: item.violent,
          drugs: item.drugs,
          murder: item.murder,
          others: item.others,
        }));
        this.setState({ dataChart: dataChart });
      });
    } catch(error) {
      console.log(error);
    }
  };

  render() {
    let {
      dataChart,
    } = this.state;

    return (
      <div>
        <h2 styleName="title">Gráfico de Barras</h2>
        <MixBarChart data={dataChart}/>
      </div>
    );
  }
}

export default BarReport;
