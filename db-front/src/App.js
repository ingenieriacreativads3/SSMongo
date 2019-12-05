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
import PresupuestoNuevo from './containers/Presupuesto/Nuevo'
import HomeAdmin from './containers/Home/Admin'
import PresupuestoLista from './containers/Presupuesto/Lista'

import * as PresupuestoAction from './store/actions/PresupuestoAction'
import * as SolicitudDeValidacionAction from './store/actions/SolicitudDeValidacionAction'

import { connect } from 'react-redux'

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
            <Route path="/presupuesto/nuevo" component={ PresupuestoNuevo } />
            <Route path="/presupuestos">
              <PresupuestoLista
                path={ solicitudDevalidacionPath }
                url={ baseURL } />
            </Route>
            <Route path="/home/admin" component={ HomeAdmin } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);