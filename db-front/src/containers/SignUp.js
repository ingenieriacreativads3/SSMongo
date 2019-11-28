import React from 'react';
import Register from '../components/Register';
import { connect } from 'react-redux'

import * as RegisterAction from '../store/actions/RegisterAction'

function mapStateToProps(store) {
  return {
    Register: store.Register
  };
}

class SignUp extends React.Component {

  constructor(props, context) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(empresa) {

    console.log('empresa: ', empresa);
    

    this.props.dispatch(RegisterAction.register(empresa));

  }

  render(){
    return (

      <Register 
        onSubmit={this.onSubmit }
        redirect="/solicituddevalidacion">
      </Register>
    )
  }
}

export default connect(mapStateToProps)(SignUp);