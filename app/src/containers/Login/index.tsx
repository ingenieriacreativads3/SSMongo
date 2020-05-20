import React from 'react';
import * as loginAction from './../../store/actions/login'
import * as dialogAction from './../../store/actions/dialog'

//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'

import { OneButton } from './../../components/Dialogs'
import { IniciarSesion as LoginComponent } from './../../components/Login'

function mapStateToProps(store: {
  login: any,
}) {
  return {
    login: store.login,
  };
}

class Login extends React.Component<{}, {
  user: string,
  pass: string,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.login = this.login.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getPass = this.getPass.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
      user: '',
      pass: '',
    };
  }

  componentDidUpdate() {

    if(this.props.login.fetched) {
      if(this.props.login.status !== 200) {
        this.props.dispatch(dialogAction.openOneButton())
      } else {
        this.props.dispatch(dialogAction.closeOneButton())
      }
    } else {
      this.props.dispatch(dialogAction.closeOneButton())
    }

  }

  getUser(e: any) {

    this.setState({
      user: e.target.value
    })

  }

  getPass(e: any) {

    this.setState({
      pass: e.target.value
    })

  }

  login() {

    this.props.dispatch(loginAction.ingresar(this.state.user, this.state.pass))

  }

  aceptar() {

    this.props.dispatch(dialogAction.closeOneButton())
    this.props.dispatch(loginAction.reintentar())

  }

  render(){

    return(
      <div>
        <LoginComponent getPass={ this.getPass } getUser={ this.getUser } login={ this.login }/>
        <OneButton 
          title={'Error de ingreso'}
          text={this.props.login.message}
          functionRight={this.aceptar}
          labelButtonRight={'Aceptar'}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login)