import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import UserPanel from "../../components/UserPanel";
import SearchForm from "../../components/SearchForm";
import SideBarMenu from '../../components/SideBarMenu'

import '../bower_components/bootstrap/dist/css/bootstrap.min.css'
import '../bower_components/font-awesome/css/font-awesome.min.css'
import '../bower_components/Ionicons/css/ionicons.min.css'
import '../dist/css/AdminLTE.min.css'
import '../dist/css/skins/_all-skins.min.css'

import * as ItemAction from "../../store/actions/ItemAction";
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
    this.getNombre = this.getNombre.bind(this);
    this.getPrecio = this.getPrecio.bind(this);
    this.getFoto = this.getFoto.bind(this);
    this.getDescripcion = this.getDescripcion.bind(this);
    this.getCaracteristicas = this.getCaracteristicas.bind(this);
    this.getUnidadDeMedida = this.getUnidadDeMedida.bind(this);
    this.getMostrarPrecio = this.getMostrarPrecio.bind(this);
    this.state = {
      Item: {
        nombre: '',
        precio: '',
        foto: '',
        descripcion: '',
        caracteristicas: '',
        unidadDeMedida: '',
        mostrarPrecio: false
      }
    };
  }

  onSubmit() {
    this.props.dispatch(ItemAction.nuevo(this.props.idEmpresa, this.state.Item));
  }

  getNombre(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        nombre: e.target.value
      }
    });

  }

  getPrecio(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        precio: e.target.value
      }
    });

  }

  getFoto(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        foto: e.target.value
      }
    });

  }

  getDescripcion(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        descripcion: e.target.value
      }
    });

  }

  getCaracteristicas(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        caracteristicas: e.target.value
      }
    });

  }

  getUnidadDeMedida(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        unidadDeMedida: e.target.value
      }
    });

  }

  getMostrarPrecio(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        mostrarPrecio: e.target.value
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
                  Item
                  <small>Nuevo</small>
              </h1>
              <ol className="breadcrumb">
                  <li><a href="#"><i className="fa fa-dashboard"></i>Empresa</a></li>
                  <li><a href="#">Item</a></li>
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

                        <h3 className="profile-username text-center">Elegir una Imagen</h3>

                        <div className="form-group">
                          <label for="exampleInputFile">Imagen</label>
                          <input type="file" id="exampleInputFile"></input>
                          <p className="help-block">Elegir una imagen</p>
                        </div>

                        <a href="#" className="btn btn-primary btn-block"><b>Añadir</b></a>
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
                              <label for="nombreItem" className="col-sm-2 control-label">Nombre</label>
                              <div className="col-sm-10">
                                <input type="text" className="form-control" id="nombreItem" placeholder="Nombre" onChange={ this.getNombre }></input>
                              </div>
                            </div>

                            <div className="form-group">
                              <label for="precioItem" className="col-sm-2 control-label">Precio</label>
                              <div className="col-sm-10">
                                <input type="number" className="form-control" id="nombreItem" placeholder="Precio" onChange={ this.getPrecio }></input>
                              </div>
                            </div>

                            <div className="form-group">
                              <label for="mostrarPrecio" className="col-sm-2 control-label">Mostrar Precio</label>
                              <div className="checkbox col-sm-10">
                                <label>
                                  <input type="checkbox" id="mostrarPrecio"></input>
                                </label>
                              </div>
                            </div>

                            <div className="form-group">
                              <label for="unidadeDeMedida" className="col-sm-2 control-label">Unidad de Medida</label>
                              <div className="col-sm-5">
                                <select className="form-control" id="unidadeDeMedida">
                                  <option>Kilogramos</option>
                                  <option>Metros</option>
                                  <option>Litros</option>
                                  <option>Horas</option>
                                </select>
                              </div>
                            </div>

                            <div className="form-group">
                              <label for="caracteristicas" className="col-sm-2 control-label">Características</label>
                              <div className="col-sm-10">
                                <textarea className="form-control" id="caracteristicas" placeholder="Características" onChange={ this.getCaracteristicas }></textarea>
                              </div>
                            </div>

                            <div className="form-group">
                              <label for="descripcion" className="col-sm-2 control-label">Descripción</label>
                              <div className="col-sm-10">
                                <textarea className="form-control" id="descripcion" placeholder="Descripción" onChange={ this.getDescripcion }></textarea>
                              </div>
                            </div>

                            
                          </form>

                          <div className="form-group">
                              <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-danger" onClick={ this.onSubmit }>Nuevo Producto</button>
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
