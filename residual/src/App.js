import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/routes/routes';
// import LoginPage from "./components/login/LoginPage";
// import WelcomePage from "./components/welcome/WelcomePage";
//import logo from './logo.svg';
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import MyAwesomeReactComponent from './AppBar';
import TabsSwipeable from "./components/Tabs";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MuiThemeProvider>
            <TabsSwipeable />
          </MuiThemeProvider>
        </header>  
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
