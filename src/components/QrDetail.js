import React from 'react';
import { Link } from 'react-router-dom';
import './QrDetail.scss';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';

class QrDetail extends React.Component {
  render() {
    const { routerProps } = this.props;
    return (
      <div className="qr__detail-color-wrapper">
        <div className="qr__link-go-back-wrapper">
          <Link className="qr__link-go-back-wrapper" to={`/detail/${routerProps.match.params.id}`}>
            <span className="go-back-icon">&lt;</span>
          </Link>
        </div>
        <div className="qr__small-wrapper">
          <QRCode
            value="755190101463160911600002706190518300510B115885YS3..CFTUB"
            bgColor="#FFFF"
            fgColor="#000"
            size={200}
            includeMargin={true}
            className="detail-qr__small"
          //{passData.barcode.message}
          />
        </div>
      </div>
    );
  }
}

QrDetail.propTypes = {
  routerProps: PropTypes.objectOf(PropTypes.object).isRequired
}

export default QrDetail;
