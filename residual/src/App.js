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
            <MuiThemeProvider>
              <TabsExampleSwipeable />
            </MuiThemeProvider>
        </header>
        <p className="App-intro">
        Swipe to see the next slide.
        </p>
      </div>
    );
  }
}

export default App;
