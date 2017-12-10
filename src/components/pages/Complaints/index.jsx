import React, { PureComponent } from 'react';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Input from 'components/Input';
import Footer from 'components/Footer';
import securityService from 'services/security';
import loader from 'assets/images/loading.gif';
import downloadIcon from 'assets/images/download-icon.svg';
import './styles.scssm';

class Complaints extends PureComponent {
  state = {
    complaint: null,
    showLoader: false,
    showResult: false,
  };

  getComplaint = async () => {
    const code = this.refs.complaintCode.getValue();
    try {
      this.setState({ complaint: await securityService.getComplaint(!!code ? code : null) });
    } catch(error) {
      this.setState({ complaint: null });
    }
  };

  searchComplaint = () => {
    this.setState({
      showLoader: true,
      showResult: false,
    }, () => {
      this.getComplaint();

      setTimeout(() => {
        this.setState({
          showLoader: false,
          showResult: true,
        });
      }, 2000);
    });
  };

  render() {
    const {
      complaint,
      showLoader,
      showResult,
    } = this.state;

    return (
      <div>
        <Header />
        <section styleName="search-complaint">
          <div styleName="content">
            <h2 styleName="subtitle">Consulta el estado y detalle de tus denuncias ingresando solo el código</h2>
            <div styleName="form">
              <div styleName="input-wrapper">
                <Input
                  label="Código de denuncia"
                  ref="complaintCode"
                />
              </div>
              <div styleName="button-wrapper">
                <button styleName="button" onClick={this.searchComplaint}>
                  BUSCAR
                </button>
              </div>
            </div>
            {
              showLoader &&
              <div styleName="loader">
                <div styleName="loader-image-wrapper">
                  <img src={loader} alt="Loading..." />
                </div>
              </div>
            }
            {
              showResult &&
              <div styleName="results">
                {
                  !!complaint
                  ? <div>
                      <div styleName="result-title">
                        Resultado
                      </div>
                      <div styleName="row">
                        <div styleName="label">Estado de la denuncia:</div>
                        <div styleName="value">{complaint.status || '--'}</div>
                      </div>
                      <div styleName="row">
                        <div styleName="label">Denunciante:</div>
                        <div styleName="value">{complaint.isAnonymous ? 'Anónimo' : complaint.name}</div>
                      </div>
                      <div styleName="row">
                        <div styleName="label">Edad:</div>
                        <div styleName="value">{complaint.age || '--'}</div>
                      </div>
                      <div styleName="row">
                        <div styleName="label">Tipo de delito:</div>
                        <div styleName="value">{complaint.kind || '--'}</div>
                      </div>
                      <div styleName="row">
                        <div styleName="label">Descripción:</div>
                        <div styleName="value">{complaint.detail || '--'}</div>
                      </div>
                      <div>
                        <a href="https://8729631e.ngrok.io/api/v1/messages/27/make_pdf" download>
                          <div styleName="download-wrapper">
                            <img src={downloadIcon} alt=""/>
                            Descargar
                          </div>
                        </a>
                      </div>
                    </div>
                  : <div>No es encontraron denuncias con el código ingresado. Por favor, revisar si el código es correcto.</div>
                }
              </div>
            }
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Complaints;
