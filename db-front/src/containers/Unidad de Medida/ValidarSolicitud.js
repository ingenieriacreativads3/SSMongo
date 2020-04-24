import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import AppBar from '../../components/AppBar';
import { Input } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

      <div>

      <AppBar></AppBar>  
      
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
                            <Input defaultValue="20" disabled inputProps={{ 'aria-label': 'description' }} color='primary' />
                           
                                
                            </div>
                            <div class="form-group col-lg-3 col-md-3 name">
                            <Input defaultValue="'03/04/2020'" disabled inputProps={{ 'aria-label': 'description' }} color='primary' />
                               
                            </div>
                            
                        </div>

                        <div class="form-group form-inline">

                        <div class="form-group col-lg-3 col-md-3 name">
                        <Input defaultValue="'Empresa'" disabled inputProps={{ 'aria-label': 'description' }} color='primary' />
                              
                            </div>

                        <div class="form-group col-lg-3 col-md-3 name">
                        <Input placeholder="Metro cuadrado" inputProps={{ 'aria-label': 'description' }} color='primary' />
                           
                        </div>
                            
                            </div>

                            <div class="form-group form-inline">

                            <div class="form-group col-lg-3 col-md-3 name">
                            <Input placeholder="M2" inputProps={{ 'aria-label': 'description' }} color='primary' />
                                  
                                </div>

                            <div class="form-group col-lg-3 col-md-3 name">
                            <Input placeholder="Superficie" inputProps={{ 'aria-label': 'description' }} color='primary' />
                           
                            </div>
                                
                                </div>

                            <div class="form-group form-inline">
                            <div class="col-md-6 form-group p_star">

                            <FormControl>
                            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              // onChange={}
                            >
                              <MenuItem value={1}>No Resuelta</MenuItem>
                              <MenuItem value={2}>Resuelta</MenuItem>
                             
                            </Select>
                          </FormControl>
                                
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