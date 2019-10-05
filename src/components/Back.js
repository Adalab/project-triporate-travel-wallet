import React from 'react';
import {Link} from 'react-router-dom';
import './Back.scss';
import PropTypes from 'prop-types';
import List from './List';


class Back extends React.Component {

  render() {
    const {boardingList, routerProps} = this.props;
  
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
            <div 
              className="back__wrapper"
              style={{ backgroundColor: `#D7192D` }}
              >
                <Link className="back__link-go-back" to = {`/detail/${routerProps.match.params.id}`}>
                <i className="fas fa-angle-left"></i>
                </Link>  
                <div className="back__info-wrapper">     
                  <div className="back__card">
                      <div className="back__card__header">
                        <img src={`data:image/png;base64,${boardingPass.logo}`} 
                        alt="Organization logo" 
                        className="back_logo"/>
                      </div>
                      <div className="back__user-name">
                        <p className="user__flyer-title">FREQUENT FLYER</p>
                        <p className="user__flyer-content">{boardingPass.frequentFlyer}</p>
                      </div>
                      <div className="back__user-name">
                        <p className="user__ticket-title">TICKET NUMBER</p>
                        <p className="user__ticket-content">{boardingPass.ticketNumber}</p>
                      </div>
                      <div className="back__user-name">
                        <p className="user__operator-title">OPERATOR</p>
                        <p className="user__operator-content">{boardingPass.operator}</p>
                      </div>
                      <div className="back__user-name">
                        <p className="user__code-title">BOOKING CODE</p>
                        <p className="user__code-content">{boardingPass.bookingCode}</p>
                      </div>
                      <div className="back__user-name">
                        <p className="user__terminal-title">TERMINAL</p>
                        <p className="user__terminal-content">{boardingPass.terminal}</p>
                      </div>
                      <div className="back__user-name">
                          <p className="user__gatehour-title">OTHERS</p>
                          <p className="user__gatehour-content"></p>
                      </div>
                    </div>
                </div>
            </div>
          </React.Fragment>
          )
      }

      else if(boardingPass.organizationName === 'Renfe') {
        return(
          <React.Fragment>
            <div className="detail__list">
                  <List
                    boardingList={boardingList}
                  />
            </div>
          <div className="back__wrapper"
              style={{ backgroundColor: `${boardingPass.backColor}` }}
            >
            <Link className="back__link-go-back" to = {`/detail/${routerProps.match.params.id}`}>
              <span className="go-back-icon">&lt;</span>
            </Link>  
    
            <div className="back__info-wrapper">     
            <div className="back__card">
              <div className="back__card__header">
                <img src={`data:image/png;base64,${boardingPass.logo}`} 
                alt="Organization logo" 
                className="back_logo"/>
              </div>
              <div className="back__user-name">
                <p className="user__flyer-title">SERIAL NUMBER</p>
                <p className="user__flyer-content">{boardingPass.serialNumber}</p>
              </div>
              <div className="back__user-name">
                <p className="user__ticket-title">TICKET NUMBER</p>
                <p className="user__ticket-content">{boardingPass.ticketNumber}</p>
              </div>
              <div className="back__user-name">
                <p className="user__operator-title">ARRIVAL TIME</p>
                <p className="user__operator-content">{boardingPass.arrivalTime}</p>
              </div>
              <div className="back__user-name">
                <p className="user__code-title">BOOKING CODE</p>
                <p className="user__code-content">{boardingPass.bookingCode}</p>
              </div>
              <div className="back__user-name">
                <p className="user__terminal-title">FEE</p>
                <p className="user__terminal-content">{boardingPass.fee}</p>
              </div>
              <div className="back__user-name">
                  <p className="user__gatehour-title">PRICE</p>
                  <p className="user__gatehour-content">{boardingPass.price}</p>
              </div>
              </div>
            </div>
          </div>
          </React.Fragment>
        )
      }

    }
      else{
        return(
          <div>
            <p className="warning__messagge">Este billete no existe, prueba a cargar otro</p>
            <Link to="/" className="link-go-back-error"> Volver </Link>
          </div>
        )
      };
  }
}

Back.propTypes = {
  routerProps: PropTypes.objectOf(PropTypes.object).isRequired
}

export default Back;
