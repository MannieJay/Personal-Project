import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import MyAwesomeReactComponent from './AppBar';
import TabsSwipeable from "./components/Tabs";
//import { createStore } from "redux";
import LoginApp from "./components/loginapp.js";

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MuiThemeProvider>
            <TabsSwipeable />
          </MuiThemeProvider>
        </header>
          <LoginApp />
      </div>
    );
  }
}

export default App;
