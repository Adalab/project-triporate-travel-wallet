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
  componentDidMount(){
    const obj = (JSON.parse(localStorage.getItem('boardingList')))
    if(obj!== null){

      this.setState({boardingList:obj})
    }
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
        if(passData.boardingPass.backFields[1].key === 'ff'){
          const organizationName = passData.organizationName;
          const serialNumber = passData.serialNumber;
          const qrCode = passData.barcode.message;
          const backColor = passData.backgroundColor;
          const foreColor = passData.foregroundColor;
          const labelColor = passData.labelColor;
          const origin = passData.boardingPass.primaryFields[0].value;
          const originName = passData.boardingPass.primaryFields[0].label;
          const destination = passData.boardingPass.primaryFields[1].value;
          const destinationName = passData.boardingPass.primaryFields[1].label;
          const departureDate = passData.boardingPass.headerFields[0].value;
          const departureTime = passData.boardingPass.backFields[4].value;
          const boardingTime = passData.boardingPass.auxiliaryFields[2].value;
          const arrivalTime = passData.boardingPass.backFields[6].value;
          const flight = passData.boardingPass.backFields[7].value;
          const flyingClass = passData.boardingPass.backFields[12].value;
          const seat = passData.boardingPass.secondaryFields[1].value;
          const passengerName = passData.boardingPass.backFields[0].value;
          const frequentFlyer = passData.boardingPass.backFields[1].value;
          const ticketNumber = passData.boardingPass.backFields[2].value;
          const operator = passData.boardingPass.backFields[9].value;
          const bookingCode = passData.boardingPass.backFields[11].value;
          const terminal = passData.boardingPass.backFields[3].value;
          const gateClose = passData.boardingPass.backFields[8].value;
  
          boardingCard = {
            'organizationName': organizationName,
            'serialNumber': serialNumber,
            'qrCode': qrCode,
            'backColor': backColor,
            'foreColor': foreColor,
            'labelColor': labelColor,
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
            'frequentFlyer': frequentFlyer,
            'operator': operator, 
            'ticketNumber': ticketNumber,
            'bookingCode': bookingCode, 
            'terminal': terminal, 
            'gateClose': gateClose,
            'boardingTime':boardingTime
          }
          return boardingCard;
        }else {
          const organizationName = passData.organizationName;
          const serialNumber = passData.serialNumber;
        const qrCode = passData.barcode.message;
        const backColor = passData.backgroundColor;
        const foreColor = passData.foregroundColor;
        const labelColor = passData.labelColor;
        const origin = passData.boardingPass.primaryFields[0].value;
        const originName = passData.boardingPass.primaryFields[0].label;
        const destination = passData.boardingPass.primaryFields[1].value;
        const destinationName = passData.boardingPass.primaryFields[1].label;
        const departureDate = passData.boardingPass.headerFields[0].value;
        const departureTime = passData.boardingPass.backFields[3].value;
        const boardingTime = passData.boardingPass.auxiliaryFields[2].value;
        const arrivalTime = passData.boardingPass.backFields[5].value;
        const flight = passData.boardingPass.backFields[6].value;
        const flyingClass = passData.boardingPass.backFields[11].value;
        const seat = passData.boardingPass.secondaryFields[1].value;
        const passengerName = passData.boardingPass.backFields[0].value;
        const ticketNumber = passData.boardingPass.backFields[1].value;
        const operator = passData.boardingPass.backFields[8].value;
        const bookingCode = passData.boardingPass.backFields[10].value;
        const terminal = passData.boardingPass.backFields[2].value;
        const gateClose = passData.boardingPass.backFields[7].value;

        boardingCard = {
          'organizationName': organizationName,
          'serialNumber': serialNumber,
          'qrCode': qrCode,
          'backColor': backColor,
          'foreColor': foreColor,
          'labelColor': labelColor,
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
          'frequentFlyer': '',
          'operator': operator, 
          'ticketNumber': ticketNumber,
          'bookingCode': bookingCode, 
          'terminal': terminal, 
          'gateClose': gateClose,
          'boardingTime':boardingTime
        }
        return boardingCard;
        }
        
      }
      else if(passData.organizationName === "Renfe"){
        const organizationName = passData.organizationName;
        const serialNumber = passData.serialNumber;
        const qrCode = passData.barcode.message;
        const backColor = passData.backgroundColor;
        const foreColor = passData.foregroundColor;
        const labelColor = passData.labelColor;
        const ticketNumber = passData.boardingPass.backFields[0].value;
        const bookingCode = passData.boardingPass.secondaryFields[1].value;
        const originName = passData.boardingPass.primaryFields[0].label;
        const destinationName = passData.boardingPass.primaryFields[1].label;
        const departureDate = passData.boardingPass.headerFields[0].value;
        const departureTime = passData.boardingPass.primaryFields[0].value;
        const arrivalTime = passData.boardingPass.primaryFields[1].value;
        const train = passData.boardingPass.auxiliaryFields[0].value;
        const car = passData.boardingPass.auxiliaryFields[1].value;
        const seat = passData.boardingPass.auxiliaryFields[2].value;
        const trainClass = passData.boardingPass.auxiliaryFields[3].value;
        const passengerName = passData.boardingPass.secondaryFields[0].value;

        const fee = passData.boardingPass.backFields[4].value;
        const price = passData.boardingPass.backFields[5].value;
        const cercania = passData.boardingPass.backFields[7].label;
        // const conditions = passData.boardingPass.backFields[10].value;


        boardingCard = {
          'organizationName': organizationName,
          'serialNumber' : serialNumber,
          'qrCode': qrCode,
          'backColor': backColor,
          'foreColor': foreColor,
          'labelColor': labelColor,
          'originName': originName,
          'destinationName': destinationName ,
          'departureDate': departureDate,
          'departureTime': departureTime,
          'arrivalTime': arrivalTime,
          'train': train,
          'trainClass': trainClass,
          'seat': seat,
          'car': car,
          'ticketNumber': ticketNumber,
          'bookingCode': bookingCode, 
          'passengerName' : passengerName, 
          'fee' : fee, 
          'price' : price, 
          'cercania' : cercania, 
          // 'conditions' : conditions
        }
        return boardingCard;
      }
      else {
        const serialNumber = passData.serialNumber;
        const qrCode = passData.barcode.message;
        const backColor = passData.backgroundColor;
        const foreColor = passData.foregroundColor;
        const labelColor = passData.labelColor;
        const origin = passData.boardingPass.primaryFields[0].value;
        const originName = passData.boardingPass.primaryFields[0].label;
        const destination = passData.boardingPass.primaryFields[1].value;
        const destinationName = passData.boardingPass.primaryFields[1].label;
        const departureDate = passData.relevantDate;
        //se puee pasar a Iberia si se convierte el formato. Nos vale para Fecha & Hora. 
        const departureTime = passData.boardingPass.backFields[4].value;
        
        //We need to make conditionals for other companies as they have the field in different places.  
        // const arrivalTime = passData.boardingPass.backFields[6].value;
        const flight = passData.boardingPass.backFields[7].value;
        const flyingClass = passData.boardingPass.backFields[12].value;
        const seat = passData.boardingPass.secondaryFields[1].value;
        const passengerName = passData.boardingPass.backFields[0].value;

        boardingCard = {
          'serialNumber': serialNumber,
          'qrCode': qrCode,
          'backColor': backColor,
          'foreColor': foreColor,
          'labelColor': labelColor,
          'origin': origin,
          'originName': originName,
          'destination': destination,
          'destinationName': destinationName ,
          'departureDate': departureDate,
          'departureTime': departureTime,
          // 'arrivalTime': arrivalTime,
          'flight': flight,
          'flyingClass': flyingClass,
          'seat': seat,
          'passengerName': passengerName,
          
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
        localStorage.setItem('boardingList', JSON.stringify(this.state.boardingList));     
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
          boardingList = {this.state.boardingList}
          />)}/>
          <Route  path = "/detail/:id" render = {routerProps => (<Detail 
          routerProps = {routerProps}
          boardingList = {this.state.boardingList}
          />)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
