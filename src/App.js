import React from 'react';
import {Switch, Route} from 'react-router-dom';
import List from './components/List';
import Detail from './components/Detail';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = "/" component = {List} />
          <Route  path = "/detail" component = {Detail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
