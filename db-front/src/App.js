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

import * as SolicitudDeValidacionAction from './store/actions/SolicitudDeValidacionAction'

import { connect } from 'react-redux'

function mapStateToProps(store) {
  return {
    SolicitudDeValidacion: store.SolicitudDeValidacion.data.solicitudesDeValidacion
  };
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      SolicitudDeValidacion: this.props.SolicitudDeValidacion
    };
    
  }

  async componentDidMount() {

    var SolicitudDeValidacion = [];

    // await axios.get('http://172.22.0.2:3000/solicitudDevalidacion')
    // .then(function (response) {
    //   SolicitudDeValidacion = response.data.SolicitudDeValidacion;
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .finally(function () {
    //   // always executed
    // });

    await this.props.dispatch(SolicitudDeValidacionAction.getAllSolicitudDeValidacion())

    this.setState({
      SolicitudDeValidacion: this.props.SolicitudDeValidacion
    });
    
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
                SolicitudDeValidacion={ this.state.SolicitudDeValidacion }/>
            </Route>
            <Route path="/registrar">
              <SignUp></SignUp>
            </Route>
            <Route path="/ingresar">
              <SignIn></SignIn>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);