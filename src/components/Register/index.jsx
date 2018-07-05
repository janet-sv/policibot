import React from 'react';
import fbIcon from 'assets/images/facebook.svg';
import messengerIcon from 'assets/images/messenger.svg';
import './styles.scssm';

const Register = ({
}) => (
  <section styleName="register">
    <div styleName="links-container">
      <p styleName="description">
        <span styleName="block">¿Tienes algo que denunciar?</span>
        <span styleName="block">Escríbenos, sólo son unos cuantos pasos para registrar tu caso.</span>
      </p>
      <div styleName="links">
        <a href="https://www.facebook.com/PoliciBot-1874556739521249/" target="_blank">
          <div styleName="link">
            <img src={fbIcon} alt="Facebook"/>
          </div>
        </a>
        <a href="https://www.messenger.com/t/1874556739521249" target="_blank">
          <div styleName="link">
            <img src={messengerIcon} alt="Messenger"/>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default Register;