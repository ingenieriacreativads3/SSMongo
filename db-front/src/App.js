import React from 'react';
import logo from './logo.svg';
import './App.css';
import SolicitudDeValidacion from './containers/SolicitudDeValidacion';
import ValidarSolicitudDeValidacion from './containers/ValidarSolicitudDeValidacion';
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



import * as PresupuestoAction from './store/actions/PresupuestoAction'
import * as SolicitudDeValidacionAction from './store/actions/SolicitudDeValidacionAction'

import { connect } from 'react-redux'
import DetallesProducto from './containers/DetallesProducto';

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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);