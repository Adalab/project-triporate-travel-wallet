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
  }

  handleFile(file) {
    console.log(file.name)
    console.log(file)
    JSZip.loadAsync(file)                                   
      .then(function(zip) {
        zip.forEach(function (relativePath, zipEntry) {
          console.log(zipEntry)
          zip
          .file(zipEntry)
          .async('string')
          .then(function success(content) {
            const passData = JSON.parse(content);     
            console.log(passData)
          })
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
