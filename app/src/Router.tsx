import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import AppBar from './components/AppBar'
import {NuevoItem} from './components/Item'
import {EditarItem} from './components/Item'
import PedidoLista from './components/Pedido'

function mapStateToProps(store: {
	solicitudDeValidacion: {
		data: {
			solicitudesDeValidacion: []
		}
	}
}) {
	return {
		SolicitudDeValidacion: store.solicitudDeValidacion.data.solicitudesDeValidacion,
	};
}

class App extends React.Component {

	constructor(props: any) {
		super(props)
	}

	render() {

		return (
			<Router>
				<div>
					<Switch>
						<Route path="/home/side" component={ AppBar } />
						<Route path="/item/nuevo" component={ NuevoItem } />
						<Route path="/item/editar" component={ EditarItem } />
						<Route path="/pedido/lista" component={ PedidoLista } />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default connect(mapStateToProps)(App);