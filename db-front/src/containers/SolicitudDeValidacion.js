import React from 'react';
import { Link } from "react-router-dom";
import TablaSolicitudValidacion from '../components/tabla-solicitudValidacion';
import Tabla from '../components/TablaSolicitudValidacion';

import { connect } from 'react-redux'
import * as SolicitudesDeValidacionAction from '../store/actions/SolicitudDeValidacionAction'


import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.min.css';
import './dist/css/skins/skin-blue.min.css';
import './dist/css/skins/_all-skins.min.css';


import './Home/shop/css/linearicons.css'
import './Home/shop/css/owl.carousel.css';
import './Home/shop/css/font-awesome.min.css';
import './Home/shop/css/themify-icons.css';
import './Home/shop/css/nice-select.css';
import './Home/shop/css/nouislider.min.css';
import './Home/shop/css/bootstrap.css';
import './Home/shop/css/main.css'; 

function mapStateToProps(store) {
  return {
    Register: store.Register,
    SolicitudesDeValidacion: store.SolicitudesDeValidacion
  };
}

class SolicitudDeValidacion extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.getSolicitudDeValidacion = this.getSolicitudDeValidacion.bind(this);
    this.setSolicitud = this.setSolicitud.bind(this);
    this.state = {
      path: this.props.path,
      url: this.props.url
    };
  }

  componentDidMount() {
    this.props.dispatch(SolicitudesDeValidacionAction.getAll());
  }

  getSolicitudDeValidacion() {

    /*

    var usersShow = this.props.users.filter(user => {

      var isVerify = false;

      var roles = user.roles.J8Bhq3uTtdgwZx3rz.map(rol => {
        if (rol == "account/verify"){
          isVerify = true;
        }
      })

      return isVerify;

    })

    */

    var SolicitudDeValidacion = [];
    SolicitudDeValidacion = this.props.SolicitudDeValidacion
    
    return SolicitudDeValidacion;
  }

  setSolicitud() {
    
  }

  render(){

    var SolicitudDeValidacion = [];

    if (this.getSolicitudDeValidacion() === undefined) {

      SolicitudDeValidacion = [];
      
    } else {

      SolicitudDeValidacion = this.getSolicitudDeValidacion().map(solicitud => {

        var id = '/' + solicitud._id;

        var direccion = this.state.url + this.state.path + id;

        return(
          <tr>
            <td>{ (solicitud._id === undefined) ? '_idSolicitud' : solicitud._id } </td>
            <td>{ (solicitud.fechaCreacionSolicitud === undefined) ? 'Fecha creacion Default' : solicitud.fechaCreacionSolicitud }</td>
            <td>{ (solicitud.idUser === undefined) ? '_idUser' : solicitud.idUser }</td>
            <td>{ (solicitud.fechaActualizacionSolicitud === undefined) ? 'Fecha actualizacion Default' : solicitud.fechaActualizacionSolicitud }</td>
            <td>{ (solicitud.estado === undefined) ? 'No Resuelta' : solicitud.estado }</td>
            {/* <td><a href={ direccion } onClick={ this.setSolicitud }>Validar</a></td> */}
          </tr>
        )
      });
    }

    return(
            
      <div class="wrapper">
       {/* 
        <aside class="main-sidebar">
            <section class="sidebar">

           

            </section>
        </aside> */}
        <div class="content-wrapper">
            
            {/* <section class="content-header">
            <h1>
                Solicitud de Validación
                <small>Lista</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Admin</a></li>
                <li><a href="#">SolicitudesDeValidacion</a></li>
                <li class="active">Lista</li>
            </ol>
            </section> */}
            <section class="content container-fluid">
              <section class="content">
                <div class="row features-inner">
                
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                      <div class="f-icon">
                      <Link to=""><i class="lnr lnr-history"></i></Link>
                      </div>
                      <h6>No resueltas</h6>

                    </div>
                  </div>
              
                
                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-features">
                      <div class="f-icon">
                      <Link to=""><i class="lnr lnr-checkmark-circle"></i></Link>
                      </div>
                      <h6>Resueltas</h6>
                      
                    </div>
                  </div>
                
                </div>
              </section>
            </section>
            
            <section class="content container-fluid">
              <section class="content">
                  <div class="row">
                      <div class="col-xs-12">
                      

                        <Tabla
                          solicitudValidacion={ SolicitudDeValidacion }
                          tituloTabla="Solicitudes de Validación">
                        </Tabla> 

                      </div>
                  </div>
              </section>
            </section>
        </div>
      </div>

    );
  }
}

export default connect(mapStateToProps)(SolicitudDeValidacion);