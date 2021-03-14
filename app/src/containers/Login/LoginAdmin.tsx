import React from 'react';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux'

import * as loginAction from './../../store/actions/login'
import * as dialogAction from './../../store/actions/dialog'

import { OneButton } from './../../components/Dialogs'
import { IniciarSesion as LoginComponent } from './../../components/Login'


function mapStateToProps(store: {
  login: any,
  errorReducer:any,
}) {
  return {
    loginReducer: store.login,
    errorReducer: store.errorReducer
  };
}

class LoginAdmin extends React.Component<{}, {
  user: string,
  pass: string,
  formValid:boolean,
}> {

	props: any
	static propTypes: any
  static defaultProps: any
  
  private myRef: React.RefObject<HTMLElement>;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      user: '',
      pass: '',
      formValid: true,
    };
  }

  componentDidUpdate() {

    // if(this.props.loginReducer.fetched) {
    //   if(this.props.loginReducer.status !== 200) {
    //     this.props.dispatch(dialogAction.openOneButton())
       
    //   } else {
       
    //     this.props.dispatch(dialogAction.closeOneButton())
    //     this.props.dispatch(loginAction.loguearAdmin(this.props.cookies, this.state.user))
    //     this.props.history.push('/home/reputacionPlataforma');
    //   }
    // } else {
    //   this.props.dispatch(dialogAction.closeOneButton())
    // }

  }

  getUser = (e: any) => {
    this.setState({
      user: e.target.value
    })
  }

  getPass = (e: any) => {
    this.setState({
      pass: e.target.value
    })
  }

  login = () => {

    this.props.dispatch(dialogAction.openOneButton())
    this.props.dispatch(loginAction.ingresarAdmin(this.state.user, this.state.pass))

  }

  aceptar = () => {

    this.props.dispatch(dialogAction.closeOneButton())
    if(
      this.props.loginReducer.data.logged !== undefined &&
      this.props.loginReducer.data.logged
    ) {
      this.props.history.push('/home/reputacionPlataforma')
    } else {
      this.props.dispatch(loginAction.reintentar())
    }

  }

  render(){

    let errores: any[] = []
    errores = this.props.errorReducer.errors;
    return(
      <div>
        <LoginComponent 
          getPass={ this.getPass }
          getUser={ this.getUser }
          login={ this.login }
          errors={ errores }
          myRef={ this.myRef }
        />
        <OneButton 
          title={ 'Ingreso' }
          text={ this.props.loginReducer.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(LoginAdmin)