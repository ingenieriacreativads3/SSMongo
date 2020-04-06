import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Banner from '../../components/Banner';


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

import * as PresupuestoAction from "../../store/actions/PresupuestoAction";
import { connect } from 'react-redux'

function mapStateToProps(store) {
  return {
    Item: store.Item,
    idEmpresa: store.Login.data.empresa._id
  };
}

class NuevoPresupuesto extends React.Component {

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
            <body id="NuevoPresupuesto">
              {/* <!-- Start Header Area -->  */}
	<Header></Header>

{/* <!-- End Header Area -->  */}


{/* <!-- Start Banner Area --> */}
	<Banner></Banner>
	{/* <!-- End Banner Area --> */}

  {/* <!--================Presupuesto Area =================--> */}
	<section class="contact_area section_gap_bottom">
		<div class="container">
        <div class="col-lg-9">
        <div class="box">
          <div class="box-header text-center">
          
          <h1 class="box-title">Nuevo Presupuesto</h1>

          </div>
       
          
        
        
					<form class=""  method="post" id="presupuestoForm" >
            <div class="form-group form-inline">
                <div class="col-md-6 form-group p_star">
                  <input type="text" class="form-control" id="nombreItem" name="nombreItem" placeholder="Nombre item precargado" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Nombre item precargado'" disabled="disabled"></input>
                </div>
                <div class="col-md-6 form-group p_star">
                  <input type="text" class="form-control" id="solicitante" name="solicitante" placeholder="Usuario solicitante precargado" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Nombre empresa solicitante precargado'" disabled="disabled"></input>
                </div>
            </div>

            <div class="form-group form-inline">

                <div class="col-md-6 form-group p_star">
                  <input type="email" class="form-control" id="emailSolicitante" name="emailSolicitante" placeholder="Email solicitante precargado" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email solicitante precargado'" disabled="disabled"></input>
                </div>
                <div class="col-md-6 form-group p_star">
                  <input type="text" class="form-control" id="telefonoSolicitante" name="telefonoSolicitante" placeholder="Ingrese su telefono" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Ingrese su telefono'" onChange={ this.getTelefono }></input>
                </div>
            </div>

            <div class="form-group form-inline">

                <div class="col-md-6 form-group p_star">
                  <input type="text" class="form-control" id="provinciaSolicitante" name="provinciaSolicitante" placeholder="Ingrese provincia" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Ingrese provincia'" onChange={ this.getProvincia }></input>
                </div>
                <div class="col-md-6 form-group p_star">
                  <input type="text" class="form-control" id="localidadSolicitante" name="localidadSolicitante" placeholder="Ingrese ciudad" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Ingrese ciudad'" onChange={ this.getLocalidad }></input>
                </div>
            </div>

            <div class="form-group form-inline">
                <div class="col-md-6 form-group p_star">
                  <input type="number" class="form-control" id="codigoPostalSolicitante" name="codigoPostalSolicitante" placeholder="Ingrese código postal" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Ingrese código postal'" onChange={ this.getCodigo }></input>
                </div>
                <div class="col-md-6 form-group p_star">
                  <input type="number" class="form-control" id="cantidad" name="cantidad" placeholder="Cantidad" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Cantidad'" onChange={ this.getCantidad }></input>
                </div>
            </div>

            <div class="form-group form-inline">
                <div class="col-md-6 form-group p_star">
                  <select class="country_select" onChange={ this.getUnidad }>
                    <option>Kilogramos</option>
                    <option>Metros</option>
                    <option>Litros</option>
                    <option>Horas</option>
                  </select>
                </div>
            </div>

						<div>
            <div class="form-group col-lg-6 col-md-6 name">
                            <textarea class="form-control mb-10" rows="5" name="mensajeSolicitante" placeholder="Escriba su mensaje"
                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Escriba su mensaje'" required=""onChange={ this.getMensaje }></textarea>
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
	 {/* { <!--================Presupuesto Area =================--></div> }  */}


   {/* <!-- start footer Area --> */}
	<Footer></Footer>
	{/* <!-- End footer Area --></li> */}

  </body>
    
    );
  }
}

export default connect(mapStateToProps)(NuevoPresupuesto)