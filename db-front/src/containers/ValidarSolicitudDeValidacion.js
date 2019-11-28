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
import DatosEmpresa from '../components/datos-empresa';

import { connect } from 'react-redux'

import * as apiWork from '../store/actions/apiWork';
import * as loginActions from '../store/actions/LoginAction';
import * as update from '../store/actions/LoginAction';

function mapStateToProps(store) {
  return {
    login: store.login,
    apiWork: store.apiWork,
    update: store.updateToken
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
    this.asd = this.asd.bind(this);
  }

  componentDidMount(){
    console.log('estoy en componentDidMount y sus props son:' + this.props.request);
  }

  asd() {

    this.props.dispatch(update.updateToken('asd'));

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

    var SolicitudDeValidacion = {};
    var Empresa = {};

    await axios.get('http://172.22.0.2:3000/solicituddevalidacion/' + this.props.match.params.id)
      .then(function (response) {
        SolicitudDeValidacion = response.data.SolicitudDeValidacion;
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

    await axios.get('http://172.22.0.2:3000/empresa/' + this.state.SolicitudDeValidacion.idUser)
      .then(function (response) {
        Empresa = response.data.Empresa;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    this.setState({
      Empresa: Empresa
    });
    
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
        {/* <!-- Main Header --> */}
          <Header></Header>
      {/* <!-- Left side column. contains the logo and sidebar --> */}
      <aside class="main-sidebar">
        {/* <!-- sidebar: style can be found in sidebar.less --> */}
        <section class="sidebar">
          {/* <!-- Sidebar user panel --> */}
            <UserPanel></UserPanel>
          {/* <!-- search form --> */}
            <SearchForm></SearchForm>
          {/* <!-- /.search form --> */}
          {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
          <ul class="sidebar-menu" data-widget="tree">
            <li class="header">MAIN NAVIGATION</li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><a href="../../index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
                <li><a href="../../index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-files-o"></i>
                <span>Layout Options</span>
                <span class="pull-right-container">
                  <span class="label label-primary pull-right">4</span>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><a href="../layout/top-nav.html"><i class="fa fa-circle-o"></i> Top Navigation</a></li>
                <li><a href="../layout/boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>
                <li><a href="../layout/fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>
                <li><a href="../layout/collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
              </ul>
            </li>
            <li>
              <a href="../widgets.html">
                <i class="fa fa-th"></i> <span>Widgets</span>
                <span class="pull-right-container">
                  <small class="label pull-right bg-green">new</small>
                </span>
              </a>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-pie-chart"></i>
                <span>Charts</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><a href="../charts/chartjs.html"><i class="fa fa-circle-o"></i> ChartJS</a></li>
                <li><a href="../charts/morris.html"><i class="fa fa-circle-o"></i> Morris</a></li>
                <li><a href="../charts/flot.html"><i class="fa fa-circle-o"></i> Flot</a></li>
                <li><a href="../charts/inline.html"><i class="fa fa-circle-o"></i> Inline charts</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-laptop"></i>
                <span>UI Elements</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><a href="../UI/general.html"><i class="fa fa-circle-o"></i> General</a></li>
                <li><a href="../UI/icons.html"><i class="fa fa-circle-o"></i> Icons</a></li>
                <li><a href="../UI/buttons.html"><i class="fa fa-circle-o"></i> Buttons</a></li>
                <li><a href="../UI/sliders.html"><i class="fa fa-circle-o"></i> Sliders</a></li>
                <li><a href="../UI/timeline.html"><i class="fa fa-circle-o"></i> Timeline</a></li>
                <li><a href="../UI/modals.html"><i class="fa fa-circle-o"></i> Modals</a></li>
              </ul>
            </li>
            <li class="treeview active">
              <a href="#">
                <i class="fa fa-edit"></i> <span>Forms</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li class="active"><a href="general.html"><i class="fa fa-circle-o"></i> General Elements</a></li>
                <li><a href="advanced.html"><i class="fa fa-circle-o"></i> Advanced Elements</a></li>
                <li><a href="editors.html"><i class="fa fa-circle-o"></i> Editors</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-table"></i> <span>Tables</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><a href="../tables/simple.html"><i class="fa fa-circle-o"></i> Simple tables</a></li>
                <li><a href="../tables/data.html"><i class="fa fa-circle-o"></i> Data tables</a></li>
              </ul>
            </li>
            <li>
              <a href="../calendar.html">
                <i class="fa fa-calendar"></i> <span>Calendar</span>
                <span class="pull-right-container">
                  <small class="label pull-right bg-red">3</small>
                  <small class="label pull-right bg-blue">17</small>
                </span>
              </a>
            </li>
            <li>
              <a href="../mailbox/mailbox.html">
                <i class="fa fa-envelope"></i> <span>Mailbox</span>
                <span class="pull-right-container">
                  <small class="label pull-right bg-yellow">12</small>
                  <small class="label pull-right bg-green">16</small>
                  <small class="label pull-right bg-red">5</small>
                </span>
              </a>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-folder"></i> <span>Examples</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><a href="../examples/invoice.html"><i class="fa fa-circle-o"></i> Invoice</a></li>
                <li><a href="../examples/profile.html"><i class="fa fa-circle-o"></i> Profile</a></li>
                <li><a href="../examples/login.html"><i class="fa fa-circle-o"></i> Login</a></li>
                <li><a href="../examples/register.html"><i class="fa fa-circle-o"></i> Register</a></li>
                <li><a href="../examples/lockscreen.html"><i class="fa fa-circle-o"></i> Lockscreen</a></li>
                <li><a href="../examples/404.html"><i class="fa fa-circle-o"></i> 404 Error</a></li>
                <li><a href="../examples/500.html"><i class="fa fa-circle-o"></i> 500 Error</a></li>
                <li><a href="../examples/blank.html"><i class="fa fa-circle-o"></i> Blank Page</a></li>
                <li><a href="../examples/pace.html"><i class="fa fa-circle-o"></i> Pace Page</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">
                <i class="fa fa-share"></i> <span>Multilevel</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
              </a>
              <ul class="treeview-menu">
                <li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
                <li class="treeview">
                  <a href="#"><i class="fa fa-circle-o"></i> Level One
                    <span class="pull-right-container">
                      <i class="fa fa-angle-left pull-right"></i>
                    </span>
                  </a>
                  <ul class="treeview-menu">
                    <li><a href="#"><i class="fa fa-circle-o"></i> Level Two</a></li>
                    <li class="treeview">
                      <a href="#"><i class="fa fa-circle-o"></i> Level Two
                        <span class="pull-right-container">
                          <i class="fa fa-angle-left pull-right"></i>
                        </span>
                      </a>
                      <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Level Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#"><i class="fa fa-circle-o"></i> Level One</a></li>
              </ul>
            </li>
            <li><a href="https://adminlte.io/docs"><i class="fa fa-book"></i> <span>Documentation</span></a></li>
            <li class="header">LABELS</li>
            <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
            <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
            <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
          </ul>
        </section>
        {/* <!-- /.sidebar --> */}
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
                <DatosEmpresa></DatosEmpresa>
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