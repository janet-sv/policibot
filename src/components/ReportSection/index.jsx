import React from 'react';
import robberIcon from 'assets/images/robber.png';
import deniedIcon from 'assets/images/denied-icon.svg';
import './styles.scssm';

const ReportSection = ({
}) => (
  <div styleName="search">
    <div styleName="content">
      <div styleName="elements">
        <p styleName="description">
          <span styleName="block">El Perú necesita tu ayuda.</span>
          <span styleName="block">Combatir la delincuencia es un trabajo en conjunto.</span>
        </p>
        <div styleName="icons">
          <img src={robberIcon} alt="robber" styleName="icon is-top" />
          <img src={deniedIcon} alt="denied" styleName="icon is-bottom" />
        </div>
      </div>
      <div styleName="elements">
        <div styleName="button-wrapper">
          <a href="https://www.messenger.com/t/1874556739521249">
            <div styleName="button">
              REGISTRA UNA ZONA PELIGROSA
            </div>
          </a>
        </div>
        <div styleName="button-wrapper">
          <a href="https://www.messenger.com/t/1874556739521249">
            <div styleName="button is-blue">
              CONOCE LAS ZONAS DE RIESGO
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ReportSection;