import React from 'react';
import {Link} from 'react-router-dom';
import './Back.scss';
import PropTypes from 'prop-types';

class Back extends React.Component {

  render() {
    const {boardingList, routerProps} = this.props;
    console.log(boardingList);
    const getId = routerProps.match.params.id;
    const boardingPass = boardingList.find(item => item.serialNumber === getId);

    if (boardingPass) {
      if (boardingPass.organizationName === 'Iberia') {
        return(
          <div className="back__wrapper">
            <Link className="back__link-go-back" to = {`/detail/${routerProps.match.params.id}`}>
              <span className="go-back-icon">&lt;</span>
            </Link>  
    
            <div className="back__info-wrapper">     
            <div className="back__card">
                  <div className="back__card__header">
                    <img src="http://marcaporhombro.com/wp-content/uploads/2012/09/renfe.jpg" 
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
      )
      }
      else{};
    }
  }
}

Back.propTypes = {
  routerProps: PropTypes.objectOf(PropTypes.object).isRequired
}

export default Back;
