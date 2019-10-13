import React from "react";
import { Link } from "react-router-dom";
import "./QrDetail.scss";
import QRCode from "qrcode.react";
import List from "./List";
import PropTypes from "prop-types";

class QrDetail extends React.Component {
  render() {
    const { boardingList, routerProps, getInputFile } = this.props;
    const getId = routerProps.match.params.id;

    const boardingPass = boardingList.find(item => item.serialNumber === getId);

    return (
      <React.Fragment>
        <div className="detail__list">
          <List boardingList={boardingList} getInputFile={getInputFile} />
        </div>
        <div className="qr__detail-color-wrapper">
          <div className="qr__link-go-back-wrapper2">
            <Link
              className="qr__link-go-back-wrapper"
              to={`/detail/${routerProps.match.params.id}`}
            >
              <i className="fas fa-angle-left qr-back"></i>
            </Link>
          </div>
          <div className="qr__small-wrapper">
            <QRCode
              value={boardingPass.qrCode}
              bgColor="#FFFF"
              fgColor="#000"
              size={300}
              includeMargin={true}
              className="detail-qr__small"
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

QrDetail.propTypes = {
  getInputFile: PropTypes.func.isRequired,
  routerProps: PropTypes.objectOf(PropTypes.object).isRequired,
  boardingList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default QrDetail;
