import React from 'react';
import {Link} from 'react-router-dom';
import './QrDetail.scss';
import QRCode from 'qrcode.react';

class QrDetail extends React.Component {

  render() {
      return(
        <div className="qr__detail-wrapper2">
          <h1>soy el qr detail </h1>
          <Link className="link-go-back" to = "/detail"><span className="go-back-icon">&lt;</span></Link>  
          <div className="qr__small-wrapper">
            <QRCode                                     value="755190101463160911600002706190518300510B115885YS3..CFTUB" 
              bgColor="#FFFF"
              fgColor="#000"
              size={200}
              includeMargin={true}
              className="qr__small"
              //{passData.barcode.message}
            /> 
          </div>
        </div>
    );
  }
}

export default QrDetail;
