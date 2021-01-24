import React from 'react';
import { connect } from 'react-redux'
import { PerfilEmpresa as EmpresaPerfil} from './../../components/Perfil'
import { Footer } from './../Footer'
import { InicioDrawer } from './../DrawerInicio'
import { AppBar } from './../AppBar'
import { OneButton } from './../../components/Dialogs'

import * as dialogActions from './../../store/actions/dialog'
import * as empresaActions from './../../store/actions/empresa'

function mapStateToProps(store: {
	login: any
	mensajeReducer: any,	
}) {
	return {
		mensajeReducer: store.mensajeReducer,
		login: store.login
	};
}

class Empresa extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

	// eslint-disable-next-line no-useless-constructor
	constructor(props: any) {
		super(props);
		this.state = {};
	}

	componentDidUpdate() {
		
		if(this.props.mensajeReducer.fetched) {
			this.props.dispatch(dialogActions.openOneButton())
		} else {
			if(this.props.mensajeReducer.error !== null) {
				this.props.dispatch(dialogActions.openOneButton())
			} else {
				this.props.dispatch(dialogActions.closeOneButton())
			}
		}

	}

	footer() {
		return <Footer { ...this.props } />
	}

	drawer() {
		return <InicioDrawer { ...this.props } />
	}

	appBar() {
		return <AppBar { ...this.props } />
	}

	aceptar = () => {

		this.props.dispatch(dialogActions.closeOneButton())
		this.props.dispatch(empresaActions.reintentarMensaje())

	}

	render(){

		return(
			<div>
				<EmpresaPerfil
					footer={ this.footer() }
					drawer={ this.drawer() }
					appBar={ this.appBar() }
					{ ...this.props }
				 />
				 <OneButton 
					title={ 'Servicio de mensajería' }
					text={ this.props?.mensajeReducer?.message || '' }
					functionRight={ this.aceptar }
					labelButtonRight={ 'Aceptar' }
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Empresa)