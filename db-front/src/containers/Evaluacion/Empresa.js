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
import '../../components/dist/css/evaluacionEstrellas.css';

import '../Home/shop/css/linearicons.css';
import '../Home/shop/css/linearicons.css';
import '../Home/shop/css/owl.carousel.css';
import '../Home/shop/css/font-awesome.min.css';
import '../Home/shop/css/themify-icons.css';
import '../Home/shop/css/nice-select.css';
import '../Home/shop/css/nouislider.min.css';
import '../Home/shop/css/bootstrap.css';
import '../Home/shop/css/main.css'; 

import { connect } from 'react-redux'

function mapStateToProps(store) {
  return {
    // idEmpresa: store.Login.data.empresa._id,
  };
}

class EvaluacionEmpresa extends React.Component {

 

  render(){

    return(
            <body id="NuevoPresupuesto">
              {/* <!-- Start Header Area -->  */}
	<Header></Header>

{/* <!-- End Header Area -->  */}


{/* <!-- Start Banner Area --> */}
	<Banner></Banner>
	{/* <!-- End Banner Area --> */}

 
	<section class="contact_area section_gap_bottom">
		<div class="container">
        <div class="col-lg-12">
        <div class="box">
          <div class="box-header text-center">
          
          <h1 class="box-title">Evaluación</h1>
          <p>¡Gracias por tu compra! Tu opinión es importante para nosotros</p>

          </div>
        	<form class=""  method="post" id="presupuestoForm" >
          
          <div class="form-group form-inline">
                <div class="col-md-6 form-group p_star">
                <span><p>Empresa</p> </span>
                  <input type="text" class="form-control" id="nombreEmpresa" name="nombreEmpresa" placeholder="Nombre empresa precargado" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Nombre empresa precargado'" disabled="disabled"></input>
                  
                </div>
            </div>
            
            <div class="form-group form-inline">
                <div class="col-md-6 form-group p_star">
                  <p>Tiempo de respuesta a los mensajes/consultas</p>          
                </div>
                <div class="col-md-6 form-group p_star">
                <div class="star-rating">
                  <a href="#">★</a>
                  <a href="#">★</a>
                  <a href="#">★</a>
                  <a href="#">★</a>
                  <a href="#">★</a>
              </div>
             
                </div>
            </div>

            <div class="form-group form-inline">
                <div class="col-md-6 form-group p_star">
                  <p>Relación precio - calidad</p>          
                </div>
                <div class="col-md-6 form-group p_star">
                <div class="star-rating">
                  <a href="#">★</a>
                  <a href="#">★</a>
                  <a href="#">★</a>
                  <a href="#">★</a>
                  <a href="#">★</a>
              </div>
             
                </div>
            </div>
            <div class="form-group form-inline">
                <div class="col-md-6 form-group p_star">
                  <p>Disponibilidad de productos y/o servicios</p>          
                </div>
                <div class="col-md-6 form-group p_star">
                <div class="star-rating">
                  <a href="#">★</a>
                  <a href="#">★</a>
                  <a href="#">★</a>
                  <a href="#">★</a>
                  <a href="#">★</a>
              </div>
             
                </div>
            </div>

            <div class="form-group form-inline">
            <div class="col-md-6 form-group p_star">
                  <p>¿Volvería a operar con esta empresa?</p>          
                </div>
                <div class="col-md-3 form-group p_star">
                <label><input type="radio" ></input>SI</label>
                </div>
                <div class="col-md-3 form-group p_star">
                <label><input type="radio" ></input>NO</label>
                </div>
            </div>
            <div class="form-group col-lg-6 col-md-6 name">
                    <textarea class="form-control mb-10" rows="5" name="mensajeSolicitante" placeholder="Observaciones"
                        onfocus="this.placeholder = ''" onblur="this.placeholder = 'Observaciones'" required="" ></textarea>
                </div> 
              
             
						
                <div class="box-footer">
                    <div class="col-md-12 text-right">
                        <button type="submit" value="submit" class="primary-btn submit_btn">Enviar</button>
                    </div>
                </div>
					</form>
				</div>
			</div>
      </div>
	
	</section>
	


   {/* <!-- start footer Area --> */}
	<Footer></Footer>
	{/* <!-- End footer Area --></li> */}

  </body>
    
    );
  }
}

export default connect(mapStateToProps)(EvaluacionEmpresa)