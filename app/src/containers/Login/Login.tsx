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

  componentWillMount() {
    // this.props.dispatch(itemActions.cargaElastic())
  }

  componentDidUpdate() {

    if(this.props.login.fetched) {
      if(this.props.login.status !== 200) {
        this.props.dispatch(dialogAction.openOneButton())
       
      } else {
       
        this.props.dispatch(dialogAction.closeOneButton())
        this.props.dispatch(loginAction.loguear(this.props.cookies, this.props.login.data.empresa._id, this.props.login.data.empresa.nombre))


        this.props.history.push('/home/inicio');
      }
    } else {
      this.props.dispatch(dialogAction.closeOneButton())
    }

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

    this.props.dispatch(loginAction.ingresar(this.state.user, this.state.pass))

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
        <LoginComponent 
          getPass={ this.getPass }
          getUser={ this.getUser }
          login={ this.login }
          errors={ errores }
          myRef={ this.myRef }
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