import React from 'react';
import Login from '../components/Login';

import { connect } from 'react-redux'
import * as LoginAction from '../store/actions/LoginAction'

function mapStateToProps(store) {
  return {
    Login: store.Login
  };
}

class SignIn extends React.Component {

  constructor(props, context) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(user, pass) {
    this.props.dispatch(LoginAction.login(user, pass));
  }

  render(){
      return (
      <Login
        onSubmit={ this.onSubmit }
        redirect="/home">
      </Login>
    )
  }
}

export default connect(mapStateToProps)(SignIn);
