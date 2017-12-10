import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/images/logo.png';
import './styles.scssm';

const Header = ({
}) => (
  <div styleName="container">
    <header styleName="header">
      <div styleName="logo-container">
        <Link to="/">
          <div styleName="logo-wrapper">
            <img src={logo} alt="Policy"/>
          </div>
        </Link>
      </div>
      <div styleName="links">
        <Link to="/">
          <div styleName="link">INICIO</div>
        </Link>
        <Link to="/mis-denuncias">
          <div styleName="link">MIS DENUNCIAS</div>
        </Link>
{/*        <Link to="/comisarias">
          <div styleName="link">COMISARÍAS</div>
        </Link>*/}
        <Link to="/zonas-informadas">
          <div styleName="link">ZONAS INFORMADAS</div>
        </Link>
      </div>
    </header>
  </div>
);

export default Header;