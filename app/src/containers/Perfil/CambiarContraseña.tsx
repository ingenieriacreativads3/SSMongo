import React from 'react';
import { connect } from 'react-redux'
import * as empresaActions from '../../store/actions/empresa'
import * as dialogActions from './../../store/actions/dialog'
import * as errorActions from './../../store/actions/error'
import { OneButton } from './../../components/Dialogs'
import { Footer } from './../Footer'
import { Drawer } from './../Drawer'
import { AppBar } from './../AppBar'
import { CambiarContraseña as ChangePassword} from './../../components/Perfil'

function mapStateToProps(store: {
	empresaReducer: any,
	login: any,
	errorReducer: any,
}) {
	return {
		empresaReducer: store.empresaReducer,
		login: store.login,
		errorReducer: store.errorReducer
	};
}

class CambiarContraseña extends React.Component<{}, {
	pass: string,
	formValid:boolean
}> {

	props: any
	static propTypes: any
	static defaultProps: any
	private changePasswordRef: React.RefObject<HTMLFormElement>;
	// eslint-disable-next-line no-useless-constructor
	constructor(props: any) {
		super(props);
		this.changePasswordRef = React.createRef();
		this.update = this.update.bind(this);
		this.aceptar = this.aceptar.bind(this);
		this.state = {
			pass: '',
			formValid:true,
		};
	}

	componentDidUpdate() {

		if(this.props.empresaReducer.fetched) {
			this.props.dispatch(dialogActions.openOneButton())
		} else {
			this.props.dispatch(dialogActions.closeOneButton())
		}

	}

	footer() {
		return <Footer { ...this.props } />
	}

	drawer() {
		return <Drawer { ...this.props } />
	}

	appBar() {
		return <AppBar { ...this.props } />
	}

	validacion=() => {
		let formIsValid = true;
		let errores=[];
		let ref: any = this.changePasswordRef.current
		
		console.log(ref);
		for (let i = 0, element; element = ref[i]; i++) {

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

	update(oldPassword: string, newPassword: string) {
		if(this.validacion()){
			 this.props.dispatch(empresaActions.changePassword(
			this.props.cookies.get('empresaId'),
			oldPassword,
			newPassword
		))
		}
	}

	aceptar() {

		this.props.dispatch(dialogActions.closeOneButton())
		if(this.props.empresaReducer.status !== 200) {
			this.props.dispatch(empresaActions.reintentar())
		} else {
			this.props.dispatch(empresaActions.setear())
			this.props.history.push('/home/inicio')
		}
	}

	render(){
		let errores: any[] = []
		errores = this.props.errorReducer.errors;
		return(
			<div>
				<ChangePassword
					{ ...this.props }
					footer={this.footer()}
					drawer={this.drawer()}
					appBar={this.appBar()}
					update={this.update}
					errores={errores}
					formValid={this.state.formValid}
					changePasswordRef={this.changePasswordRef}
				 />
				 <OneButton 
					title={ 'Cambiar Contraseña' }
					text={	this.props.empresaReducer.message	}
					functionRight={ this.aceptar }
					labelButtonRight={ 'Aceptar' }
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(CambiarContraseña)