import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.min.css';
import './dist/css/skins/skin-blue.min.css';
import './dist/css/skins/_all-skins.min.css';

class DatosEmpresa extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        
      };
    }

    render(){

        return(
          
            <div class="box-body">
            <dl class="dl-horizontal">
              <dt>ID:</dt>
              <dd>{ this.state.Empresa._id }</dd>
              <dt>Empresa</dt>
              <dd>{ this.state.Empresa.nombre }</dd>
              <dt>Empresa</dt>
              <dd>{ this.state.Empresa.razonSocial }</dd>
              <dt>CUIT</dt>
              <dd>{ this.state.Empresa.cuit }</dd>
              <dt>Domicilio</dt>
              <dd>{ this.state.Empresa.domicilio }</dd>
              <dt>Telefono</dt>
              <dd>{ this.state.Empresa.telefono }</dd>
              <dt>Localidad</dt>
              <dd>{ this.state.Empresa.localidad }</dd>
              <dt>Provincia</dt>
              <dd>{ this.state.Empresa.provincia }</dd>
              <dt>Usuario</dt>
              <dd>{ this.state.Empresa.usuario }</dd>
              <dt>Email</dt>
              <dd>{ this.state.Empresa.email }</dd>
              <dt>Estado</dt>
              <dd>{ this.state.Empresa.estado }</dd>
              <dt>Imagen 1</dt>
              <dd>
                <img src="../../dist/img/user2-160x160.jpg" width="250" height="250" />
              </dd>
              <dt>Imagen 2</dt>
              <dd>
                <img src="../../dist/img/user2-160x160.jpg" width="250" height="250" />
              </dd>
              <dt>
                Imagen 3
              </dt>
              <dd>
                <img src="../../dist/img/user2-160x160.jpg" width="250" height="250" />
              </dd>
            </dl>
          </div>
        
        );

    }
}

export default DatosEmpresa