import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cookies from 'universal-cookie';

import AppBar from './components/AppBar'
import { ItemNuevo } from './containers/Item'
import { EditarItem } from './components/Item'
import { ItemEditar } from './containers/Item'
//import { NuevaUnidadMedida } from './components/UnidadMedida'
//import { ValidarSolicitud } from './components/UnidadMedida'
//import { SolicitudesUnidadMedida } from './components/UnidadMedida'
import { Catalogo } from './containers/Item'
import { VerDetalleItem } from './components/Item'
import { ItemDetalle } from './containers/Item'
import { PedidoNuevo } from './containers/Compras/Pedido'
import { PresupuestoNuevo } from './containers/Compras - Presupuesto'
import { SolicitudDeValidacion } from './containers/ValidationRequest'
import { MiPerfil } from './containers/Perfil'
import { Footer } from './components/Footer'
import { Presupuestar } from './components/Presupuesto'
import { Presupuestacion } from './containers/Ventas - Presupuesto'
import { Renegociacion } from './containers/Ventas - Presupuesto'
import { Inicio, Busqueda } from './containers/Home'
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
import { ResumenActividad, Reputacion} from './containers/Estadisticas'
import { VerReputacion } from './components/Estadisticas'
import Item from './entities/Item';
import { EvaluacionEmpresa, EvaluacionPlataforma } from './containers/Evaluacion'
import { EmpresaPerfil } from './containers/Perfil'
import { SolicitudesUnidadMedida, SolicitudDeUnidadDeMedida, NuevaUnidadMedida } from './containers/UnidadMedida'

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
						<Route path='/home/busqueda/:id'              render={(props) => <Busqueda {...props} cookies={cookies} />} />								
						<Route path='/home/side'                      component={ AppBar } />
						<Route path='/home/perfil/:id'         		    render={(props) => <EmpresaPerfil {...props} cookies={cookies}/>} />
						<Route path='/item/nuevo'                     render={(props) => <ItemNuevo {...props} cookies={cookies} />} /> 
						<Route path='/item/editar/:id'                render={(props) => <ItemEditar {...props} cookies={cookies} />} />
						<Route path='/compras/pedidos/lista'          render={(props) => <PurchaseRequests {...props} cookies={cookies} />} />
						<Route path='/ventas/pedidos/lista'           render={(props) => <SaleRequests {...props} />} /> 
						<Route path='/unidadMedida/nuevo'            render={(props) => <NuevaUnidadMedida {...props} cookies={cookies} />}/>
						<Route path='/solicitud/unidadMedida/:id'     render={(props) => <SolicitudDeUnidadDeMedida {...props}  />}  />
					    {/* <Route path='/solicitud/unidadMedida'         component={ SolicitudesUnidadMedida } />  */}
						<Route path='/solicitud/unidadMedida'          render={(props) => <SolicitudesUnidadMedida {...props}  />}  />
						<Route path='/home/catalogo'                  render={(props) => <Catalogo { ...props } cookies={cookies} />} /> 
						<Route path='/registrar' 					            component={ Register } />
					  <Route path='/item/detalle/:id'     		      render={(props) => <ItemDetalle {...props} />} /> 
						<Route path='/pedido/nuevo'                   render={(props) => <PedidoNuevo { ...props } cookies={cookies} />} />
						<Route path='/presupuesto/nuevo'              render={(props) => <PresupuestoNuevo { ...props } cookies={cookies} />} />
						<Route path='/compras/presupuestos/lista'     render={(props) => <PurchasePresupuestos {...props} cookies={cookies} />} /> 
						<Route path='/ventas/presupuestos/lista'      render={(props) => <SalePresupuestos {...props} cookies={cookies} />} /> 
						<Route path='/evaluacion/empresa'             render={(props) => <EvaluacionEmpresa {...props} cookies={cookies} />} /> 
						<Route path='/evaluacion/suppliersStore'      render={(props) => <EvaluacionPlataforma {...props} cookies={cookies} />} /> 
						<Route path='/solicitud/validacion'           render={(props) => <SolicitudesValidacion {...props}/>} />
						<Route path='/renegociacion/:id'              render={(props) => <Renegociacion {...props} />} /> 
						<Route path='/solicitud/nuevoUsuario/:id'     render={(props) => <SolicitudDeValidacion {...props}/>}/>
						<Route path='/home/perfil'                    render={(props) => <MiPerfil {...props} cookies={cookies} />} />
						<Route path='/presupuestacion/:id'            render={(props) => <Presupuestacion {...props} cookies={cookies}/>}/>
						<Route path='/compras/pedido/:id'             render={(props) => <DetailPurchaseRequest {...props}/>}/>
						<Route path='/compras/presupuesto/:id'        render={(props) => <DetailPurchasePresupuesto {...props}/>}/>
						<Route path='/ventas/pedido/:id'              render={(props) => <DetailSaleRequest {...props}/>}/>
						<Route path='/ventas/presupuesto/:id'         render={(props) => <DetailSalePresupuesto {...props} cookies={cookies} />}/>
						<Route path='/home/resumen'               render={(props) => <ResumenActividad {...props} cookies={cookies}/>}/>
						<Route path='/home/reputacion'                render={(props) => <Reputacion {...props} cookies={cookies}/>}/>
						<Route path='/'                               render={(props) => <Login { ...props } cookies={cookies} />} /> 
					
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App