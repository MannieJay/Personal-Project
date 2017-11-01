import React from "react";
import Button from "muicss/lib/react/button";
import "./login.css";

export default class LoginForm extends React.Component {
  // Using a class based component here because we're accessing DOM refs

  handleSignIn(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.props.onSignIn(username, password);
  }

  render() {
    return (
      <div className="Login">
        <form className="Login-form" onSubmit={this.handleSignIn.bind(this)}>
          <h3>Sign in</h3>
          <input type="text" ref="username" placeholder="username.." />
          <br />
          <input type="password" ref="password" placeholder="password.." />
          <br />
          <Button type="submit" variant="raised" color="primary">
            Login
          </Button>
        </form>
      </div>
    );
  }
}
