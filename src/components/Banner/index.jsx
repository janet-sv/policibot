import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scssm';

const Banner = ({
  children,
}) => (
  <section styleName="banner">
    <div styleName="wrapper">
      {children}
    </div>
  </section>
);

export default Banner;