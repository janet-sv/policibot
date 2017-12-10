import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scssm';

const SearchSection = ({
}) => (
  <div styleName="search">
    <div styleName="content">
      <p styleName="description">
        <span styleName="block">¿Ya hiciste una denuncia?</span>
        <span styleName="block">Consulta su estado aquí</span>
      </p>
      <div styleName="button-wrapper">
        <Link to="/mis-denuncias">
          <div styleName="button">
            MI DENUNCIA
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default SearchSection;