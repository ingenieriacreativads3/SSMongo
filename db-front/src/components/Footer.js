import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


import '../containers/Home/shop/css/linearicons.css';
import '../containers/Home/shop/css/linearicons.css';
import '../containers/Home/shop/css/owl.carousel.css';
import '../containers/Home/shop/css/font-awesome.min.css';
import '../containers/Home/shop/css/themify-icons.css';
import '../containers/Home/shop/css/nice-select.css';
import '../containers/Home/shop/css/nouislider.min.css';
import '../containers/Home/shop/css/bootstrap.css';
import '../containers/Home/shop/css/main.css'; 


class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }

  render(){


    return(
    
        <footer class="footer-area section_gap">
        <div class="container">
            <div class="row">
                <div class="col-lg-6  col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h6>Sobre nosotros</h6>
                        <p>
                            En esta plataforma podras encontrar de manera rápida y sencilla a tus proveedores. 
                            Registrate, Ingresá y comenzá a hacer tus pedidos. 
                        </p>
                    </div>
                </div>
                {/* <div class="col-lg-4  col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h6>Newsletter</h6>
                        <p>Stay update with our latest</p>
                        <div class="" id="mc_embed_signup">
    
                            <form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                             method="get" class="form-inline">
    
                                <div class="d-flex flex-row">
    
                                    <input class="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email '"
                                     required="" type="email"></input>
    
    
                                    <button class="click-btn btn btn-default"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
                                    <div style={{position: "absolute", left:"-5000px"}} >
                                        <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text"></input>
                                    </div>
    
                                         <div class="col-lg-4 col-md-4">
                                                    <button class="bb-btn btn"><span class="lnr lnr-arrow-right"></span></button>
                                                </div>  
                                </div>
                                <div class="info"></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3  col-md-6 col-sm-6">
                    <div class="single-footer-widget mail-chimp">
                        <h6 class="mb-20">Instragram Feed</h6>
                        <ul class="instafeed d-flex flex-wrap">
                            <li><img src="img/i1.jpg" alt=""></img></li>
                            <li><img src="img/i2.jpg" alt=""></img></li>
                            <li><img src="img/i3.jpg" alt=""></img></li>
                            <li><img src="img/i4.jpg" alt=""></img></li>
                            <li><img src="img/i5.jpg" alt=""></img></li>
                            <li><img src="img/i6.jpg" alt=""></img></li>
                            <li><img src="img/i7.jpg" alt=""></img></li>
                            <li><img src="img/i8.jpg" alt=""></img></li>
                        </ul>
                    </div>
                </div> */}
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h6>¿Por qué elegirnos?</h6>
                        <div class="contact_info">
                        <div class="info_item">
							<i class="lnr lnr-checkmark-circle"></i>
							
							<p>Todas las empresas de esta plataforma, estan legalmente verificadas</p>
						</div>
                        <div class="info_item">
							<i class="lnr lnr-checkmark-circle"></i>
							
							<p>Amplia oferta de productos y servicios</p>
						</div>
                        <div class="info_item">
							<i class="lnr lnr-checkmark-circle"></i>
							
							<p>Perfil personalizado, con estadísticas acerca de tus negocios en la plataforma</p>
						</div>
                        </div>
                        {/* <div class="footer-social d-flex align-items-center">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="#"><i class="fa fa-behance"></i></a>
                        </div> */}
                    </div>
                </div>
            </div>
           {/*  <div class="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                <p class="footer-text m-0"> Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
     Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. 
    </p>
            </div> */}
        </div>
    </footer>
    );
  }
}

export default Footer



