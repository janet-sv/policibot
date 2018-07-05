import React, { PureComponent } from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import WhatIs from 'components/WhatIs';
import Features from 'components/Features';
import Register from 'components/Register';
import SearchSection from 'components/SearchSection';
import ReportSection from 'components/ReportSection';
import Footer from 'components/Footer';
import mobile from 'assets/images/mobile.png';
import chat from 'assets/images/chat.png';
import fbIcon from 'assets/images/facebook.svg';
import messengerIcon from 'assets/images/messenger.svg';
import './styles.scssm';

class Landing extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Banner>
          <div styleName="banner">
            <h1 styleName="title">
              BUSCAMOS QUE TU DENUNCIA SEA ATENDIDA
            </h1>
            <div styleName="button-wrapper">
              <a href="https://www.messenger.com/t/1874556739521249" target="_blank">
                <div styleName="button">INICIA TU DENUNCIA</div>
              </a>
            </div>
            <div styleName="float-element">
              <div styleName="mobile-wrapper">
                <img src={mobile} alt="Mobile" />
                <img src={chat} alt="Chat" styleName="float-image" />
               </div>
              <div styleName="links-container">
                <p styleName="description">Realiza tu denuncia por estos canales:</p>
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
            </div>
          </div>
        </Banner>
        <WhatIs />
        <Features />
        <Register />
        <SearchSection />
        <ReportSection />
        <Footer />
      </div>
    );
  }
}

export default Landing;
