import React from 'react';
import {Link} from 'react-router-dom';
import './QrDetail.scss';
import QRCode from 'qrcode.react';

class QrDetail extends React.Component {
  render() {
    const { routerProps } = this.props;
    console.log('hola soy el qr grande')
      return(
        <div className="qr__detail-wrapper2">
          <Link className="link-go-back" to = {`/detail/${routerProps.match.params.id}`}>
            <span className="go-back-icon">&lt;</span>
          </Link>  
          <div className="qr__small-wrapper">
          <h1>soy el qr detail JEJE</h1>
            <QRCode
              value="755190101463160911600002706190518300510B115885YS3..CFTUB" 
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
