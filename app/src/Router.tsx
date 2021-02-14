import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from 'universal-cookie';

import AppBar from './components/AppBar'
import { ItemNuevo } from './containers/Item'
import { ItemEditar } from './containers/Item'

import { Catalogo } from './containers/Item'
import { ItemDetalle } from './containers/Item'
import { PedidoNuevo } from './containers/Compras/Pedido'
import { PresupuestoNuevo } from './containers/Compras - Presupuesto'
import { SolicitudDeValidacion } from './containers/ValidationRequest'
import { MiPerfil } from './containers/Perfil'
import { Presupuestacion } from './containers/Ventas - Presupuesto'
import { Renegociacion } from './containers/Ventas - Presupuesto'
import { Inicio, Busqueda, EmpresaList } from './containers/Home'
import { Login } from './containers/Login'
import Register from './containers/Register'
import { SolicitudesValidacion } from './containers/ValidationRequest'
import { PurchaseRequests, DetailPurchaseRequest }	from './containers/Compras/Pedido'
import { SaleRequests, DetailSaleRequest } from './containers/Ventas - Pedido'
import { PurchasePresupuestos, DetailPurchasePresupuesto } from './containers/Compras - Presupuesto'
import { SalePresupuestos, DetailSalePresupuesto } from './containers/Ventas - Presupuesto'
import { ResumenActividad, Reputacion, ReputacionPlataforma} from './containers/Estadisticas'
import { EvaluacionEmpresa, EvaluacionPlataforma } from './containers/Evaluacion'
import { EmpresaPerfil, CambiarContraseña } from './containers/Perfil'
import { SolicitudesUnidadMedida, SolicitudDeUnidadDeMedida, NuevaUnidadMedida } from './containers/UnidadMedida'
import { NoAutenticado } from './containers/No Autenticado'
import { Chat } from './containers/Mensajes' 
import { EmpresasPorRubro } from './components/Home';

class App extends React.Component <{}, {}> {

	props: any

	// privateRout(props: { children: any, ...rest: any }) {
	// 	return (
	// 		<Route
	// 			{...props.rest}
	// 			render={({ location }) =>
	// 				fakeAuth.isAuthenticated ? (
	// 					props.children
	// 				) : (
	// 					<Redirect
	// 						to={{
	// 							pathname: "/login",
	// 							state: { from: location }
	// 						}}
	// 					/>
	// 				)
	// 			}
	// 		/>
	// 	);
	// }

	login(props: { path: any, cookies: Cookies, render: any }) {

		props.cookies.remove('empresaId')
		return <Route path='/' render={(propsAux) => <Login {...propsAux} cookies={props.cookies}/>}/>

	}

	enEspera(props: { path: any, cookies: Cookies, render: any }) {

		let isAuth: boolean = false

		if(props.cookies.get('empresaId') !== undefined) {
			isAuth = true
		}

		if(isAuth) {
			return <Route path={ props.path } render={ props.render }/>
		} else {
			return <Route path='/' render={(propsAux) => <Login {...propsAux} cookies={props.cookies}/>}/>
		}

	}

	render() {

		const cookies = new Cookies();

		return (
			<Router>
				<div>
					<Switch>
						
													
						<Route path='/home/side' component={ AppBar } />
						
						
						<this.enEspera path='/unidadMedida/nuevo' cookies={cookies}		render={(props:any) => <NuevaUnidadMedida {...props} cookies={cookies} />}/>
						
						
						<this.enEspera path='/presupuesto/nuevo/:id' cookies={cookies}		render={(props:any) => <PresupuestoNuevo { ...props } cookies={cookies} />} />
						<this.enEspera path='/pedido/nuevo/:id' cookies={cookies}	 render={(props:any) => <PedidoNuevo { ...props } cookies={cookies} />} />
						
						<Route path='/evaluacion/ss' render={(props) => <EvaluacionPlataforma {...props} cookies={cookies} />} /> 
						<Route	path='/evaluacion/empresa/:id' render={(props) => <EvaluacionEmpresa {...props} cookies={cookies} />} />
						
						
						<this.enEspera path='/solicitud/unidadMedida/:id' cookies={cookies}	render={(props:any) => <SolicitudDeUnidadDeMedida {...props} cookies={cookies} />}	/>
						<this.enEspera path='/solicitud/unidadMedida' cookies={cookies}		render={(props:any) => <SolicitudesUnidadMedida {...props} cookies={cookies} />}	/>
						<this.enEspera path='/solicitud/nuevoUsuario/:id' cookies={cookies}	 render={(props:any) => <SolicitudDeValidacion {...props} cookies={cookies}/>}/>
						<this.enEspera path='/solicitud/validacion' cookies={cookies}	 render={(props:any) => <SolicitudesValidacion {...props} cookies={cookies}/>} />


						<this.enEspera path='/renegociacion/:id' cookies={cookies} render={(props:any) => <Renegociacion {...props} cookies={cookies}/>} /> 
						<this.enEspera path='/presupuestacion/:id' cookies={cookies}	render={(props:any) => <Presupuestacion {...props} cookies={cookies}/>}/>
						
						
						<this.enEspera path='/compras/pedido/:id' cookies={cookies}	render={(props:any) => <DetailPurchaseRequest {...props} cookies={cookies}/>}/>
						<this.enEspera path='/compras/pedidos/lista' cookies={cookies}	render={(props:any) => <PurchaseRequests {...props} cookies={cookies} />} />
						<this.enEspera path='/compras/presupuesto/:id' cookies={cookies}	render={(props:any) => <DetailPurchasePresupuesto {...props} cookies={cookies}/>}/>
						<this.enEspera path='/compras/presupuestos/lista' cookies={cookies}	render={(props:any) => <PurchasePresupuestos {...props} cookies={cookies} />} /> 
						


						<this.enEspera path='/ventas/presupuesto/:id' cookies={cookies}	 render={(props:any) => <DetailSalePresupuesto {...props} cookies={cookies} />}/>
						<this.enEspera path='/ventas/presupuestos/lista' cookies={cookies}		render={(props:any) => <SalePresupuestos {...props} cookies={cookies} />} /> 
						<this.enEspera path='/ventas/pedido/:id' cookies={cookies}			 render={(props:any) => <DetailSaleRequest {...props} cookies={cookies}/>}/>
						<this.enEspera path='/ventas/pedidos/lista' cookies={cookies}			 render={(props:any) => <SaleRequests {...props} cookies={cookies} />} /> 
						
						<Route path='/item/detalle/:id' render={(props) => <ItemDetalle {...props} cookies={cookies}/>} /> 
						<this.enEspera path='/item/editar/:id' cookies={cookies}	 render={(props:any) => <ItemEditar {...props} cookies={cookies} />} />
						<this.enEspera path='/item/nuevo' cookies={cookies}		render={(props:any) => <ItemNuevo {...props} cookies={cookies} />} /> 


						<Route path='/home/busqueda/:search' render={(props) => <Busqueda {...props} cookies={cookies} />} />	
						<Route path='/home/perfil/:id' render={(props) => <EmpresaPerfil {...props} cookies={cookies}/>} />
						<this.enEspera path='/home/miperfil/:id' cookies={cookies}		render={(props:any) => <MiPerfil {...props} cookies={cookies} />} />
						<this.enEspera path='/home/cambiar-password/:id' cookies={cookies} render={(props:any) => <CambiarContraseña {...props} cookies={cookies}/>}/> 
						<this.enEspera path='/home/resumen' cookies={cookies} render={(props:any) => <ResumenActividad {...props} cookies={cookies}/>}/>
						<this.enEspera path='/home/catalogo' cookies={cookies} render={(props:any) => <Catalogo { ...props } cookies={cookies} />} /> 
						<this.enEspera path='/home/reputacion' cookies={cookies} render={(props:any) => <Reputacion {...props} cookies={cookies}/>}/>
						<this.enEspera path='/home/reputacionPlataforma' cookies={cookies} render={(props:any) => <ReputacionPlataforma {...props} cookies={cookies}/>}/>
						<Route path='/home/inicio' render={(props) => <Inicio { ...props } cookies={cookies} />}/>
						<Route path='/home/empresas' render={(props) => <EmpresaList { ...props } cookies={cookies} />}/>
						
						<Route path='/mensajes' render={(props) => <Chat {...props} cookies={cookies}/>} /> 

						<Route path='/Unauthorized' render={(props) => <NoAutenticado {...props} />} />
						<Route path='/registrar' component={ Register } />
						<this.login path='/' cookies={cookies} render={(props: any) => <Login { ...props } cookies={cookies} />}/>
					
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App