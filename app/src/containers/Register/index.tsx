import React from 'react';

import * as registerActions from './../../store/actions/register'
import * as dialogAction from './../../store/actions/dialog'

import { connect } from 'react-redux'

import { OneButton } from './../../components/Dialogs'
import { Registrar as RegisterComponent } from './../../components/Register'

import * as errorActions from './../../store/actions/error'
import * as fileActions from './../../store/actions/file'
import store from './../../store/index'

function mapStateToProps(store: {
	registerReducer: any,
	errorReducer:any,
	fileReducer:any,
}) {
	return {
		fileReducer: store.fileReducer,
		errorReducer: store.errorReducer,
		register: store.registerReducer,
	};
}

class Register extends React.Component<{}, {
	fantasyName: string,
	CUIT: string,
	user: string,
	email: string,
	pass: string,
	formValid: boolean,
	file: File | null
}> {

	props: any
	static propTypes: any
	static defaultProps: any
	private registerRef: React.RefObject<HTMLFormElement>;
	// eslint-disable-next-line no-useless-constructor
	constructor(props: any) {
		super(props);
		this.registerRef = React.createRef();
		this.state = {
			fantasyName: '',
			CUIT: '',
			user: '',
			email: '',
			pass: '',
			formValid: true,
			file: null
		};
	}

	componentDidUpdate = () => {
		if(this.props.register.fetched) {
			this.props.dispatch(dialogAction.openOneButton())
		} else {
			this.props.dispatch(dialogAction.closeOneButton())
		}
	}
	
	getFantasyName = (e: any) => {
		let state = store.getState();
		this.setState({
			fantasyName: e.target.value
		})
		this.props.dispatch(errorActions.editErrors(e.target.id))
		if(state.errorReducer.errors.length === 0)
		{
			this.setState({formValid:true});
		}
	}

	getCUIT = (e: any) => {
		let state = store.getState();
		this.setState({
			CUIT: e.target.value
		})
		this.props.dispatch(errorActions.editErrors(e.target.id))
		if(state.errorReducer.errors.length === 0) {
			this.setState({formValid:true});
		}
	}
	
	getUser = (e: any) => {
		let state = store.getState();
		this.setState({
			user: e.target.value
		})
		this.props.dispatch(errorActions.editErrors(e.target.id))
		if(state.errorReducer.errors.length === 0) {
			this.setState({formValid:true});
		}

	}
	
	getEmail = (e: any) => {
		let state = store.getState();
		this.setState({
			email: e.target.value
		})
		this.props.dispatch(errorActions.editErrors(e.target.id))
		if(state.errorReducer.errors.length === 0) {
			this.setState({formValid:true});
		}
	}

	getPass = (e: any) => {
		let state = store.getState();
		this.setState({
			pass: e.target.value
		})
		this.props.dispatch(errorActions.editErrors(e.target.id))
		if(state.errorReducer.errors.length === 0) {
			this.setState({formValid:true});
		}
	}

	validacion = () => {
		let formIsValid = true;
		let errores=[];
		let ref: any = this.registerRef.current

		for (let i = 0, element; element = ref[i]; i++) {
			if(!element.checkValidity()) {
				errores[element.id]=element.validationMessage;
				errores.length = errores.length + 1;
				formIsValid = false;
				this.setState({formValid:formIsValid})
			}
		}
		
		this.props.dispatch(errorActions.setError(errores)); 
		return formIsValid;
	}

	register = () => {

		let contratoSocial: string = ''

		if(this.props.fileReducer.fetched) {
			contratoSocial = this.props.fileReducer.data
		}

		if(this.validacion()){
			this.props.dispatch(registerActions.registrar(
				this.state.fantasyName,
				this.state.CUIT,
				this.state.user,
				this.state.email,
				this.state.pass,
				contratoSocial
			))
		}
	}

	aceptar = () => {

		this.props.dispatch(dialogAction.closeOneButton())
		this.props.dispatch(registerActions.reintentar())
		if(
			this.props.register.fetched &&
			this.props.register.status === 200
		) {
			this.props.history.push('/')
		} 

	}

	getFile = (e: any) => {
		this.props.dispatch(fileActions.uploadContratoSocial(e.target.files[0]))
	}

	render(){
		let errores: any[] = []
		errores = this.props.errorReducer.errors;

		return(
			<div>
				<RegisterComponent 
					getFantasyName={ this.getFantasyName }
					getCUIT={ this.getCUIT }
					getUser={ this.getUser }
					getEmail={ this.getEmail }
					getPass={ this.getPass }
					register={ this.register }
					getFile={ this.getFile }
					errors={ errores }
					registerRef={ this.registerRef }
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