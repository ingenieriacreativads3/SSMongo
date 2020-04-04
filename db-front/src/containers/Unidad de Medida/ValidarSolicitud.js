import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import SideBarMenu from '../../components/SideBarMenu';

import '../../components/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../../components/bower_components/font-awesome/css/font-awesome.min.css';
import '../../components/bower_components/Ionicons/css/ionicons.min.css';
import '../../components/dist/css/AdminLTE.min.css';
import '../../components/dist/css/skins/skin-blue.min.css';
import '../../components/dist/css/skins/_all-skins.min.css';


import '../Home/shop/css/linearicons.css'
import '../Home/shop/css/owl.carousel.css';
import '../Home/shop/css/font-awesome.min.css';
import '../Home/shop/css/themify-icons.css';
import '../Home/shop/css/nice-select.css';
import '../Home/shop/css/nouislider.min.css';
import '../Home/shop/css/bootstrap.css';
import '../Home/shop/css/main.css'; 




import { connect } from 'react-redux'

// import * as apiWork from '../store/actions/apiWork';
// import * as loginActions from '../store/actions/LoginAction';
// import * as update from '../store/actions/LoginAction';
// import * as SolicitudDeValidacionAction from '../store/actions/SolicitudDeValidacionAction'

function mapStateToProps(store) {
  return {
    login: store.login,
    apiWork: store.apiWork,
    update: store.updateToken,
    // SolicitudDeValidacion: store.SolicitudDeValidacion.data.solicitudDeValidacion,
    Empresa: store.SolicitudDeValidacion.data.empresa
  };
}

class AgregarUnidadMedida extends React.Component {

  /* constructor(props, context) {
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

  } */

  

  getEstado(e){
    this.setState({
      estado : e.target.value
    });
  }

  async componentDidMount() {

    // await this.props.dispatch(SolicitudDeValidacionAction.get(this.props.match.params.id))

  }

  render(){

    return(

      <div class="wrapper">
        
      <SideBarMenu></SideBarMenu>

      {/* <!-- Content Wrapper. Contains page content --> */}
      <div class="content-wrapper">
       

        {/* <!-- Main content --> */}
        <section class="content">
          <div class="row">
            {/* <!-- left column --> */}
            <div class="col-md-12">
          
              <div class="box box-warning">
              <div class="box-header with-border">
                  <h3 class="box-title">Solicitud Unidad de Medida</h3>
                </div>
                   
                    <form>
                    <div class="box-body">
                        <div class="form-group form-inline">
                            <div class="form-group col-lg-6 col-md-6 name">
                              <input type="text" class="form-control" id="IDsolicitud" placeholder="20" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = '20'" disabled="disabled"></input>
                                
                            </div>
                            <div class="form-group col-lg-3 col-md-3 name">
                               <input type="text" class="form-control" id="fechaSolicitud" placeholder="03/04/2020" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = '03/04/2020'" disabled="disabled"></input>
                            </div>
                            
                        </div>

                        <div class="form-group form-inline">

                        <div class="form-group col-lg-3 col-md-3 name">
                               <input type="text" class="form-control" id="EmpresaSolicitante" placeholder="Empresa" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Empresa'" disabled="disabled"></input>
                            </div>

                        <div class="form-group col-lg-3 col-md-3 name">
                            <input type="text" class="form-control" id="nombreUnidad" placeholder="Nombre Unidad" onfocus="this.placeholder = ''"
                                onblur="this.placeholder = 'Nombre Unidad'"></input>
                        </div>
                            

                            
                            </div>

                            <div class="form-group form-inline">

                            <div class="form-group col-lg-3 col-md-3 name">
                                  <input type="text" class="form-control" id="simboloUnidad" placeholder="Simbolo" onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Simbolo'"></input>
                                </div>

                            <div class="form-group col-lg-3 col-md-3 name">
                                <input type="text" class="form-control" id="magnitudUnidad" placeholder="Magnitud" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Magnitud'"></input>
                            </div>
                                

                                
                                </div>

                            <div class="form-group form-inline">
                            <div class="col-md-6 form-group p_star">
                            <select class="country_select" id="estado" >
                                  <option value="1">No resuelta</option>
                                  <option value="2">Resuelta</option>
                                 
                              </select>
                                
                            </div>
                            </div>

                        
                        <div class="col-md-12 text-right">
                        <a href="#" class="primary-btn submit_btn ">Aceptar</a>
                        </div>

                    </div>
                    </form>
                </div>
            </div>
              



            
            {/* <!--/.col (left) --> */}
            {/* <!-- right column --> */}
           
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

export default connect(mapStateToProps)(AgregarUnidadMedida);