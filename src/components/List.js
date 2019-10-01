import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import './List.scss';
import QRCode from 'qrcode.react';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.myFileField = React.createRef();

    this.handleFilePicker = this.handleFilePicker.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  render() {
    const {getInputFile} = this.props;
    const Array = [1, 2, 3];
    return (
      <div className="list">
        <ul>
        {Array.map((item, index) =>{return(<li key= {index}> <Link to={`/detail/${item}`} >Aqui irá la tarjeta {item}</Link></li>)})}
        </ul>
        <button
         className="button"
         type="button"
         name="add_img"
         onClick={this.handleFilePicker}
       >+
       </button>
       <input
         type="file"
         ref={this.myFileField}
         name="image"
         id="img-selector"
         className=""
         onChange={getInputFile}
       />
        <QRCode value="755190101463160911600002706190518300510B115885YS3..CFTUB" 
        bgColor="#FF0080"
        fgColor="#FFFFFF"
        size="200"
        includeMargin="true"
        //{passData.barcode.message}
          />
      </div>
    );
  }
}

export default List;
