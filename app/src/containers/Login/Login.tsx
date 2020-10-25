import React from 'react';
import * as loginAction from './../../store/actions/login'
import * as dialogAction from './../../store/actions/dialog'

//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'

import { OneButton } from './../../components/Dialogs'
import { IniciarSesion as LoginComponent } from './../../components/Login'
import Cookies from 'universal-cookie';


import * as errorActions from './../../store/actions/error'
import store from './../../store/index'

function mapStateToProps(store: {
  login: any,
  errorReducer:any,
}) {
  return {
    login: store.login,
    errorReducer: store.errorReducer
  };
}

class Login extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
  user: string,
  pass: string,
  formValid:boolean,
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
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {
      user: '',
      pass: '',
      formValid:true,
    };
  }

  componentDidUpdate() {

    if(this.props.login.fetched) {
      if(this.props.login.status !== 200) {
        this.props.dispatch(dialogAction.openOneButton())
      } else {
        this.props.dispatch(dialogAction.closeOneButton())
        this.props.dispatch(loginAction.loguear(this.props.cookies, this.props.login.data.empresa._id))


        this.props.history.push('/home/inicio');
      }
    } else {
      // this.props.dispatch(dialogAction.closeOneButton())
    }

  }

  getUser(e: any) {
    let state = store.getState();
    this.setState({
      user: e.target.value
    })
    this.props.dispatch(errorActions.editErrors(e.target.id))
      if(state.errorReducer.errors.length === 0)
      {
        this.setState({formValid:true});
      }

  }

  getPass(e: any) {
    let state = store.getState();
    this.setState({
      pass: e.target.value
    })

    this.props.dispatch(errorActions.editErrors(e.target.id))
    if(state.errorReducer.errors.length === 0)
    {
      this.setState({formValid:true});
    }
  }

  validacion=() => {
    let formIsValid = true;
    let errores=[];
    let elements:any = document.getElementById("formLogin");

    for (let i = 0, element; element = elements[i++];) {

       if(!element.checkValidity())
      {

        errores[element.id]=element.validationMessage;
        errores.length = errores.length + 1;
        formIsValid = false;
        this.setState({formValid:formIsValid})
      
        
      }
      
    }

   
     this.props.dispatch(errorActions.setError(errores)); 
     return formIsValid;
  }

  login() {

    if(this.validacion()){
          this.props.dispatch(loginAction.ingresar(this.state.user, this.state.pass))

    }

  }

  aceptar() {

    this.props.dispatch(dialogAction.closeOneButton())
    this.props.dispatch(loginAction.reintentar())

  }

  handleKeyPress(key: string) {
    if(key === 'Enter'){
      this.props.dispatch(loginAction.ingresar(this.state.user, this.state.pass))
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
          handleKeyPress={ this.handleKeyPress }
          errors={errores}
        />
        <OneButton 
          title={ 'Error de ingreso' }
          text={ this.props.login.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Login)