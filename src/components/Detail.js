import React from 'react';
import {Link} from 'react-router-dom';
import List from './List';
import './Detail.scss';

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
          <Link to = "/"> Volver</Link>
          <img src="" alt="Logo" className="detail_logo"/>
          <div className="card__info">
            <div className="card__gate">
              soy la gate
            </div>
            <div className="card__places"> soy places</div>
            <div className="card__travel-info">
              <ul>
                <li>terminal</li>
                <li>vuelo</li>
                <li>clase</li>
                <li>asiento</li>
              </ul>
            </div>
            <div className="card__qr">
              <div className="boarding__info">boarding time</div>
              <div className="qr__small">
                qr peque 
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

    );
  }
}

export default Detail;
