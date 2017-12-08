import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "../../actions/loginActions";
import InputField from "../common/inputFields";
import SubmitButton from "../common/submitButton";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  

  onChangeUser = e => {
    this.setState({ ...this.state, username: e.target.value });
  };

  onChangePassword = e => {
    this.setState({ ...this.state, password: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    console.log('---state onSubmit---', this.props.actions);

    this.props.actions.login(this.state);
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.props.login.error === "" ? (
          ""
        ) : (
          <div className="alert alert-danger">{this.props.login.error}</div>
        )}
        <InputField name="email" onChange={this.onChangeUser} type="text" />
        <InputField name="password" onChange={this.onChangePassword} type="password" />
        <SubmitButton value="Login" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.login
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
