import React from "react";
import { Route } from "react-router";
//import logo from './logo.svg';
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import MyAwesomeReactComponent from './AppBar';
import TabsSwipeable from "./components/Tabs";

import LoginPage from "./components/login/LoginPage";
import WelcomePage from "./components/welcome/WelcomePage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MuiThemeProvider>
            <TabsSwipeable />
          </MuiThemeProvider>
        </header>
          <Route path="/" component={LoginPage} />
          <Route path="/welcome" component={WelcomePage} />
      </div>
    );
  }
}

export default App;
