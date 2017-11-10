import React, { Component } from "react";

class WelcomePage extends Component {
  render() {
    let userName = "amitai";
    return (
      <div>
        <h1>
          Welcome, {userName}, today is {new Date().toDateString()}
        </h1>
      </div>
    );
  }
}

export default WelcomePage;
