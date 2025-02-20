import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/Footer';
import AppBar from './../../components/AppBar'
import { Input } from '@material-ui/core';

import '../../components/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../../components/bower_components/font-awesome/css/font-awesome.min.css';
import '../../components/bower_components/Ionicons/css/ionicons.min.css';
import '../../components/dist/css/AdminLTE.min.css';
import '../../components/dist/css/skins/skin-blue.min.css';
import '../../components/dist/css/skins/_all-skins.min.css';


import '../Home/shop/css/linearicons.css';
import '../Home/shop/css/linearicons.css';
import '../Home/shop/css/owl.carousel.css';
import '../Home/shop/css/font-awesome.min.css';
import '../Home/shop/css/themify-icons.css';
import '../Home/shop/css/nice-select.css';
import '../Home/shop/css/nouislider.min.css';
import '../Home/shop/css/bootstrap.css';
import '../Home/shop/css/main.css'; 

// import * as PresupuestoAction from "../../store/actions/PresupuestoAction";
import { connect } from 'react-redux'


function mapStateToProps(store) {
  return {
    Item: store.Item,
    idEmpresa: store.Login.data.empresa._id
  };
}

class NuevaUnidad extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  /* constructor(props) {
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
 
  }*/

  render(){

    return(
            <body id="NuevoUnidad">
  
  <div>

    <AppBar></AppBar>

    <div class="content-wrapper">


  {/* <!--================Unidad medida Area =================--> */}
	<section class="contact_area section_gap_bottom">
		<div class="container">
        <div class="col-md-12">
         <div class="box box-warning">
         <div class="box-header with-border">
             <h3 class="box-title">Solicitud Unidad de Medida</h3>
           </div>
          
					<form class=""  method="post" id="unidadMedidaForm" >
						
                        <div class="form-group form-inline">
                            <div class="form-group col-lg-6 col-md-6 name">
 
                            <Input defaultValue="Usuario solicitante" disabled inputProps={{ 'aria-label': 'description' }} color='primary' />
                            </div>
                            <div class="form-group col-lg-6 col-md-6 name">
                            <Input placeholder="Nombre" inputProps={{ 'aria-label': 'description' }} color='primary' />
                            
                            </div>
                        </div>

                        <div class="form-group form-inline">
                            <div class="form-group col-lg-6 col-md-6 name">
                            <Input placeholder="Simbolo" inputProps={{ 'aria-label': 'description' }} color='primary' />
                            
                            </div>
                            
                            <div class="form-group col-lg-6 col-md-6 name">
                            <Input placeholder="Magnitud" inputProps={{ 'aria-label': 'description' }} color='primary' />
                          
                            </div>
                        </div>

            <div class="box-footer">
						<div class="col-md-12 text-right">
							<button type="submit" value="submit" class="primary-btn submit_btn" onClick={ this.onSubmit }>Enviar solicitud</button>
						</div>
            </div>
					</form>
          </div>
        </div>
        </div>
	
	</section>
	 {/* { <!--================Unidad medida Area =================--></div> }  */}

      </div>

      </div>
  
    


  </body>
    
    );
  }
}

export default connect(mapStateToProps)(NuevaUnidad)