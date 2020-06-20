import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from 'universal-cookie';

import AppBar from './components/AppBar'
import { ItemNuevo } from './containers/Item'
import { EditarItem } from './components/Item'
import { NuevaUnidadMedida } from './components/UnidadMedida'
import { ValidarSolicitud } from './components/UnidadMedida'
import { SolicitudesUnidadMedida } from './components/UnidadMedida'
import { Catalogo } from './containers/Item'
 import { VerDetalleItem } from './components/Item'
//import { ItemDetalle } from './containers/Item'
import { NuevoPedido } from './components/Pedido'
import { NuevoPresupuesto } from './components/Presupuesto'
import { EvaluarEmpresa } from './components/Evaluacion'
import { EvaluarPlataforma } from './components/Evaluacion'
import { SolicitudDeValidacion } from './containers/ValidationRequest'
import { PerfilPropio } from './components/Perfil'
import { Footer } from './components/Footer'
import { Presupuestar } from './components/Presupuesto'
import { Inicio } from './containers/Home'
import { VerDetallePresupuesto } from './components/Presupuesto'
import { Login } from './containers/Login'
import Register from './containers/Register'
import { SolicitudesValidacion } from './containers/ValidationRequest'
import { PurchaseRequests, DetailPurchaseRequest }  from './containers/Compras/Pedido'
import { SaleRequests, DetailSaleRequest } from './containers/Ventas - Pedido'
import { PurchasePresupuestos, DetailPurchasePresupuesto } from './containers/Compras - Presupuesto'
import { SalePresupuestos, DetailSalePresupuesto } from './containers/Ventas - Presupuesto'
import { Renegociar } from './components/Presupuesto'
import { VerEstadisticaActividad } from './components/Estadisticas'
import { VerReputacion } from './components/Estadisticas'
import Item from './entities/Item';

class App extends React.Component {

	constructor(props: any) {
		super(props)
	}

	render() {

		const cookies = new Cookies();

		return (
			<Router>
				<div>
					<Switch>
						<Route path='/home/inicio'                    render={(props) => <Inicio {...props} cookies={cookies} />} />						
						<Route path='/home/side'                      component={ AppBar } />
						<Route path='/item/nuevo'                     render={(props) => <ItemNuevo {...props} cookies={cookies} />} /> 
						<Route path='/item/editar'                    component={ EditarItem } />
						<Route path='/compras/pedidos/lista'          render={(props) => <PurchaseRequests {...props} cookies={cookies} />} />
						<Route path='/ventas/pedidos/lista'           render={(props) => <SaleRequests {...props} />} /> 
						<Route path='/unidadMedida/nuevo'             component={ NuevaUnidadMedida } />
						<Route path='/solicitud/unidadMedida/:id'     component={ ValidarSolicitud } />
						<Route path='/solicitud/unidadMedida'         component={ SolicitudesUnidadMedida } />
						<Route path='/home/catalogo'                  render={(props) => <Catalogo { ...props } cookies={cookies} />} /> 
						<Route path='/registrar' 											component={ Register } />
						{/* <Route path='/asd' 												    component={ asd } /> */}
						<Route path='/item/detalle/:id'               component={ VerDetalleItem } />
						{/* <Route path='/item/detallle/:id'     render={(props) => <ItemDetalle {...props} />} /> */}
						<Route path='/pedido/nuevo'                   component={ NuevoPedido } />
						<Route path='/presupuesto/nuevo'              component={ NuevoPresupuesto } />
						<Route path='/compras/presupuestos/lista'     render={(props) => <PurchasePresupuestos {...props} />} /> 
						<Route path='/ventas/presupuestos/lista'      render={(props) => <SalePresupuestos {...props} />} /> 
						<Route path='/evaluacion/empresa'             component={ EvaluarEmpresa } />
						<Route path='/evaluacion/suppliersStore'      component={ EvaluarPlataforma } />
						{/* <Route path='/solicitud/validacion'           component={ ValidationRequest } /> */}
						<Route path='/solicitud/validacion'           render={(props) => <SolicitudesValidacion {...props}/>} />
						<Route path='/renegociacion/:id'              component={ Renegociar } />

						{/* <Route path='/solicitud/nuevoUsuario/:id'   component={ ValidarNuevoUsuario } /> */}
						<Route path='/solicitud/nuevoUsuario/:id'     render={(props) => <SolicitudDeValidacion {...props}/>}/>
						<Route path='/home/perfil'                    component={ PerfilPropio } />
						<Route path='/footer'                         component={ Footer } />
						<Route path='/presupuestacion/:id'            component={ Presupuestar } />

						{/* <Route path='/pedido/:id' render={(props) => <VerDetallePedido {...props}/>}/> */}
						<Route path='/compras/pedido/:id'             render={(props) => <DetailPurchaseRequest {...props}/>}/>
						<Route path='/compras/presupuesto/:id'        component={ DetailPurchasePresupuesto }/>
						<Route path='/ventas/pedido/:id'              component={ DetailSaleRequest }/>
						<Route path='/ventas/presupuesto/:id'         component={ DetailSalePresupuesto }/>
						<Route path='/home/resumen'                   component={ VerEstadisticaActividad } />
						<Route path='/home/reputacion'                component={ VerReputacion } />
						
						<Route path='/'                               render={(props) => <Login { ...props } cookies={cookies} />} /> 
					
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App