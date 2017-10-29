import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
//import MyAwesomeReactComponent from './AppBar';
import TabsSwipeable from "./Tabs";
import LoginForm from "./login.js";
import Welcome from "./loggedin.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  signIn(username, password) {
    this.setState({
      user: {
        username,
        password
      }
    });
  }

  signOut() {
    this.setState({ user: null });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MuiThemeProvider>
            <TabsSwipeable />
          </MuiThemeProvider>
        </header>
        <div>
          {this.state.user ? (
            <Welcome
              user={this.state.user}
              onSignOut={this.signOut.bind(this)}
            />
          ) : (
            <LoginForm onSignIn={this.signIn.bind(this)} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
