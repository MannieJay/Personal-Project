import React from "react";
import LoginForm from "./login.js";
import Welcome from "./loggedin.js";

export default class LoginApp extends React.Component {
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
      <div>
        {this.state.user ? (
          <Welcome user={this.state.user} onSignOut={this.signOut.bind(this)} />
        ) : (
          <LoginForm onSignIn={this.signIn.bind(this)} />
        )}
      </div>
    );
  }
}
