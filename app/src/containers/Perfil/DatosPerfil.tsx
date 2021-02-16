import React from 'react';
import { connect } from 'react-redux'

import * as empresaActions from '../../store/actions/empresa'
import * as dialogActions from './../../store/actions/dialog'

import { PerfilPropio as Perfil} from './../../components/Perfil'
import { OneButton } from './../../components/Dialogs'
import { Footer } from './../Footer'
import { Drawer } from './../Drawer'
import { AppBar } from './../AppBar'

function mapStateToProps(store: {
	empresaReducer: any,
	fileReducer: any,
	login: any,
	errorReducer:any,
}) {
	return {
		empresaReducer: store.empresaReducer,
		fileReducer: store.fileReducer,
		login: store.login,
		errorReducer:store.errorReducer,
	};
}

class DatosPerfil extends React.Component<{}, {
	usuario: string,
	email: string,
	pass: string,
	domicilio: string,
	provincia: string,
	localidad: string,
	telefono: string
	photo: File[],
	formValid:boolean,
	localidadSeleccionada:boolean,
	provinciaSeleccionada:boolean,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	// eslint-disable-next-line no-useless-constructor
	constructor(props: any) {
		super(props);
		this.update = this.update.bind(this);
		this.state = {
			usuario: '',
			email: '',
			pass: '',
			domicilio: '',
			provincia: '',
			localidad: '',
			telefono: '',
			photo: [],
			localidadSeleccionada:true,
			provinciaSeleccionada:true,
			formValid:true,
		};
	}

	componentWillMount() {
		this.props.dispatch(dialogActions.closeOneButton())
	 
		this.props.dispatch(empresaActions.getEmpresa(this.props.match.params.id))

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

	// validacion=() => {
	//	 debugger;
	//	 let formIsValid = true;
	//	 let errores=[];
	//	 let elements:any = document.getElementById("miPerfilForm");

	//	 for (let i = 0, element; element = elements[i++];) {

	//			if(!element.checkValidity())
	//		 {

	//			 errores[element.id]=element.validationMessage;
	//			 errores.length = errores.length + 1;
	//			 formIsValid = false;
	//			 this.setState({formValid:formIsValid})
			
				
	//		 }
			
	//	 }

	//	 if(this.state.localidad == '')
	//	 {
	//		 this.setState({localidadSeleccionada:false})
	//		 this.setState({formValid:false})
	//	 }

	//	 if(this.state.provincia == '')
	//	 {
	//		 this.setState({provinciaSeleccionada:false})
	//		 this.setState({formValid:false})
	//	 }

		
	//		this.props.dispatch(errorActions.setError(errores)); 
	//		return formIsValid;
	// }


	update(
		id: string,
		nombre: string,
		usuario: string,
		email: string,
		logo: string,
		password: string,
		telefono: string,
		provincia: string,
		localidad: string,
		visible: boolean,
		domicilio: string,
	) {
		// if(this.validacion())
		this.props.dispatch(empresaActions.updateEmpresa(
			id,
			nombre,
			usuario,
			email,
			logo,
			password,
			telefono,
			provincia,
			localidad,
			visible,
			domicilio
		))
	}

	aceptar = () => {

		this.props.dispatch(dialogActions.closeOneButton())
		if(this.props.empresaReducer.status !== 200) {
			this.props.dispatch(empresaActions.reintentar())
		} else {
			this.props.dispatch(empresaActions.setear())
			this.props.history.push('/home/inicio')
		}
	}

	render(){

		let empresa: {
			"_id": string,
			"nombre": string,
			"cuit": string,
			"usuario": string,
			"email": string,
			"estado": string,
			"updated_at": string,
			"created_at": string,
			"domicilioLegal": string,
			"localidad": string,
			"logo": string,
			"mostrar_perfil": boolean,
			"provincia": string,
			"telefono": string,
			"clave": string,
		} = {
			"_id": '',
			"nombre": '',
			"cuit": '',
			"usuario": '',
			"email": '',
			"estado": '',
			"updated_at": '',
			"created_at": '',
			"domicilioLegal": '',
			"localidad": '',
			"logo": '',
			"mostrar_perfil": false,
			"provincia": '',
			"telefono": '',
			"clave": ''
		}

		if(this.props.empresaReducer !== undefined) {
			if(this.props.empresaReducer.data !== undefined) {
				if(this.props.empresaReducer.data.empresa !== undefined) {
					empresa = { ...this.props.empresaReducer.data.empresa }
				}
			}
		}
		
		let errores: any[] = []
		errores = this.props.errorReducer.errors;

		return(
			<div>
				<Perfil 
					{ ...this.props }
					footer={ this.footer() }
					drawer={ this.drawer() }
					appBar={ this.appBar() }
					empresa={ empresa }
				/>
				<OneButton 
					title={ 'Editar Perfil' }
					text={ this.props.empresaReducer.message }
					functionRight={ this.aceptar }
					labelButtonRight={ 'Aceptar' }
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(DatosPerfil)