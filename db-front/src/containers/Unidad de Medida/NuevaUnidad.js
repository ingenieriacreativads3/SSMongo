import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../../components/Footer';

import '../bower_components/bootstrap/dist/css/bootstrap.min.css'
import '../bower_components/font-awesome/css/font-awesome.min.css'
import '../bower_components/Ionicons/css/ionicons.min.css'
import '../dist/css/AdminLTE.min.css'
import '../dist/css/skins/_all-skins.min.css'


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
              {/* <!-- Start Header Area -->  */}
	<header class="header_area sticky-header">
		<div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light main_box">
				<div class="container">
				{/* 	<!-- Brand and toggle get grouped for better mobile display --> */}
					<a class="navbar-brand logo_h" href="index.html"><img src="shop/img/logo.png" alt=""></img></a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
				{/* 	<!-- Collect the nav links, forms, and other content for toggling --> */}
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul class="nav navbar-nav menu_nav ml-auto">
							<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
							
							<li class="nav-item"><a class="nav-link" href="contact.html">Mi perfil</a></li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li class="nav-item"><a href="#" class="cart"><span class="ti-bag"></span></a></li>
							<li class="nav-item">
								<button class="search"><span class="lnr lnr-magnifier" id="search"></span></button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		<div class="search_input" id="search_input_box">
			<div class="container">
				<form class="d-flex justify-content-between">
					<input type="text" class="form-control" id="search_input" placeholder="Buscar"></input>
					<button type="submit" class="btn"></button>
					<span class="lnr lnr-cross" id="close_search" title="Close Search"></span>
				</form>
			</div>
		</div>
	</header>

{/* <!-- End Header Area -->  */}


{/* <!-- Start Banner Area --> */}
	<section class="banner-area organic-breadcrumb">
		<div class="container">
			<div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
				<div class="col-first">
					<h1>Suppliers Store</h1>
					{/* <nav class="d-flex align-items-center">
						<a href="index.html">Home<span class="lnr lnr-arrow-right"></span></a>
						<a href="#">Shop<span class="lnr lnr-arrow-right"></span></a>
						<a href="category.html">Fashon Category</a>
					</nav> */}
				</div>
			</div>
		</div>
	</section>
	{/* <!-- End Banner Area --> */}

  {/* <!--================Unidad medidda Area =================--> */}
	<section class="contact_area section_gap_bottom">
		<div class="container">
        <div class="col-lg-9">
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


  
     {/* <!-- start footer Area --> */}
     <Footer></Footer>
	{/* <!-- End footer Area --></li> */}


  </body>
    
    );
  }
}

export default connect(mapStateToProps)(NuevaUnidad)