import React from 'react';
import { Redirect } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import * as registerActions from './../../store/actions/register'
import * as dialogAction from './../../store/actions/dialog'

//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'

import { OneButton } from './../../components/Dialogs'
import { Registrar as RegisterComponent } from './../../components/Register'

function mapStateToProps(store: {
  registerReducer: any,
}) {
  return {
    register: store.registerReducer,
  };
}

class Register extends React.Component<{}, {
  fantasyName: string,
	CUIT: string,
	user: string,
	email: string,
	pass: string,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getFantasyName = this.getFantasyName.bind(this);
    this.getCUIT = this.getCUIT.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPass = this.getPass.bind(this);
    this.register = this.register.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = {
      fantasyName: '',
			CUIT: '',
			user: '',
			email: '',
			pass: '',
    };
  }

  componentDidUpdate() {

    if(this.props.register.fetched) {
      this.props.dispatch(dialogAction.openOneButton())
    } else {
      this.props.dispatch(dialogAction.closeOneButton())
    }

	}
	
	getFantasyName(e: any) {

		this.setState({
			fantasyName: e.target.value
		})

	}

	getCUIT(e: any) {

		this.setState({
			CUIT: e.target.value
		})

	}
	
	getUser(e: any) {

    this.setState({
      user: e.target.value
    })

	}
	
	getEmail(e: any) {

    this.setState({
      email: e.target.value
    })

  }

  getPass(e: any) {

    this.setState({
      pass: e.target.value
    })

  }

  register() {

    this.props.dispatch(registerActions.registrar(
			this.state.fantasyName,
			this.state.CUIT,
			this.state.user,
			this.state.email,
			this.state.pass
		))

  }

  aceptar() {

    this.props.dispatch(dialogAction.closeOneButton())
		this.props.dispatch(registerActions.reintentar())
		this.redirect()

	}
	
	redirect() {
		return <Link href="/ingresar" variant="body2" />
	}

  render(){

    return(
      <div>
        <RegisterComponent 
          getFantasyName={ this.getFantasyName }
					getCUIT={ this.getCUIT }
					getUser={ this.getUser }
					getEmail={ this.getEmail }
					getPass={ this.getPass }
					register={ this.register }
        />
        <OneButton 
          title={ '' }
          text={ this.props.register.message }
          functionRight={ this.aceptar }
          labelButtonRight={ 'Aceptar' }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Register)