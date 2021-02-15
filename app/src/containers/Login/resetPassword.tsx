import React from 'react';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux'

import * as loginAction from './../../store/actions/login'
import * as dialogAction from './../../store/actions/dialog'
import * as errorActions from './../../store/actions/error'
import * as itemActions from './../../store/actions/item'

import { OneButton } from './../../components/Dialogs'
import { ResetPassword as ResetComponent } from './../../components/Login'


function mapStateToProps(store: {
  login: any,
  errorReducer:any,
}) {
  return {
    login: store.login,
    errorReducer: store.errorReducer
  };
}

class ResetPassword extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
  token: string,
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
      token: '',
      pass: '',
      formValid: true,
    };
  }

 
  componentDidUpdate() {

    if(this.props.login.fetched) {
      if(this.props.login.status !== 200) {
        this.props.dispatch(dialogAction.openOneButton())
       
      } else {
       
        this.props.dispatch(dialogAction.closeOneButton())
        


        this.props.history.push('/Login');
      }
    } else {
      this.props.dispatch(dialogAction.closeOneButton())
    }

  }

  getToken = (e: any) => {
    this.setState({
      token: e.target.value
    })
  }

  getPass = (e: any) => {
    this.setState({
      pass: e.target.value
    })
  }

  reset = () => {

   //this.props.dispatch(loginAction.resetPass(this.state.pass, this.state.token))
    this.props.history.push('/ingresar');

  }

  recoverPass = () =>{
   // this.props.dispatch(loginAction.recoverPass(this.state.pass))
  }

  aceptar = () => {

    this.props.dispatch(dialogAction.closeOneButton())
    this.props.dispatch(loginAction.reintentar())

  }



  render(){

    let errores: any[] = []
    errores = this.props.errorReducer.errors;
    return(
      <div>
        <ResetComponent 
          getPass={ this.getPass }
          getToken={ this.getToken }
          reset={ this.reset }
          errors={ errores }
          myRef={ this.myRef }
        />
        <OneButton 
          title={ 'Error de recupero de contraseña' }
          text={ this.props.login.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ResetPassword)