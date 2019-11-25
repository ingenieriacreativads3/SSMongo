import React from 'react';
import logo from './logo.svg';
import './App.css';
import SolicitudDeValidacion from './containers/SolicitudDeValidacion';
import ValidarSolicitudDeValidacion from './containers/ValidarSolicitudDeValidacion';
import axios from 'axios';
import RegisterForm from './containers/RegisterForm';
import Login from './containers/Login';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      SolicitudDeValidacion: []
    };
    
  }

  async componentDidMount() {

    var SolicitudDeValidacion = [];

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
            <Route path="/solicituddevalidacion/:id" component={ ValidarSolicitudDeValidacion } />
            <Route path="/solicituddevalidacion">
              <SolicitudDeValidacion SolicitudDeValidacion={ this.state.SolicitudDeValidacion } />
            </Route>
            <Route path="/registrar">
              <RegisterForm></RegisterForm>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
