import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import MyAwesomeReactComponent from './AppBar';
import TabsSwipeable from './Tabs';
import LoginForm from './login.js';
import Welcome from './loggedin.js';
import Button from 'muicss/lib/react/button';

class App extends Component {
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: null
    }
  }
  
  // App "actions" (functions that modify state)
  signIn(username, password) {
    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  signOut() {
    // clear out user from state
    this.setState({user: null})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
            <MuiThemeProvider>
              <TabsSwipeable />
            </MuiThemeProvider>
        </header>
        <div className="App-intro">
        { 
            (this.state.user) ? 
              <Welcome 
               user={this.state.user} 
               onSignOut={this.signOut.bind(this)} 
              />
            :
              <LoginForm 
               onSignIn={this.signIn.bind(this)} 
              />
          }
        </div>
      </div>
    );
  }
}

export default App;
