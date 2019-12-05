import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import UserPanel from "../../components/UserPanel";
import SearchForm from "../../components/SearchForm";
import SideBarMenu from '../../components/SideBarMenu';

import '../bower_components/bootstrap/dist/css/bootstrap.min.css'
import '../bower_components/font-awesome/css/font-awesome.min.css'
import '../bower_components/Ionicons/css/ionicons.min.css'
import '../dist/css/AdminLTE.min.css'
import '../dist/css/skins/_all-skins.min.css'

import * as PresupuestoAction from "../../store/actions/PresupuestoAction";
import { connect } from 'react-redux'

function mapStateToProps(store) {
  return {
    Item: store.Item,
    idEmpresa: store.Login.data.empresa._id
  };
}

class Nuevo extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.getTelefono = this.getTelefono.bind(this);
    this.getProvincia = this.getProvincia.bind(this);
    this.getLocalidad = this.getLocalidad.bind(this);
    this.getCodigo = this.getCodigo.bind(this);
    this.getMensaje = this.getMensaje.bind(this);
    this.getCantidad = this.getCantidad.bind(this);
    this.getUnidad = this.getUnidad.bind(this);
    this.state = {
      Presupuesto: {
        items: [
          {
            _id: '5de5976473e8542058470864'
          }
        ],
        idEmpresaDemandante: '5de181d5c062d16c024321e4',
        telefonoDemandante: '',
        provinciaDemandante: '',
        localidadDemandante: '',
        codigoPostalDemandante: '',
        mensaje: '',
        cantidad: 0,
        unidadDeMedida: '',
        idEmpresaDemandada: '5de181d5c062d16c024321e4'
      }
    };
  }

  onSubmit() {

    this.props.dispatch(PresupuestoAction.nuevo(

      this.state.Presupuesto.idEmpresaDemandada,
      this.state.Presupuesto.idEmpresaDemandante,
      this.state.Presupuesto.items

    ));

  }

  getTelefono(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        telefonoDemandante: e.target.value
      }
    });

  }

  getProvincia(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        provinciaDemandante: e.target.value
      }
    });

  }

  getLocalidad(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        localidadDemandante: e.target.value
      }
    });

  }

  getCodigo(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        codigoPostalDemandante: e.target.value
      }
    });

  }

  getMensaje(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        mensaje: e.target.value
      }
    });

  }

  getCantidad(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        cantidad: e.target.value
      }
    });

  }

  getUnidad(e) {

    this.setState({
      Presupuesto: {
        ...this.state.Presupuesto,
        unidadDeMedida: e.target.value
      }
    });

  }

  render(){

    return(
            
      <div className="wrapper">

        <Header></Header>

        <aside className="main-sidebar">
          <section className="sidebar">

            <UserPanel></UserPanel>
            <SearchForm></SearchForm>
            <SideBarMenu></SideBarMenu>

          </section>
        </aside>

        <div className="content-wrapper">

          <section className="content-header">
            <h1>
              Presupuesto
              <small>Nuevo</small>
            </h1>
            <ol className="breadcrumb">
              <li><a href="#"><i className="fa fa-dashboard"></i>Empresa</a></li>
              <li><a href="#">Presupuesto</a></li>
              <li className="active">Nuevo</li>
            </ol>
          </section>

            <section className="content container-fluid">

              <section className="content">
                <div className="row">
                  
                  <div className="col-md-3">

                    <div className="box box-primary">
                      <div className="box-body box-profile">
                        <img className="profile-user-img img-responsive img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture"></img>

                        <h3 className="profile-username text-center">Nombre Producto</h3>

                        <p className="text-muted text-center">Rubro Producto</p>

                        <ul className="list-group list-group-unbordered">
                          <li className="list-group-item">
                            <b>Productos vendidos</b> <a className="pull-right">1,322</a>
                          </li>
                          <li className="list-group-item">
                            <b>Presupuestos</b> <a className="pull-right">543</a>
                          </li>
                          <li className="list-group-item">
                            <b>Stock</b> <a className="pull-right">Si</a>
                          </li>
                        </ul>

                        <a href="#" className="btn btn-primary btn-block"><b>Añadir a favoritos</b></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="nav-tabs-custom">

                      <ul className="nav nav-tabs">
                        <li className="active"><a href="#activity" data-toggle="tab">Nuevo</a></li>
                      </ul>

                        <div className="box-body box-profile">
                          <div className="tab-pane" id="settings">
                            <form className="form-horizontal">

                              <div className="form-group">
                                <label for="nombreItem" className="col-sm-2 control-label">Producto</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="nombreItem" placeholder="Nombre Item" disabled></input>
                                </div>
                              </div>

                              <div className="form-group">
                                <label for="solicitante" className="col-sm-2 control-label">Solicitante</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="solicitante" placeholder="Municipalidad de Devoto" disabled></input>
                                </div>
                              </div>

                              <div className="form-group">
                                <label for="emailSolicitante" className="col-sm-2 control-label">Email Solicitante</label>
                                <div className="col-sm-10">
                                  <input type="email" className="form-control" id="emailSolicitante" placeholder="sistemas@devoto.gob.ar" disabled></input>
                                </div>
                              </div>

                              <div className="form-group">
                                <label for="telefonoSolicitante" className="col-sm-2 control-label">Teléfono Solicitante</label>
                                <div className="col-sm-10">
                                  <input type="number" className="form-control" id="telefonoSolicitante" placeholder="3564592136" onChange={ this.getTelefono }></input>
                                </div>
                              </div>

                              <div className="form-group">
                                <label for="provinciaSolicitante" className="col-sm-2 control-label">Provincia Solicitante</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="provinciaSolicitante" placeholder="Córdoba" onChange={ this.getProvincia }></input>
                                </div>
                              </div>

                              <div className="form-group">
                                <label for="localidadSolicitante" className="col-sm-2 control-label">Localidad Solicitante</label>
                                <div className="col-sm-10">
                                  <input type="text" className="form-control" id="localidadSolicitante" placeholder="San Francisco" onChange={ this.getLocalidad }></input>
                                </div>
                              </div>

                              <div className="form-group">
                                <label for="codigoPostalSolicitante" className="col-sm-2 control-label">Código Postal Solicitante</label>
                                <div className="col-sm-10">
                                  <input type="number" className="form-control" id="codigoPostalSolicitante" placeholder="2400" onChange={ this.getCodigo }></input>
                                </div>
                              </div>

                              <div className="form-group">
                                <label for="mensajeSolicitante" className="col-sm-2 control-label">Mensaje</label>
                                <div className="col-sm-10">
                                  <textarea className="form-control" id="mensajeSolicitante" placeholder="Mensaje" onChange={ this.getMensaje }></textarea>
                                </div>
                              </div>

                              <div className="form-group">
                                <label for="cantidad" className="col-sm-2 control-label">Cantidad</label>
                                <div className="col-sm-5">
                                  <input type="number" className="form-control" id="cantidad" placeholder="100" onChange={ this.getCantidad }></input>
                                </div>
                                <div className="col-sm-5">
                                  <select className="form-control" onChange={ this.getUnidad }>
                                    <option>Kilogramos</option>
                                    <option>Metros</option>
                                    <option>Litros</option>
                                    <option>Horas</option>
                                  </select>
                                </div>
                              </div>

                              
                              <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                  <div className="checkbox">
                                    <label>
                                      <input type="checkbox"></input> Acepto <a href="#">términos y condiciones</a>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              
                            </form>
                            <div className="form-group">
                              <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-danger" onClick={ this.onSubmit }>Enviar Solicitud de Presupuesto</button>
                              </div>
                            </div>
                          </div>
                        </div>

                    </div>
                  </div>
                </div>
              </section>

            </section>
        </div>

        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            Anything you want
          </div>
          {/* <!-- Default to the left --> */}
          <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
        </footer>

        <aside className="control-sidebar control-sidebar-dark">
          <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
            <li className="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></a></li>
            <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears"></i></a></li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="control-sidebar-home-tab">
              <h3 className="control-sidebar-heading">Recent Activity</h3>
              <ul className="control-sidebar-menu">
                <li>
                  <a href="javascript:;">
                    <i className="menu-icon fa fa-birthday-cake bg-red"></i>
                    <div className="menu-info">
                        <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>
                        <p>Will be 23 on April 24th</p>
                    </div>
                  </a>
                </li>
              </ul>

              <h3 className="control-sidebar-heading">Tasks Progress</h3>
              <ul className="control-sidebar-menu">
                <li>
                    <a href="javascript:;">
                      <h4 className="control-sidebar-subheading">
                          Custom Template Design
                          <span className="pull-right-container">
                            <span className="label label-danger pull-right">70%</span>
                          </span>
                      </h4>

                      <div className="progress progress-xxs">
                        <div className="progress-bar progress-bar-danger" style={{ "width": "70%" }}></div>
                    </div>
                    </a>
                </li>
              </ul>

            </div>
          
            <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
            <div className="tab-pane" id="control-sidebar-settings-tab">
                <form method="post">
                  <h3 className="control-sidebar-heading">General Settings</h3>

                  <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Report panel usage
                        <input type="checkbox" className="pull-right" checked />
                      </label>

                      <p>
                        Some information about this general settings option
                      </p>
                  </div>
                </form>
            </div>
          </div>
        </aside>
        {/* <!-- /.control-sidebar --> */}
        {/* <!-- Add the sidebar's background. This div must be placed
        immediately after the control sidebar --> */}
        <div className="control-sidebar-bg"></div>
      </div>

    );
  }
}

export default connect(mapStateToProps)(Nuevo)