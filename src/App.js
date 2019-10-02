import React from 'react';
import {Switch, Route} from 'react-router-dom';
import List from './components/List';
import Detail from './components/Detail';
import JSZip from 'jszip';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardingList:[]
    };
    this.getInputFile= this.getInputFile.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleForegroundImage = (zip, filename) => {
    zip
    .file(filename)
    .async('base64')
    .then((content) => {
      const logoImage = content;
      console.log()
      const boardingCard = {
        'logoImage': logoImage
      }

 
      
        this.setState(prevState => ({
          boardingList: [...prevState.boardingList, boardingCard]
          

        }), function error(e) {
        console.log('error', e);
    });
  })
}
  
  handleBackgroundImage = (zip, filename) => {
    console.log(filename)
    zip
    .file(filename)
    .async('base64')
    .then(function success(content) {

      }, function error(e) {
        console.log('error', e);
      }
    );
  };

  handleJsonData =  (zip, filename) => {
    zip
    .file(filename)
    .async('string')
    .then((content) => {
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

        // const terminal = '';
        const flight = passData.boardingPass.backFields[7].value;
        const flyingClass = passData.boardingPass.backFields[12].value;
        const seat = passData.boardingPass.secondaryFields[1].value;
        const passengerName = passData.boardingPass.backFields[0].value;

        const  boardingCard = {
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
          'serialNumber': serialNumber
        }
        this.setState(prevState => ({
          boardingList: [...prevState.boardingList, boardingCard]
      }))
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

        const  boardingCard = {
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
        this.setState(prevState => ({
          boardingList: [...prevState.boardingList, boardingCard]
      }))
      }
      else{

      }
      
    })
  };

  handleFile(file) {
    const handleJsonData = this.handleJsonData;
    const handleForegroundImage = this.handleForegroundImage;
    const handleBackgroundImage = this.handleBackgroundImage;
    JSZip.loadAsync(file)                                   
      .then(function(zip) {
        zip.forEach(function (index, zipEntry) {
          switch (zipEntry.name) {
            case 'pass.json':
              handleJsonData(zip, zipEntry.name);
              break;
            case 'logo.png':
              handleForegroundImage(zip, zipEntry.name);
              break;
            case 'logo@2x.png':
              handleForegroundImage(zip, zipEntry.name);
              break;
            case 'icon.png':
              handleForegroundImage(zip, zipEntry.name);
              break;
            case 'icon@x2.png.png':
              handleForegroundImage(zip, zipEntry.name);
              break;
            default:
              console.log('default');
              break;
            }
          }
        )
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

handleFilePicker() {
  this.myFileField.current.click();
}
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = "/" render = {routerProps => (<List 
          getInputFile = {this.getInputFile}
          handleFilePicker = {this.handleFilePicker}
          />)}/>
          <Route  path = "/detail" component = {Detail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
