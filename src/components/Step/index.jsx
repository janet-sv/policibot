import React from 'react';
import './styles.scssm';

const Step = ({
  number,
  children,
}) => (
  <div styleName="step">
    <div styleName="number">
      {number}
    </div>
    <div styleName="content">
      {children}
    </div>
  </div>
);

export default Step;