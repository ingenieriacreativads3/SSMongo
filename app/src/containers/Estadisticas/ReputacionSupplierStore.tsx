import React from 'react';
import { connect } from 'react-redux'

import { VerReputacionPlataforma as Reputacion } from './../../components/Estadisticas'
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'
import { AppBar } from './../AppBar'

import * as evaluacionActions from './../../store/actions/evaluacion'

function mapStateToProps(store: {
	login: any,
	evaluacionReducer: any,
}) {
	return {
		login: store.login,
		evaluacionReducer: store.evaluacionReducer,
	};
}

class OpinionUsuariosPlataforma extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

	// eslint-disable-next-line no-useless-constructor
	constructor(props: any) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.props.dispatch(evaluacionActions.getValoracionesPlataforma());
	}
	
	drawer() {
		return <Drawer { ...this.props } />
	}

	footer() {
		return <Footer { ...this.props } />
	}

	appBar() {
		return <AppBar { ...this.props } />
	}


	render(){

		let valoraciones: any = {}
		let opiniones: string[] = []

		if(
			this.props.evaluacionReducer.fetched &&
			!this.props.evaluacionReducer.fetching
		) {
			valoraciones = this.props?.evaluacionReducer?.data?.kpi || {}
			opiniones = this.props?.evaluacionReducer?.data?.opiniones || []
		}

		return(
			<div>
				<Reputacion
					{ ...this.props }
					drawer={ this.drawer() }
					footer={ this.footer() }
					appBar={ this.appBar() }
					valoraciones={ valoraciones }
					opiniones={ opiniones }
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(OpinionUsuariosPlataforma)