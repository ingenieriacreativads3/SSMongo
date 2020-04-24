import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import AppBar from './components/AppBar'
import ItemNuevo from './components/Item'
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
						<Route path="/item/nuevo" component={ ItemNuevo } />
						<Route path="/pedido/lista" component={ PedidoLista } />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default connect(mapStateToProps)(App);