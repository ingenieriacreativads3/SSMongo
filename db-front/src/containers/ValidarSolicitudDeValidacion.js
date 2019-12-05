/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.min.css';
import './dist/css/skins/skin-blue.min.css';
import './dist/css/skins/_all-skins.min.css';
import Header from "../components/header";
import UserPanel from "../components/UserPanel";
import SearchForm from "../components/search-form";
import DatosEmpresa from '../components/DatosEmpresa';
import SideBarMenu from '../components/SideBarMenu';

import { connect } from 'react-redux'

import * as apiWork from '../store/actions/apiWork';
import * as loginActions from '../store/actions/LoginAction';
import * as update from '../store/actions/LoginAction';
import * as SolicitudDeValidacionAction from '../store/actions/SolicitudDeValidacionAction'

function mapStateToProps(store) {
  return {
    login: store.login,
    apiWork: store.apiWork,
    update: store.updateToken,
    SolicitudDeValidacion: store.SolicitudDeValidacion.data.solicitudDeValidacion,
    Empresa: store.SolicitudDeValidacion.data.empresa
  };
}

class ValidateAccounts extends React.Component {

  constructor(props, context) {
    super(props);
    this.state = {
      SolicitudDeValidacion: {},
      Empresa: {},
      rubros: [],
      estado: 'No Validada'
    };
    this.getRubro = this.getRubro.bind(this);
    this.getEstado = this.getEstado.bind(this);
    this.resolver = this.resolver.bind(this);
  }

  async resolver() {

    await axios.put('http://172.22.0.2:3000/empresa/' + this.state.Empresa._id, {
      "request": {
        "data": {
          "Empresa": {
              "estado" : this.state.estado,
              "rubros" : this.state.rubros
          }
        }
      }
    }).then(async (response) => {

      await axios.put('http://172.22.0.2:3000/solicituddevalidacion/' + this.state.SolicitudDeValidacion._id, {
        "request": {
          "data": {
            "SolicitudDeValidacion": {
                estado: "Resuelta"
            }
          }
        }
      }).then(function (response) {
          //Empresa = response.data.Empresa;
      }).catch(function (error) {
        // handle error
        console.log(error);
      }).finally(function () {
        // always executed
      });

    }).catch(function (error) {
      // handle error
      console.log(error);
    }).finally(function () {
      // always executed
    });

  }

  getRubro(e){

    var addRubro = this.state.rubros;
    addRubro.push(e.target.value);

    this.setState({
      rubros: addRubro
    });
  }

  getEstado(e){
    this.setState({
      estado : e.target.value
    });
  }

  async componentDidMount() {

    await this.props.dispatch(SolicitudDeValidacionAction.get(this.props.match.params.id))

  }

  render(){

    var listaRubro = this.state.rubros.map((rubro) => {
      return(
        <div>
          <p>{ rubro }</p>
        </div>
      )
    });

    return(

      <div class="wrapper">
        <Header></Header>
      <aside class="main-sidebar">
        <section class="sidebar">

          <UserPanel></UserPanel>
          <SearchForm></SearchForm>
          <SideBarMenu></SideBarMenu>
          
        </section>
      </aside>

      {/* <!-- Content Wrapper. Contains page content --> */}
      <div class="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <section class="content-header">
          <h1>
            General Form Elements
            <small>Preview</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Forms</a></li>
            <li class="active">General Elements</li>
          </ol>
        </section>

        {/* <!-- Main content --> */}
        <section class="content">
          <div class="row">
            {/* <!-- left column --> */}
            <div class="col-md-6">



              <div class="box box-solid">
                <div class="box-header with-border">
                  <i class="fa fa-text-width"></i>

                  <h3 class="box-title">Description Horizontal</h3>
                </div>
                <DatosEmpresa Empresa={this.props.Empresa}></DatosEmpresa>
              </div>



            </div>
            {/* <!--/.col (left) --> */}
            {/* <!-- right column --> */}
            <div class="col-md-6">








              {/* <!-- general form elements --> */}
              <div class="box box-primary">
                <div class="box-header with-border">
                  <h3 class="box-title">ID: { this.state.SolicitudDeValidacion._id }</h3>
                </div>
                {/* <!-- /.box-header --> */}

                {/* <!-- form start --> */}
                <form role="form">
                  <div class="box-body">

                    <div class="form-group">
                      <label>Estado Empresa</label>
                      <select onChange={this.getEstado} data-placeholder="En Espera" style={{"width": "100%;"}}>
                        <option>No Validada</option>
                        <option>Validada</option>
                        <option>Autenticada</option>
                        <option>No Autenticada</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label>Seleccionar</label>
                      <select onChange={this.getRubro} style={{"width": "100%;"}}>
                        <option selected="selected">Fab. Plasticos</option>
                        <option>Fab. Indumentaria</option>
                        <option>Serv. Información</option>
                        <option>Serv. Telefonía</option>
                        <option>Agricultura</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label>Rubros</label>
                      {listaRubro}
                    </div>


                  </div>
                  {/* <!-- /.box-body --> */}

                  <div class="box-footer">
                    <button  onClick={this.asd} type="button" class="btn btn-warning btn-lg btn-block">Validar</button>
                  </div>

                  <div class="box-footer">
                    <button type="button" class="btn btn-warning btn-lg btn-block">Rubros</button>
                  </div>

                  <div class="box-footer">
                    <Link to="/solicituddevalidacion">
                      <button onClick={this.resolver} type="button" class="btn btn-primary btn-lg btn-block">Resolver</button>
                    </Link>
                  </div>
                </form>
              </div>
              {/* <!-- /.box --> */}






            </div>
            {/* <!--/.col (right) --> */}
          </div>
          {/* <!-- /.row --> */}
        </section>
        {/* <!-- /.content --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
      <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <b>Version</b> 2.4.18
        </div>
        <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE</a>.</strong> All rights
        reserved.
      </footer>

      {/* <!-- Control Sidebar --> */}
      <aside class="control-sidebar control-sidebar-dark">
        {/* <!-- Create the tabs --> */}
        <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
          <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
          <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
        </ul>
        {/* <!-- Tab panes --> */}
        <div class="tab-content">
          {/* <!-- Home tab content --> */}
          <div class="tab-pane" id="control-sidebar-home-tab">
            <h3 class="control-sidebar-heading">Recent Activity</h3>
            <ul class="control-sidebar-menu">
              <li>
                <a href="javascript:void(0)">
                  <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                  <div class="menu-info">
                    <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                    <p>Will be 23 on April 24th</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i class="menu-icon fa fa-user bg-yellow"></i>

                  <div class="menu-info">
                    <h4 class="control-sidebar-subheading">Frodo Updated His Profile</h4>

                    <p>New phone +1(800)555-1234</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>

                  <div class="menu-info">
                    <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>

                    <p>nora@example.com</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <i class="menu-icon fa fa-file-code-o bg-green"></i>

                  <div class="menu-info">
                    <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>

                    <p>Execution time 5 seconds</p>
                  </div>
                </a>
              </li>
            </ul>
            {/* <!-- /.control-sidebar-menu --> */}

            <h3 class="control-sidebar-heading">Tasks Progress</h3>
            <ul class="control-sidebar-menu">
              <li>
                <a href="javascript:void(0)">
                  <h4 class="control-sidebar-subheading">
                    Custom Template Design
                    <span class="label label-danger pull-right">70%</span>
                  </h4>

                  <div class="progress progress-xxs">
                    <div class="progress-bar progress-bar-danger" style={{"width": "70%"}}></div>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <h4 class="control-sidebar-subheading">
                    Update Resume
                    <span class="label label-success pull-right">95%</span>
                  </h4>

                  <div class="progress progress-xxs">
                    <div class="progress-bar progress-bar-success" style={{"width": "95%"}}></div>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <h4 class="control-sidebar-subheading">
                    Laravel Integration
                    <span class="label label-warning pull-right">50%</span>
                  </h4>

                  <div class="progress progress-xxs">
                    <div class="progress-bar progress-bar-warning" style={{"width": "50%"}}></div>
                  </div>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <h4 class="control-sidebar-subheading">
                    Back End Framework
                    <span class="label label-primary pull-right">68%</span>
                  </h4>

                  <div class="progress progress-xxs">
                    <div class="progress-bar progress-bar-primary" style={{"width": "68%"}}></div>
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

              <div class="form-group">
                <label class="control-sidebar-subheading">
                  Allow mail redirect
                  <input type="checkbox" class="pull-right" checked />
                </label>

                <p>
                  Other sets of options are available
                </p>
              </div>
              {/* <!-- /.form-group --> */}

              <div class="form-group">
                <label class="control-sidebar-subheading">
                  Expose author name in posts
                  <input type="checkbox" class="pull-right" checked />
                </label>

                <p>
                  Allow the user to show his name in blog posts
                </p>
              </div>
              {/* <!-- /.form-group --> */}

              <h3 class="control-sidebar-heading">Chat Settings</h3>

              <div class="form-group">
                <label class="control-sidebar-subheading">
                  Show me as online
                  <input type="checkbox" class="pull-right" checked />
                </label>
              </div>
              {/* <!-- /.form-group --> */}

              <div class="form-group">
                <label class="control-sidebar-subheading">
                  Turn off notifications
                  <input type="checkbox" class="pull-right" />
                </label>
              </div>
              {/* <!-- /.form-group --> */}

              <div class="form-group">
                <label class="control-sidebar-subheading">
                  Delete chat history
                  <a href="javascript:void(0)" class="text-red pull-right"><i class="fa fa-trash-o"></i></a>
                </label>
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

export default connect(mapStateToProps)(ValidateAccounts);