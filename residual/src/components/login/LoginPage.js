import React, { Component } from "react";
import LoginHeader from "./loginHeader";
import LoginForm from "./loginForm";

class LoginPage extends Component {
  render() {
    return (
      <div>
        <LoginHeader />
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
