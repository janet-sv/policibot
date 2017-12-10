import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import './styles.scssm';

const Footer = ({
}) => (
  <div styleName="container">
    <footer styleName="footer">
      <div styleName="logo-container">
        <Link to="/">
          <div styleName="logo-wrapper">
            POLICIBOT
          </div>
        </Link>
      </div>
      <div styleName="links">
        <Link to="/mis-denuncias">
          <div styleName="link">Comisarías Asociadas</div>
        </Link>
        <Link to="/comisarias">
          <div styleName="link">Términos y condiciones</div>
        </Link>
        <div styleName="text">Powered by Janet Sarmiento</div>
      </div>
    </footer>
  </div>
);

export default Footer;