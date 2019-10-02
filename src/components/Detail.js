import React from 'react';
import {Link} from 'react-router-dom';
import List from './List';
import './Detail.scss';
import QRCode from 'qrcode.react';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="detail__list">
        <List />
        </div>
        <div className="detail">     
          <Link to = "/">&lt;</Link>      
          <div className="detail__card">
          <div className="detail__card__header">
            <img src="http://marcaporhombro.com/wp-content/uploads/2012/09/renfe.jpg" alt="Organization logo" className="detail_logo"/>
            <div className="card__flight">
              FLIGHT DATE: 10/10/20
            </div>
          </div>

          <div className="detail__places">
            <div className="detail__data-wrapper">
              <p className="detail__city">MAD</p>
              <p className="detail__time">21:30</p>
            </div>
            <div className="detail__travel-icon">️
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Airplane_silhouette.svg/400px-Airplane_silhouette.svg.png" alt="Transport icon" className="detail__icon-img"/>
            </div>
            <div className="detail__data-wrapper">
              <p className="detail__city">BCN</p>
              <p className="detail__time">21:30</p>
            </div>
          </div>

          <div className="detail__travel-info">
            <ul className="detail__info-list">
              <li className="detail__info-element">
                <p className="element__info-content">AR 712</p>
                <p className="element__info-title">Flight</p>
              </li>
              <li className="detail__info-element">
                <p className="element__info-content">Turist</p>
                <p className="element__info-title">Class</p>
              </li>
              <li className="detail__info-element">
                <p className="element__info-content">5F</p>
                <p className="element__info-title">Seat</p>
              </li>
              <li className="detail__info-element">
                <p className="element__info-content">15:40</p>
                <p className="element__info-title">Boarding Time</p>
              </li>
            </ul>
          </div>

          <div className="detail__user-name">
            <p className="user__name-title">NAME</p>
            <p className="user__name-content">MARIA JESUS DE LA CALZADA ABIERTA</p>
          </div>

            <div className="detail__qr-wrapper">
              <div className="boarding__info">
                <p className="user__boarding-title">BOARDING TIME</p>
                <p className="user__boarding-content">21:45</p>
              </div>
              <div className="qr__small-wrapper">
                <QRCode                                     value="755190101463160911600002706190518300510B115885YS3..CFTUB" 
                  bgColor="#FFFF"
                  fgColor="#000"
                  size="200"
                  includeMargin="true"
                  className="qr__small"
                  //{passData.barcode.message}
                /> 
              </div>
            </div>
          </div>

          <Link to = "/">
            <div className="detail__btn-wrapper">
              <p className="detail__btn-label">More info</p>
              <button
                className="detail__btn-more"
                type="button"
                name="add_img"
                // onClick={this.handleFilePicker}
              >+
              </button>
            </div>
          </Link>  
        </div>
      </React.Fragment>

    );
  }
}

export default Detail;
