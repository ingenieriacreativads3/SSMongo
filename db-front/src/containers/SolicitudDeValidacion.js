import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/header";
import UserPanel from "../components/user-panel";
import SearchForm from "../components/search-form";
import TablaSolicitudValidacion from '../components/tabla-solicitudValidacion';

class SolicitudDeValidacion extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.getSolicitudDeValidacion = this.getSolicitudDeValidacion.bind(this);
    this.state = {
      path: this.props.path,
      url: this.props.url,  
      SolicitudDeValidacion: []
    };
    this.setState({
      SolicitudDeValidacion: this.props.SolicitudDeValidacion
    });
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
            <td>{ (solicitud.estado === undefined) ? 'No Resuelta' : solicitud.estado }</td>
            <td>{ (solicitud.fechaCreacionSolicitud === undefined) ? 'Fecha creacion Default' : solicitud.fechaCreacionSolicitud }</td>
            <td>{ (solicitud.idUser === undefined) ? '_idUser' : solicitud.idUser }</td>
            <td>{ (solicitud.fechaActualizacionSolicitud === undefined) ? 'Fecha actualizacion Default' : solicitud.fechaActualizacionSolicitud }</td>
            <td><a href={ direccion } >Validar</a></td>
          </tr>
        )
      });
    }

    return(
            
      <div class="wrapper">
        <Header></Header>
        <aside class="main-sidebar">
            <section class="sidebar">
                <UserPanel></UserPanel>
                <SearchForm></SearchForm>
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">HEADER</li>

                <li class="active"><Link to="/item/nuevo"><i class="fa fa-link"></i> <span>Nuevo Item</span></Link></li>
                <li class="active"><Link to="/presupuesto/nuevo"><i class="fa fa-link"></i> <span>Nuevo Presupuesto</span></Link></li>
                <li><a href="#"><i class="fa fa-link"></i> <span>Another Link</span></a></li>
                <li class="treeview">
                <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
                    <span class="pull-right-container">
                        <i class="fa fa-angle-left pull-right"></i>
                    </span>
                </a>
                <ul class="treeview-menu">
                    <li><a href="#">Link in level 2</a></li>
                    <li><a href="#">Link in level 2</a></li>
                </ul>
                </li>
            </ul>
            </section>
        </aside>
        <div class="content-wrapper">
            
            <section class="content-header">
            <h1>
                Solicitud de Validación
                <small>Lista</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Admin</a></li>
                <li><a href="#">SolicitudesDeValidacion</a></li>
                <li class="active">Lista</li>
            </ol>
            </section>
            <section class="content container-fluid">
            <section class="content">
                <div class="row">
                    <div class="col-xs-12">


                    <TablaSolicitudValidacion solicitudValidacion={ SolicitudDeValidacion }></TablaSolicitudValidacion>
                    </div>
                </div>
            </section>
            </section>
        </div>
        <footer class="main-footer">
            <div class="pull-right hidden-xs">
            Anything you want
            </div>
            <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
        </footer>

        <aside class="control-sidebar control-sidebar-dark">
            <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
            <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
            <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
            </ul>
            <div class="tab-content">
            <div class="tab-pane active" id="control-sidebar-home-tab">
                <h3 class="control-sidebar-heading">Recent Activity</h3>
                <ul class="control-sidebar-menu">
                <li>
                    <a href="javascript:;">
                    <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                    <div class="menu-info">
                        <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                        <p>Will be 23 on April 24th</p>
                    </div>
                    </a>
                </li>
                </ul>

                <h3 class="control-sidebar-heading">Tasks Progress</h3>
                <ul class="control-sidebar-menu">
                <li>
                    <a href="javascript:;">
                    <h4 class="control-sidebar-subheading">
                        Custom Template Design
                        <span class="pull-right-container">
                            <span class="label label-danger pull-right">70%</span>
                        </span>
                    </h4>

                    <div class="progress progress-xxs">
                        <div class="progress-bar progress-bar-danger" style={{ "width": "70%" }}></div>
                    </div>
                    </a>
                </li>
                </ul>

            </div>
            <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
            <div class="tab-pane" id="control-sidebar-settings-tab">
                <form method="post">
                <h3 class="control-sidebar-heading">General Settings</h3>

                <div class="form-group">
                    <label class="control-sidebar-subheading">
                    Report panel usage
                    <input type="checkbox" class="pull-right" checked />
                    </label>

                    <p>
                    Some information about this general settings option
                    </p>
                </div>
                </form>
            </div>
            </div>
        </aside>
        <div class="control-sidebar-bg"></div>
      </div>

    );
  }
}

export default SolicitudDeValidacion