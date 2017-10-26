import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import MyAwesomeReactComponent from './AppBar';
import TabsExampleSwipeable from './Tabs'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <MuiThemeProvider>
              <TabsExampleSwipeable />
            </MuiThemeProvider>
            
          </div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
