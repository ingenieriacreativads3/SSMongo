import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AppBar from './components/AppBar'
import { NuevoItem } from './components/Item'
import { EditarItem } from './components/Item'
import { NuevaUnidadMedida } from './components/UnidadMedida'
import { ValidarSolicitud } from './components/UnidadMedida'
import { SolicitudesUnidadMedida } from './components/UnidadMedida'
import { MostrarCatalogo } from './components/Item'
import asd from './containers/home/'
import { VerDetalleItem } from './components/Item'
import { NuevoPedido } from './components/Pedido'
import { NuevoPresupuesto } from './components/Presupuesto'
import { EvaluarEmpresa } from './components/Evaluacion'
import { EvaluarPlataforma } from './components/Evaluacion'
import { ValidarNuevoUsuario } from './components/SolicitudValidacion'
import { PerfilPropio } from './components/Perfil'
import { Footer } from './components/Footer'
import { Presupuestar } from './components/Presupuesto'
import { PantallaInicio } from './components/Home'
import { VerDetallePresupuesto } from './components/Presupuesto'
import Login from './containers/Login'
import Register from './containers/Register'
import ValidationRequest from './containers/ValidationRequest'
import { PurchaseRequests, DetailPurchaseRequest }  from './containers/Compras/Pedido'
import { SaleRequests, DetailSaleRequest } from './containers/Ventas - Pedido'
import { PurchasePresupuestos, DetailPurchasePresupuesto } from './containers/Compras - Presupuesto'
import { SalePresupuestos, DetailSalePresupuesto } from './containers/Ventas - Presupuesto'
import { Renegociar } from './components/Presupuesto'

class App extends React.Component {

	constructor(props: any) {
		super(props)
	}

	render() {

		return (
			<Router>
				<div>
					<Switch>
						<Route path="/home/side"                      component={ AppBar } />
						<Route path="/item/nuevo"                     component={ NuevoItem } />
						<Route path="/item/editar"                    component={ EditarItem } />
						<Route path="/compras/pedidos/lista"          component={ PurchaseRequests } />
						<Route path="/ventas/pedidos/lista"           component={ SaleRequests } />
						<Route path="/unidadMedida/nuevo"             component={ NuevaUnidadMedida } />
						<Route path="/solicitud/unidadMedida/:id"     component={ ValidarSolicitud }></Route>
						<Route path="/solicitud/unidadMedida"         component={ SolicitudesUnidadMedida }></Route>
						<Route path="/home/catalogo"                  component={ MostrarCatalogo }></Route>
						<Route path="/ingresar" 											component={ Login }></Route>
						<Route path="/registrar" 											component={ Register }></Route>
						<Route path="/asd" 												    component={ asd }></Route>
						<Route path="/item/detalle/:id"               component={ VerDetalleItem }></Route>
						<Route path="/pedido/nuevo"                   component={ NuevoPedido } />
						<Route path="/presupuesto/nuevo"              component={ NuevoPresupuesto } />
						<Route path="/compras/presupuestos/lista"     component={ PurchasePresupuestos } />
						<Route path="/ventas/presupuestos/lista"      component={ SalePresupuestos } />
						<Route path="/evaluacion/empresa"             component={ EvaluarEmpresa } />
						<Route path="/evaluacion/suppliersStore"      component={ EvaluarPlataforma }></Route>
						<Route path="/solicitud/validacion"           component={ ValidationRequest }></Route>
						<Route path="/renegociacion/:id"              component={ Renegociar }></Route>

						{/* <Route path='/solicitud/nuevoUsuario/:id'   component={ ValidarNuevoUsuario }></Route> */}
						<Route path='/solicitud/nuevoUsuario/:id' render={(props) => <ValidarNuevoUsuario {...props}/>}/>
						<Route path="/home/perfil"                    component={ PerfilPropio }></Route>
						<Route path="/footer"                         component={ Footer }></Route>
						<Route path="/presupuestacion/:id"            component={ Presupuestar }></Route>
						<Route path="/home/inicio"                    component={ PantallaInicio }></Route>
						{/* <Route path='/pedido/:id' render={(props) => <VerDetallePedido {...props}/>}/> */}
						<Route path='/compras/pedido/:id'                     component={ DetailPurchaseRequest }/>
						<Route path='/compras/presupuesto/:id'                     component={ DetailPurchasePresupuesto }/>
						<Route path='/ventas/pedido/:id'                     component={ DetailSaleRequest }/>
						<Route path='/ventas/presupuesto/:id'                     component={ DetailSalePresupuesto }/>
					
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App