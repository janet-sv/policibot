import React from 'react';
import Step from 'components/Step';
import './styles.scssm';

const WhatIs = ({
}) => (
  <section styleName="what-is">
    <div styleName="content">
      <h2 styleName="subtitle">¿Qué es Policibot?</h2>
      <p styleName="description">
        <span styleName="block">
          Policibot es una herramienta que ayuda al ciudadano a registrar denuncias y darle seguimiento.
        </span>
        <span styleName="block">
          Además promueve su participación ofreciendo la opción de registrar zonas de riesgo.
        </span>
      </p>
      <div styleName="steps">
        <Step number="1">
          <span styleName="block">Realiza tu denuncia</span>
          <span styleName="block">por nuestro chat</span>
        </Step>
        <Step number="2">
          <span styleName="block">Dale seguimiento</span>
          <span styleName="block">a tu incidente</span>
        </Step>
        <Step number="3">
          <span styleName="block">Conoce las zonas</span>
          <span styleName="block">de mayor riesgo</span>
        </Step>
      </div>
    </div>
  </section>
);

export default WhatIs;