import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import AppBar from './components/AppBar'
import {NuevoItem} from './components/Item'
import {EditarItem} from './components/Item'
import {ComprasPedidos} from './components/Pedido'
import {VentasPedidos} from './components/Pedido'
import {NuevaUnidadMedida} from './components/UnidadMedida'
import {ValidarSolicitud} from './components/UnidadMedida'
import {SolicitudesUnidadMedida} from './components/UnidadMedida'
import {MostrarCatalogo} from './components/Item'
import {IniciarSesion} from './components/Login'
import {Registrar} from './components/Register'

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
						<Route path="/compras/pedidos/lista" component={ ComprasPedidos } />
						<Route path="/ventas/pedidos/lista" component={ VentasPedidos } />
						<Route path="/unidadMedida/nuevo" component={ NuevaUnidadMedida } />
						<Route path="/solicitud/unidadMedida/:id" component={ValidarSolicitud}></Route>
						<Route path="/solicitud/unidadMedida" component={SolicitudesUnidadMedida}></Route>
						<Route path="/home/catalogo" component={MostrarCatalogo}></Route>
						<Route path="/ingresar" component={IniciarSesion}></Route>
						<Route path="/registrar" component={Registrar}></Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default connect(mapStateToProps)(App);