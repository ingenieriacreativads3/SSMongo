import React from 'react';
import Register from '../components/Register';
import { connect } from 'react-redux'

import * as RegisterAction from '../store/actions/RegisterAction'
import * as SolicitudAction from '../store/actions/SolicitudDeValidacion'

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

    this.props.dispatch(RegisterAction.register(empresa));
    this.props.dispatch(SolicitudAction.getAllSolicitudDeValidacion());

  }

  render(){
    return (

      <Register 
        onSubmit={ this.onSubmit }
        redirect="/ingresar">
      </Register>
    )
  }
}

export default connect(mapStateToProps)(SignUp);