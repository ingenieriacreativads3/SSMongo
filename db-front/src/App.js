import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accounts from './containers/Accounts';
import ValidateAccounts from './containers/ValidateAccount';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      SolicitudDeValidacion: []
    };
    
  }

  async componentDidMount() {

    var SolicitudDeValidacion = [];

    axios.get(
      'http://172.22.0.4/validar/razon/arcor'
    ).then(function (response) {
        console.log(response.body);
        console.log('API Work en 172.22.0.4!');
    }).catch(function (error) {
      console.log(error);
    }).finally(function () {
      console.log('hizo el fetch en 172.22.0.4');
    });

    axios.get(
      'http://172.22.0.5/validar/razon/arcor'
    ).then(function (response) {
        console.log(response.body);
        console.log('API Work en 172.22.0.5!');
    }).catch(function (error) {
      console.log(error);
    }).finally(function () {
      console.log('hizo el fetch en 172.22.0.5');
    });

    axios.get(
      'http://172.22.0.6/validar/razon/arcor'
    ).then(function (response) {
        console.log(response.body);
        console.log('API Work en 172.22.0.6!');
    }).catch(function (error) {
      console.log(error);
    }).finally(function () {
      console.log('hizo el fetch en 172.22.0.6');
    });

    axios.get(
      'http://172.22.0.7/validar/razon/arcor'
    ).then(function (response) {
        console.log(response.body);
        console.log('API Work en 172.22.0.7!');
    }).catch(function (error) {
      console.log(error);
    }).finally(function () {
      console.log('hizo el fetch en 172.22.0.7');
    });

    await axios.get('http://172.22.0.2:3000/solicitudDevalidacion')
    .then(function (response) {
      SolicitudDeValidacion = response.data.SolicitudDeValidacion;
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

    this.setState({
      SolicitudDeValidacion: SolicitudDeValidacion
    });
    
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/solicituddevalidacion/:id" component={ ValidateAccounts } />
            <Route path="/solicituddevalidacion">
              <Accounts SolicitudDeValidacion={ this.state.SolicitudDeValidacion } />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
