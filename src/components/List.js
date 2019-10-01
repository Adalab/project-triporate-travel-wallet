import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';
import './List.scss';
import QRCode from 'qrcode.react';

class List extends React.Component {
  render() {
    const {getInputFile} = this.props;
    const Array = [1, 2, 3];
    return (
      <div className="list">
        <ul>
        {Array.map((item, index) =>{return(<li key= {index}> <Link to={`/detail/${item}`} >Aqui irá la tarjeta {item}</Link></li>)})}
        </ul>
       <input type="file" name="" id="" className="input" onChange={getInputFile}/>
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
