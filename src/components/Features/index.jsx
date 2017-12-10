import React from 'react';
import Step from 'components/Step';
import alarmIcon from 'assets/images/alarm-icon.svg';
import anonymousIcon from 'assets/images/anonymous-icon.svg';
import fastIcon from 'assets/images/fast-icon.svg';
import './styles.scssm';

const Features = ({
}) => (
  <section styleName="features">
    <div styleName="content">
      <h2 styleName="subtitle">Mejores Características</h2>
      <div styleName="elements">
        <div styleName="element">
          <div styleName="image-wrapper">
            <img src={fastIcon} alt="fast"/>
          </div>
          <div styleName="name">Rápido</div>
          <div styleName="description">
            Puedes iniciar el registro de una denuncia sin tener que ir a una comisaría
          </div>
        </div>
        <div styleName="element">
          <div styleName="image-wrapper">
            <img src={anonymousIcon} alt="anonymous"/>
          </div>
          <div styleName="name">Anónimo</div>
          <div styleName="description">
            Protege tu identidad, tienes la opción de denunciar anónimamente
          </div>
        </div>
        <div styleName="element">
          <div styleName="image-wrapper">
            <img src={alarmIcon} alt="alarm"/>
          </div>
          <div styleName="name">Disponible</div>
          <div styleName="description">
            La disponibilidad del chat es 24/7, respuestas inmediatas
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;