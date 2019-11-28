import React from 'react';
import { Link } from "react-router-dom";
import Header from "../components/header";
import UserPanel from "../components/user-panel";
import SearchForm from "../components/search-form";
import TablaSolicitudValidacion from '../components/tabla-solicitudValidacion';

import { connect } from 'react-redux'

function mapStateToProps(store) {
  return {
    Register: store.Register
  };
}

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

        {/* <!-- Main Header --> */}
        
        <Header></Header>

        {/* <!-- Left side column. contains the logo and sidebar --> */}
        <aside class="main-sidebar">

            {/* <!-- sidebar: style can be found in sidebar.less --> */}
            <section class="sidebar">

            {/* <!-- Sidebar user panel (optional) --> */}
                <UserPanel></UserPanel>
            {/* <!-- search form (Optional) --> */}
                <SearchForm></SearchForm>
            {/* <!-- /.search form --> */}

            {/* <!-- Sidebar Menu --> */}
            <ul class="sidebar-menu" data-widget="tree">
                <li class="header">HEADER</li>
                {/* <!-- Optionally, you can add icons to the links --> */}
                <li class="active"><a href="#"><i class="fa fa-link"></i> <span>Link</span></a></li>
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
            {/* <!-- /.sidebar-menu --> */}
            </section>
            {/* <!-- /.sidebar --> */}
        </aside>

        {/* <!-- Content Wrapper. Contains page content --> */}
        <div class="content-wrapper">




            {/* <!-- Content Header (Page header) --> */}
            <section class="content-header">
            <h1>
                Page Header
                <small>Optional description</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Level</a></li>
                <li class="active">Here</li>
            </ol>
            </section>

            {/* <!-- Content Header (Page header) --> */}
            <section class="content-header">
            <h1>
                Data Tables
                <small>advanced tables</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                <li><a href="#">Tables</a></li>
                <li class="active">Data tables</li>
            </ol>
            </section>

            {/* <!-- Main content --> */}
            <section class="content container-fluid">

            {/* <!--------------------------
                | Your Page Content Here |
                --------------------------> */}




            {/* <!-- Main content --> */}
            <section class="content">
                <div class="row">
                    <div class="col-xs-12">


                    <TablaSolicitudValidacion solicitudValidacion={ SolicitudDeValidacion }></TablaSolicitudValidacion>
                    {/* <!-- /.box --> */}


                    </div>
                    {/* <!-- /.col --> */}
                </div>
                {/* <!-- /.row --> */}
            </section>
            {/* <!-- /.content --> */}



            </section>
            {/* <!-- /.content --> */}
        </div>
        {/* <!-- /.content-wrapper --> */}

        {/* <!-- Main Footer --> */}
        <footer class="main-footer">
            {/* <!-- To the right --> */}
            <div class="pull-right hidden-xs">
            Anything you want
            </div>
            {/* <!-- Default to the left --> */}
            <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
        </footer>

        {/* <!-- Control Sidebar --> */}
        <aside class="control-sidebar control-sidebar-dark">
            {/* <!-- Create the tabs --> */}
            <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
            <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
            <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
            </ul>
            {/* <!-- Tab panes --> */}
            <div class="tab-content">
            {/* <!-- Home tab content --> */}
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
                {/* <!-- /.control-sidebar-menu --> */}

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
                {/* <!-- /.control-sidebar-menu --> */}

            </div>
            {/* <!-- /.tab-pane --> */}
            {/* <!-- Stats tab content --> */}
            <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
            {/* <!-- /.tab-pane --> */}
            {/* <!-- Settings tab content --> */}
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
                {/* <!-- /.form-group --> */}
                </form>
            </div>
            {/* <!-- /.tab-pane --> */}
            </div>
        </aside>
        {/* <!-- /.control-sidebar --> */}
        {/* <!-- Add the sidebar's background. This div must be placed
        immediately after the control sidebar --> */}
        <div class="control-sidebar-bg"></div>
      </div>

    );
  }
}

export default connect(mapStateToProps)(SolicitudDeValidacion);