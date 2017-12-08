import React, { Component } from "react";
import { connect } from 'react-redux';

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

function mapStateToProps(state) {
  return {
      login: state.login
  }
}

export default connect(mapStateToProps)(WelcomePage);