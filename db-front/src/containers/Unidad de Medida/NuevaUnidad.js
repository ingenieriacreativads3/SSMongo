import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/Footer';

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
  
  <div class="wrapper">

    <div class="content-wrapper">


  {/* <!--================Unidad medidda Area =================--> */}
	<section class="contact_area section_gap_bottom">
		<div class="container">
        <div class="col-lg-12">
          <div class="comment-form">
          
          <h1>Solicitud Unidad de Medida</h1>
        
					<form class=""  method="post" id="unidadMedidaForm" >
						
                        <div class="form-group form-inline">
                            <div class="form-group col-lg-6 col-md-6 name">
                            <input type="text" class="form-control" id="solicitanteUnidad" name="solicitanteUnidad" placeholder="Usuario solicitante precargado" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Nombre empresa solicitante precargado'" disabled="disabled"></input>
                            </div>
                            <div class="form-group col-lg-6 col-md-6 name">
                            <input type="text" class="form-control" id="nombreUnidad" name="nombreUnidad" placeholder="Nombre unidad de medida" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Nombre unidad de medida'" ></input>
                            </div>
                        </div>

                        <div class="form-group form-inline">
                            <div class="form-group col-lg-6 col-md-6 name">
                            <input type="text" class="form-control" id="simboloUnidad" name="simboloUnidad" placeholder="Simbolo" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Simbolo'"></input>
                            </div>
                            <div class="form-group col-lg-6 col-md-6 name">
                            <input type="text" class="form-control" id="magnitudUnidad" name="magnitudUnidad" placeholder="Magnitud" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Magnitud'" ></input>
                            </div>
                        </div>

						<div class="col-md-12 text-right">
							<button type="submit" value="submit" class="primary-btn submit_btn" onClick={ this.onSubmit }>Enviar solicitud</button>
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