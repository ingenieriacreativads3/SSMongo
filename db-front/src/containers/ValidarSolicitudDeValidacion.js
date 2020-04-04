/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import SideBarMenu from '../components/SideBarMenu';

import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.min.css';
import './dist/css/skins/skin-blue.min.css';
import './dist/css/skins/_all-skins.min.css';

import '../containers/Home/shop/css/linearicons.css'
import '../containers/Home/shop/css/owl.carousel.css';
import '../containers/Home/shop/css/font-awesome.min.css';
import '../containers/Home/shop/css/themify-icons.css';
import '../containers/Home/shop/css/nice-select.css';
import '../containers/Home/shop/css/nouislider.min.css';
import '../containers/Home/shop/css/bootstrap.css';
import '../containers/Home/shop/css/main.css'; 


import DatosEmpresa from '../components/DatosEmpresa';


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
        
      <SideBarMenu></SideBarMenu>

      {/* <!-- Content Wrapper. Contains page content --> */}
      <div class="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        {/* <section class="content-header">
          <h1>
            General Form Elements
            <small>Preview</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Forms</a></li>
            <li class="active">General Elements</li>
          </ol>
        </section> */}

        {/* <!-- Main content --> */}
        <section class="content">
          <div class="row">
            {/* <!-- left column --> */}
            <div class="col-md-6">

              <div class="box box-warning">
                <div class="box-header with-border">
                 

                  <h3 class="box-title">Empresa</h3>
                </div>
                <DatosEmpresa Empresa={this.props.Empresa}></DatosEmpresa>
              </div>



            </div>
            {/* <!--/.col (left) --> */}
            {/* <!-- right column --> */}
            <div class="col-md-6">

              {/* <!-- general form elements --> */}
              <div class="box box-warning">
                <div class="box-header with-border">
                  <h3 class="box-title">Solicitud { this.state.SolicitudDeValidacion._id }</h3>
                </div>
                {/* <!-- /.box-header --> */}

                {/* <!-- form start --> */}
                <form role="form">
                  <div class="box-body">

                    <div class="form-group">
                      <label>Estado </label>
                      <select onChange={this.getEstado} data-placeholder="En Espera" style={{"width": "100%;"}}>
                        <option>No Validada</option>
                        <option>Validada</option>
                        <option>Autenticada</option>
                        <option>No Autenticada</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label>Rubro</label>
                      <select multiple class="custom-select" onChange={this.getRubro} style={{"width": "100%;"}}>
                        <option>Fab. Plasticos</option>
                        <option>Fab. Indumentaria</option>
                        <option>Serv. Información</option>
                        <option>Serv. Telefonía</option>
                        <option>Agricultura</option>
                      </select>
                    </div>

                    {/* <div class="form-group">
                      <label>Rubros</label>
                      {listaRubro}
                    </div> */}


                  </div>
                  {/* <!-- /.box-body --> */}


                  <div class="box-footer">
                    <a href="https://www.argentina.gob.ar/justicia/registro-nacional-sociedades" target="_blank" class="btn btn-warning btn-lg btn-block" sytle={{"color":"#fff"}}>Validar CUIT</a>
                   
                  </div>

                  <div class="box-footer">
                  <a type="button" href="https://seti.afip.gob.ar/padron-puc-constancia-internet/ConsultaActivEconomicaAction.do" target="_blank" class="btn btn-warning btn-lg btn-block" sytle={{"color":"#fff"}} >Verificar Rubro</a>
                    
                  </div>

                  <div class="box-footer">
                  <div class="col-md-12 text-right">
                    <Link to="/solicituddevalidacion">
                      <button onClick={this.resolver} type="button" class="primary-btn submit_btn">Aceptar</button>
                    </Link>
                  </div>
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
     {/*  <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <b>Version</b> 2.4.18
        </div>
        <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE</a>.</strong> All rights
        reserved.
      </footer> */}

   
      <div class="control-sidebar-bg"></div>
    </div>

    );
  }
}

export default connect(mapStateToProps)(ValidateAccounts);