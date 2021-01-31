import React from 'react';
import { connect } from 'react-redux'

import { EmpresasPorRubro as EmpresaList } from './../../components/Home'
import { InicioDrawer } from './../DrawerInicio'
import { Footer } from './../Footer'
import { AppBar } from './../AppBar'

import * as empresaActions from './../../store/actions/empresa'

function mapStateToProps(store: {
	requestReducer: any,
	empresaReducer: any,
}) {
	return {
		requestReducer: store.requestReducer,
		empresaReducer: store.empresaReducer,
	};
}

class Empresas extends React.Component<{}, {
	rubroSeleccionado: string
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	// eslint-disable-next-line no-useless-constructor
	constructor(props: any) {
		super(props);
		this.state = {
			rubroSeleccionado:'',
		};
	}

	componentWillMount = () => {
		this.props.dispatch(empresaActions.getByGrupo(this.props.match.params.grupo))
	}
	
	drawer() {
		return <InicioDrawer { ...this.props } />
	}

	footer() {
		return <Footer { ...this.props } />
	}

	appBar() {
		return <AppBar { ...this.props } />
	}

	render(){

		let empresas: any[] = []
		let data: any[] = this.props?.empresaReducer?.data?.empresas || []

		if(data !== undefined && Array.isArray(data) && data.length > 0) {
			empresas = data
		}

		return(
			<div>
				<EmpresaList	
					footer = { this.footer() }
					appBar = { this.appBar() }
					rubro = { this.props.match.params.grupo }
					empresas = { empresas }
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Empresas)