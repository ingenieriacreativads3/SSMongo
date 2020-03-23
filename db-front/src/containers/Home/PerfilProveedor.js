import React from 'react';
import './shop/css/linearicons.css';
import './shop/css/owl.carousel.css';
import './shop/css/font-awesome.min.css';
import './shop/css/themify-icons.css';
import './shop/css/nice-select.css';
import './shop/css/nouislider.min.css';
import './shop/css/bootstrap.css';
import './shop/css/main.css'; 
import './shop/css/ion.rangeSlider.css';
import './shop/css/ion.rangeSlider.skinFlat.css';




import { connect } from 'react-redux'
import { Link } from "react-router-dom";

function mapStateToProps(store) {
  return {
    idEmpresa: store.Login.data.empresa._id,
  };
}



class PerfilProveedor extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }

    render(){
        return(
            <body id="PerfilProveedor">
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


	{/* <!--================Single Product Area =================--> */}
	<div class="product_image_area">
		<div class="container">
            <h1>Nombre empresa</h1>
            <br></br>
			<div class="row s_product_inner">
				<div class="col-lg-6">
                <h4>¿Quienes somos?</h4>
					<p>
                    Somos una empresa dedicada a vender y promover productos 
                    dirigidos al entretenimiento de las personas. 
                    Con más de 20 años de experiencia, y convencidos de ser 
                    líderes de nuestro mercado, somos una empresa joven, 
                    responsable, llena de creatividad y entusiasmo 
                    que trabaja con la finalidad de servir a nuestros clientes, 
                    con la misión de exceder sus expectativas y 
                    buscando generar experiencias para lograr conectar de 
                    una manera acertiva con ellos, a fin de poder conocer sus necesidades 
                    e intereses,  y así poder orientarlos en lo que refiere 
                    a sus áreas de juego y entretenimiento.
                    </p>
				</div>
				<div class="col-lg-5 offset-lg-1">
                <div class="contact_info">
						<div class="info_item">
							<i class="lnr lnr-home"></i>
							<h6>California, United States</h6>
							<p>Santa monica bullevard</p>
						</div>
						<div class="info_item">
							<i class="lnr lnr-phone-handset"></i>
							<h6><a href="#">00 (440) 9865 562</a></h6>
							<p>Mon to Fri 9am to 6 pm</p>
						</div>
						<div class="info_item">
							<i class="lnr lnr-envelope"></i>
							<h6><a href="#">support@colorlib.com</a></h6>
							<p>Send us your query anytime!</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<section class="owl-carousel active-product-area section_gap">
		{/* <!-- single product slide --> */}
		<div class="single-product-slider">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-6 text-center">
						<div class="section-title">
							<h1>Nuestros productos</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
								dolore
								magna aliqua.</p>
						</div>
					</div>
				</div>
				<div class="row">
					{/* <!-- single product --> */}
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
							<div class="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<div class="prd-bottom">

									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
							<div class="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<div class="prd-bottom">

									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
							<div class="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<div class="prd-bottom">

									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
							<div class="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<div class="prd-bottom">

									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
							<div class="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<div class="prd-bottom">

									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
							<div class="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<div class="prd-bottom">

									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>		

		<div class="single-product-slider">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-6 text-center">
						<div class="section-title">
							<h1>Nuestros productos</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
								dolore
								magna aliqua.</p>
						</div>
					</div>
				</div>
				<div class="row">
					{/* <!-- single product --> */}
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
							<div class="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<div class="prd-bottom">

									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
							<div class="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<div class="prd-bottom">

									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
							<div class="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<div class="prd-bottom">

									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
							<div class="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<div class="prd-bottom">

									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
							<div class="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<div class="prd-bottom">

									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					{/* <!-- single product --> */}
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="img/product/p1.jpg" alt=""></img>
							<div class="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div class="price">
									<h6>$150.00</h6>
									<h6 class="l-through">$210.00</h6>
								</div>
								<div class="prd-bottom">

									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
									
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</div>		
		

	</section>


	<section class="product_description_area">
		<div class="container">
                <div class="col-lg-10">
					<div class="comment-form">
          
		  			<h2>Contactanos</h2>
		  
					<form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
						<div class="col-md-6">
							<div class="form-group">
								<input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingrese su nombre" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Ingrese su nombre'"></input>
							</div>
							<div class="form-group">
								<input type="email" class="form-control" id="email" name="email" placeholder="Ingrese su email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Ingrese su email'"></input>
							</div>
							
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<textarea class="form-control" name="mensaje" id="mensaje" rows="1" placeholder="Escriba su mensaje" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Escriba su mensaje'"></textarea>
							</div>
						</div>
						<div class="col-md-12 text-right">
							<button type="submit" value="submit" class="primary-btn">Enviar mensaje</button>
						</div>
					</form>
					</div>
				</div>
				</div>

	
	</section>
	{/* <!--================End Single Product Area =================--> */}

  
     {/* <!-- start footer Area --> */}
	<footer class="footer-area section_gap">
		<div class="container">
			<div class="row">
				<div class="col-lg-3  col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h6>About Us</h6>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
							magna aliqua.
						</p>
					</div>
				</div>
				<div class="col-lg-4  col-md-6 col-sm-6">
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

									{/* <!-- <div class="col-lg-4 col-md-4">
													<button class="bb-btn btn"><span class="lnr lnr-arrow-right"></span></button>
												</div>  --> */}
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
				</div>
				<div class="col-lg-2 col-md-6 col-sm-6">
					<div class="single-footer-widget">
						<h6>Follow Us</h6>
						<p>Let us be social</p>
						<div class="footer-social d-flex align-items-center">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-dribbble"></i></a>
							<a href="#"><i class="fa fa-behance"></i></a>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
				<p class="footer-text m-0">{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
</p>
			</div>
		</div>
	</footer>
	{/* <!-- End footer Area --></li> */}

	<script src="./shop/js/owl.carousel.min.js"></script>
	<script src="./shop/js/main.js"></script>
	<script src="js/vendor/bootstrap.min.js"></script>
	<script src="js/vendor/jquery-2.2.4.min.js"></script>

            </body>
        );
    }
}

export default connect(mapStateToProps)(PerfilProveedor)