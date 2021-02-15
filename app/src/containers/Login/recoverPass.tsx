import React from 'react';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux'

import * as loginAction from './../../store/actions/login'
import * as dialogAction from './../../store/actions/dialog'
import * as errorActions from './../../store/actions/error'
import * as itemActions from './../../store/actions/item'

import { OneButton } from './../../components/Dialogs'
import { RecoverPassword as RecoverComponent } from './../../components/Login'


function mapStateToProps(store: {
  login: any,
  errorReducer:any,
}) {
  return {
    login: store.login,
    errorReducer: store.errorReducer
  };
}

class RecoverPassword extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
  email: string,
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
      email: '',
      formValid: true,
    };
  }

 
  componentDidUpdate() {

    if(this.props.login.fetched) {
      if(this.props.login.status !== 200) {
        this.props.dispatch(dialogAction.openOneButton())
       
      } else {
       
        this.props.dispatch(dialogAction.closeOneButton())
        


        //this.props.history.push('/resetPassword');
      }
    } else {
      this.props.dispatch(dialogAction.closeOneButton())
    }

  }

  getEmail = (e: any) => {
    this.setState({
      email: e.target.value
    })
  }

  
  recover = () => {

   //this.props.dispatch(loginAction.recoverPass(this.state.email))
    this.props.history.push('/resetPassword');

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
        <RecoverComponent 
          getEmail={ this.getEmail }
          recover={ this.recover }
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

export default connect(mapStateToProps)(RecoverPassword)