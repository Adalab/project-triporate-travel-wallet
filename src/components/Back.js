import React from 'react';
import {Link} from 'react-router-dom';
import './Back.scss';
import PropTypes from 'prop-types';

const Back = ({routerProps}) => {
    return(   
      <div className="qr__detail-wrapper">
        <h1>soy el back</h1>
        <Link className="link-go-back" to = {`/detail/${routerProps.match.params.id}`}>
          <span className="go-back-icon">&lt;</span>
        </Link>  
        <div className="qr__small-wrapper">
          <p>holaaaa</p> 
        </div>
      </div>
  );
}

Back.propTypes = {
  routerProps: PropTypes.objectOf(PropTypes.object).isRequired
}

export default Back;
