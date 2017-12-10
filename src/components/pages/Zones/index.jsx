import React, { PureComponent } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HeatMapReport from 'components/HeatMapReport';
import MarkerMapReport from 'components/MarkerMapReport';
import './styles.scssm';

class Zones extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <section styleName="zones-report">
          <div styleName="content">
            <HeatMapReport />
          </div>
        </section>
        <section styleName="zones-report is-gray">
          <div styleName="content">
            <MarkerMapReport />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Zones;
