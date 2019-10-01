import React from 'react';
import {Switch, Route} from 'react-router-dom';
import List from './components/List';
import Detail from './components/Detail';
import JSZip from 'jszip';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getInputFile= this.getInputFile.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleBackgroundImage = this.handleBackgroundImage.bind(this);
    this.handleForegroundImage = this.handleForegroundImage.bind(this);
    this.handleJsonData = this.handleJsonData.bind(this);
  }
  handleForegroundImage = function(zip, filename){
    console.log(filename);
    // zip
    // .file(filename)
    // .async('base64')
    // .then(function success(content) {
    //   console.log(content);
    //   // $element.prepend('<img src="data:image/png;base64,' + content + '">');
    // }, function error(e) {
    //     // handle the error
    //     console.log('error', e);
    // });
  };
  
  handleBackgroundImage = function (zip, filename){
    console.log(filename)
    // zip
    // .file(filename)
    // .async('base64')
    // .then(function success(content) {
    //   console.log(content);
    //   // $element.css('background-image', 'url(data:image/png;base64,' + content + ')');
    // }, function error(e) {
    //     // handle the error
    //     console.log('error', e);
    // });
  };
  handleJsonData = function (zip, filename){
    console.log(filename)
    // zip
    // .file(filename)
    // .async('string')
    // .then(function success(content) {
    //   const passData = JSON.parse(content);     
    //   console.log(passData);
    // })
  }

  handleFile(file) {
    console.log(file.name)
    console.log(file)
    JSZip.loadAsync(file)                                   
      .then(function(zip) {
        zip.forEach(function (index, zipEntry) {
          console.log(zipEntry);
          console.log(zipEntry.name)
        switch (zipEntry.name) {
          case 'pass.json':
            this.handleJsonData(zip, zipEntry.name);
            break;
          case 'logo.png':
            this.handleForegroundImage(zip, zipEntry.name);
            break;
          case 'logo@2x.png':
            this.handleForegroundImage(zip, zipEntry.name);
            break;
          case 'icon.png':
            this.handleForegroundImage(zip, zipEntry.name);
            break;
          case 'icon@x2.png.png':
            this.handleForegroundImage(zip, zipEntry.name);
            break;
          case 'thumbnail.png':
            this.handleForegroundImage(zip, zipEntry.name);
            break;
          case 'background.png':
            this.handleBackgroundImage(zip, zipEntry.name);
            break;
          case 'strip.png':
            this.handleBackgroundImage(zip, zipEntry.name);
            break;
          case 'manifest.json':
            this.handleJsonData(zip, zipEntry.name);
            break;
          default:
            console.log('default');
            break;
          }

        })}
      )
}
  getInputFile(event){
    console.log(event.target.files);
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        this.handleFile(files[i]);
        console.log(i);
    }
}
  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = "/" render = {routerProps => (<List getInputFile = {this.getInputFile}/>)}/>
          <Route  path = "/detail" component = {Detail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
