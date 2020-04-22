import React from 'react';
import logo from './logo.svg';
import './App.css';
import SolicitudDeValidacion from './containers/SolicitudDeValidacion';
import ValidarSolicitudDeValidacion from './containers/ValidarSolicitudDeValidacion';
import SolicitudUnidadMedida from './containers/Unidad de Medida/Solicitudes';
import ValidarSolicitudUnidadMedida from './containers/Unidad de Medida/ValidarSolicitud';
import axios from 'axios';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignUp from './containers/SignUp';
import SignIn from './containers/SignIn';
import ItemNuevo from './containers/Item/Nuevo';
import EditarItem from './containers/Item/Editar';
import PresupuestoNuevo from './containers/Presupuesto/Nuevo';
import HomeAdmin from './containers/Home/Admin';
import PresupuestoLista from './containers/Presupuesto/Lista';
import HomeInicio from './containers/Home/Inicio';
import HomeDetalles from './containers/Home/Detalles';
import PerfilProveedor from './containers/Home/PerfilProveedor';
import PedidoNuevo from './containers/Pedido/Nuevo';
import UnidadMedida from './containers/Unidad de Medida/NuevaUnidad';
import ListaComprasPedidos from './containers/Pedido/ListaCompras';
import ListaVentasPedidos from './containers/Pedido/ListaVentas';
import ListaComprasPresupuestos from './containers/Presupuesto/ListaCompras';
import ListaVentasPresupuestos from './containers/Presupuesto/ListaVentas';
import NoTocar from './containers/NoTocar/NoTocar';
import AppBar from './components/AppBar'
import EvaluacionEmpresa from './containers/Evaluacion/Empresa';
import EvaluacionSuppliers from './containers/Evaluacion/SuppliersStore';




import * as PresupuestoAction from './store/actions/PresupuestoAction'
import * as SolicitudDeValidacionAction from './store/actions/SolicitudDeValidacionAction'

import { connect } from 'react-redux'
//import DetallesProducto from './containers/DetallesProducto';

function mapStateToProps(store) {
	return {
		SolicitudDeValidacion: store.SolicitudesDeValidacion.data.solicitudesDeValidacion,
	};
}

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	async componentDidMount() {

		await this.props.dispatch(SolicitudDeValidacionAction.getAll())
		
	}

	render() {

		var baseURL = 'http://localhost:3011';
		var solicitudDevalidacionPath = '/solicituddevalidacion';
		var solicitudUnidadMedidaPath = '/solicitud/unidadMedida';

		return (
			<Router>
				<div>
					<Switch>
						<Route path="/solicituddevalidacion/:id" component={ ValidarSolicitudDeValidacion } />
						<Route path="/solicituddevalidacion">
							<SolicitudDeValidacion
								path={ solicitudDevalidacionPath }
								url={ baseURL }
								SolicitudDeValidacion={ this.props.SolicitudDeValidacion }/>
						</Route>
						<Route path="/solicitud/unidadMedida/:id" component={ ValidarSolicitudUnidadMedida } />
						<Route path="/solicitud/unidadMedida">
							<SolicitudUnidadMedida
								path={ solicitudUnidadMedidaPath }
								url={ baseURL }
								SolicitudUnidadMedida={ this.props.SolicitudUnidadMedida }/>
						</Route>
						<Route path="/registrar" component={ SignUp } />
						<Route path="/ingresar" component={ SignIn } />
						<Route path="/item/nuevo" component={ ItemNuevo } />
						<Route path="/item/editar" component={ EditarItem } />
						<Route path="/presupuesto/nuevo" component={ PresupuestoNuevo } />
						<Route path="/presupuestos">
							<PresupuestoLista
								path={ solicitudDevalidacionPath }
								url={ baseURL } />
						</Route>
						
						<Route path="/pedido/nuevo" component={ PedidoNuevo } />
						<Route path="/home/admin" component={ HomeAdmin } />
						<Route path="/home/inicio" component={ HomeInicio } />
						<Route path="/home/detalles" component={ HomeDetalles } />
						<Route path="/home/perfil" component={ PerfilProveedor } />
						<Route path="/unidadMedida/nuevo" component={ UnidadMedida } />
						<Route path="/compras/pedidos" component={ ListaComprasPedidos } />
						<Route path="/ventas/pedidos" component={ ListaVentasPedidos } />
						<Route path="/compras/presupuestos" component={ ListaComprasPresupuestos } />
						<Route path="/ventas/presupuestos" component={ ListaVentasPresupuestos } />
						<Route path="/home/probando" component={ NoTocar } />
						<Route path="/home/side" component={ AppBar } />
						<Route path="/evaluacion/empresa" component={ EvaluacionEmpresa } />
						<Route path="/evaluacion/suppliersStore" component={ EvaluacionSuppliers } />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default connect(mapStateToProps)(App);