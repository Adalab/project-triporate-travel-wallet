import React from 'react';
import {Link} from 'react-router-dom';
import './Back.scss';

class Back extends React.Component {

  render() {
    const {routerProps} = this.props;
    return(   
      <div className="back__wrapper">
        <Link className="back__link-go-back" to = {`/detail/${routerProps.match.params.id}`}>
          <span className="go-back-icon">&lt;</span>
        </Link>  

        <div className="back__info-wrapper">     
        <div className="back__card">
              <div className="detail__card__header">
                <img src="http://marcaporhombro.com/wp-content/uploads/2012/09/renfe.jpg" 
                alt="Organization logo" 
                className="back_logo"/>
            </div>
              <div className="back__user-name">
                <p className="user__flyer-title">FREQUENT FLYER</p>
                <p className="user__flyer-content">IH66667777</p>
              </div>
              <div className="back__user-name">
                <p className="user__ticket-title">TICKET NUMBER</p>
                <p className="user__ticket-content">739827938249384</p>
              </div>
              <div className="back__user-name">
                <p className="user__operator-title">OPERATOR</p>
                <p className="user__operator-content">IBERIA LÍNEAS AÉREAS</p>
              </div>
              <div className="back__user-name">
                <p className="user__code-title">BOOKING CODE</p>
                <p className="user__code-content">XXXXXXHS</p>
              </div>
              <div className="back__user-name">
                <p className="user__terminal-title">TERMINAL</p>
                <p className="user__terminal-content">T2</p>
              </div>
              <div className="back__user-name">
                  <p className="user__gatehour-title">GATE CLOSE</p>
                  <p className="user__gatehour-content">13:50</p>
              </div>
              </div>
        </div>
      </div>
  );
  }
}

export default Back;
