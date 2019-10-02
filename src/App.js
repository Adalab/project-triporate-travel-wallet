import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import List from './components/List';
import Detail from './components/Detail';
import JSZip from 'jszip';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardingList:[],
    };
    this.getInputFile= this.getInputFile.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleForegroundImage = async (zip, filename) => {
    const content = await zip
    .file(filename)
    .async('base64');
    return content;
  }

  handleJsonData =async(zip, filename) => {
    let boardingCard = {};
    const content = await zip
    .file(filename)
    .async('string');
      const passData = JSON.parse(content);   
      if( passData.organizationName === "Iberia"){
        const qrCode = passData.barcode.message;
        const serialNumber = passData.serialNumber;
        const primColor = passData.backgroundColor;
        const origin = passData.boardingPass.primaryFields[0].value;
        const originName = passData.boardingPass.primaryFields[0].label;
        const destination = passData.boardingPass.primaryFields[1].value;
        const destinationName = passData.boardingPass.primaryFields[1].label;
        const departureDate = passData.boardingPass.headerFields[0].value;
        const departureTime = passData.boardingPass.backFields[4].value;
        // const boardingTime = passData.boardingTime.auxiliaryFields[2].value;
        const arrivalTime = passData.boardingPass.backFields[6].value;

        const flight = passData.boardingPass.backFields[7].value;
        const flyingClass = passData.boardingPass.backFields[12].value;
        const seat = passData.boardingPass.secondaryFields[1].value;
        const passengerName = passData.boardingPass.backFields[0].value;
        boardingCard = {
          'primColor': primColor,
          'origin': origin,
          'originName': originName,
          'destination': destination,
          'destinationName': destinationName ,
          'departureDate': departureDate,
          'departureTime': departureTime,
          'arrivalTime': arrivalTime,
          'flight': flight,
          'flyingClass': flyingClass,
          'seat': seat,
          'passengerName': passengerName,
          'qrCode': qrCode,
          'serialNumber': serialNumber,
        }
        return boardingCard;
      }
      else if(passData.organizationName === "Renfe"){
        const qrCode = passData.barcode.message;
        const ticketNumber = passData.boardingPass.backFields[0].value;
        const ticketIdentify = passData.boardingPass.secondaryFields[1].value;
        const primColor = passData.labelColor;
        const originName = passData.boardingPass.primaryFields[0].label;
        const destinationName = passData.boardingPass.primaryFields[1].label;
        const departureDate = passData.boardingPass.headerFields[0].value;
        const departureTime = passData.boardingPass.primaryFields[0].value;
        const arrivalTime = passData.boardingPass.primaryFields[1].value;
        const train = passData.boardingPass.auxiliaryFields[0].value;
        const car = passData.boardingPass.auxiliaryFields[1].value;
        const seat = passData.boardingPass.auxiliaryFields[2].value;
        const trainClass = passData.boardingPass.auxiliaryFields[3].value;

        boardingCard = {
          'primColor': primColor,
          'originName': originName,
          'destinationName': destinationName ,
          'departureDate': departureDate,
          'departureTime': departureTime,
          'arrivalTime': arrivalTime,
          'train': train,
          'trainClass': trainClass,
          'seat': seat,
          'car': car,
          'qrCode': qrCode,
          'ticketNumber': ticketNumber,
          'ticketIdentify':ticketIdentify
        }
        return boardingCard;
      }
  };

  handleFile(file) {
    const handleJsonData = this.handleJsonData;
    const handleForegroundImage = this.handleForegroundImage;
    let json = {}; 
    JSZip.loadAsync(file)                                   
      .then( async(zip) => {      
        for(let zipEntry in zip.files){     
          switch (zipEntry) {
            case 'pass.json':
              json = await handleJsonData(zip, zipEntry);
              break;
            default:
              break;
          } 
        }
        for(let zipEntry in zip.files){   
          switch (zipEntry) {
            case 'logo.png':
              json['logo']= await handleForegroundImage(zip, zipEntry);
              break;
            case 'logo@2x.png':
              json['logoRetina'] = await handleForegroundImage(zip, zipEntry);
              break;
            case 'icon.png':
              json['icon'] = await handleForegroundImage(zip, zipEntry);
              break;
            case 'icon@x2.png.png':
              json['iconRetina'] = await handleForegroundImage(zip, zipEntry);  break;
            default:
              break;
          }  
        }
        this.setState(prevState => ({
          boardingList: [...prevState.boardingList, json]
        }))      
      }
    )     
  }

  getInputFile(event){
    console.log(event.target.files);
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        this.handleFile(files[i]);
    }
  }
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path = "/" render = {routerProps => (<List 
          getInputFile = {this.getInputFile}
          />)}/>
          <Route  path = "/detail" component = {Detail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
