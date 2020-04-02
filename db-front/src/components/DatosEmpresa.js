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
    }

    render(){

        return(
          
            <div class="box-body">
            <dl class="dl-horizontal">
              <dt>ID:</dt>
              <dd>{ this.props.Empresa._id }</dd>
              <dt>Nombre</dt>
              <dd>{ this.props.Empresa.nombre }</dd>
              <dt>Razon Social</dt>
              <dd>{ this.props.Empresa.razon }</dd>
              <dt>CUIT</dt>
              <dd>{ this.props.Empresa.cuit }</dd>
              <dt>Domicilio</dt>
              <dd>{ (this.props.Empresa.domicilioLegal === undefined) ? 'Domicilio' : this.props.Empresa.domicilioLegal.domicilio }</dd>
              <dt>Telefono</dt>
              <dd>Sin Asignar</dd>
              <dt>Localidad</dt>
              <dd>{ (this.props.Empresa.domicilioLegal === undefined) ? 'Localidad' : this.props.Empresa.domicilioLegal.localidad }</dd>
              <dt>Provincia</dt>
              <dd>{ (this.props.Empresa.domicilioLegal === undefined) ? 'Provincia' : this.props.Empresa.domicilioLegal.provincia }</dd>
              <dt>Usuario</dt>
              <dd>{ this.props.Empresa.usuario }</dd>
              <dt>Email</dt>
              <dd>{ this.props.Empresa.email }</dd>
              <dt>Estado</dt>
              <dd>{ this.props.Empresa.estado }</dd>
              <dt>Contrato Social</dt>
              <dd>
                <img src="../dist/img/000721664_1-35726ab5f861d419fdd264178b01b52d.png" width="250" height="250" />
              </dd>
            </dl>
          </div>
        
        );

    }
}

export default DatosEmpresa