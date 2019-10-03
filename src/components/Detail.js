import React from 'react';
import { Link } from 'react-router-dom';
import List from './List';
import './Detail.scss';
import QRCode from 'qrcode.react';

class Detail extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    const { boardingList, routerProps } = this.props;
    const getId = routerProps.match.params.id;

    const boardingPass = boardingList.find(item => item.serialNumber === getId);

    if (boardingPass) {
      if (boardingPass.organizationName === 'Iberia') {
        return (
          <React.Fragment>
            <div className="detail__list">
              <List
                boardingList={boardingList}
              />
            </div>
            <div className="detail">
              <Link className="link-go-back" to="/"> <span className="go-back-icon">&lt;</span></Link>
              <div className="detail__card">
                <div className="detail__card__header">
                  <img src={`data:image/png;base64,${boardingPass.logo}`} alt="Organization logo" className="detail_logo" />
                  <div className="card__flight">
                    {boardingPass.departureDate}
                  </div>
                </div>
                <div className="detail__places">
                  <div className="detail__data-wrapper">
                    <p className="detail__city">{boardingPass.origin}</p>
                    <p className="detail__time">{boardingPass.departureTime}</p>
                  </div>
                  <div className="detail__travel-icon">️
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Airplane_silhouette.svg/400px-Airplane_silhouette.svg.png" alt="Transport icon" className="detail__icon-img" />
                  </div>
                  <div className="detail__data-wrapper">
                    <p className="detail__city">{boardingPass.destination}</p>
                    <p className="detail__time">{boardingPass.arrivalTime}</p>
                  </div>
                </div>

                <div className="detail__travel-info">
                  <ul className="detail__info-list">
                    <li className="detail__info-element">
                      <p className="element__info-content">{boardingPass.flight}</p>
                      <p className="element__info-title">Flight</p>
                    </li>
                    <li className="detail__info-element">
                      <p className="element__info-content">{boardingPass.flyingClass}</p>
                      <p className="element__info-title">Class</p>
                    </li>
                    <li className="detail__info-element">
                      <p className="element__info-content">{boardingPass.seat}</p>
                      <p className="element__info-title">Seat</p>
                    </li>
                    <li className="detail__info-element">
                      <p className="element__info-content">{boardingPass.gateClose}</p>
                      <p className="element__info-title">Gate Close</p>
                    </li>
                  </ul>
                </div>

                <div className="detail__user-name">
                  <p className="user__name-title">NAME</p>
                  <p className="user__name-content">{boardingPass.passengerName}</p>
                </div>
                <div className="detail__qr-wrapper">
                  <div className="boarding__info">
                    <p className="user__boarding-title">BOARDING TIME</p>
                    <p className="user__boarding-content">{boardingPass.boardingTime}</p>
                  </div>

                  <Link className="link-qr__detail" to="/qr-detail">
                    <div className="qr__small-wrapper">
                      <QRCode value="755190101463160911600002706190518300510B115885YS3..CFTUB"
                        bgColor="#FFFF"
                        fgColor="#000"
                        size={70}
                        includeMargin={true}
                        className="qr__small"
                      //{passData.barcode.message}
                      />
                    </div>
                  </Link>
                </div>
              </div>

            </div>
            <Link to="/">
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



          <Link to={`/back/${getId}`}>
            <div className="detail__btn-wrapper">
              <p className="detail__btn-label">More info</p>
              <button
                className="detail__btn-more"
                type="button"
                name="add_img"
              // onClick={this.handleFilePicker}
              >
                +
                </button>
            </div>
          </Link>
          
    );
          </React.Fragment >

        );
      }
      else if (boardingPass.organizationName === 'Renfe') {
        return <div>Holis</div>
      }
    } else {
      return console.log('que te peines');
    }


  }
}

export default Detail;
