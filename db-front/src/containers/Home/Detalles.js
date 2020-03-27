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
import Footer from '../../components/Footer';

function mapStateToProps(store) {
  return {
    idEmpresa: store.Login.data.empresa._id,
  };
}



class Detalles extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
      super(props);
      this.state = {
        
      };
    }

    render(){
        return(
            <body id="DetallesProducto">
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
			<div class="row s_product_inner">
				<div class="col-lg-6">
					<div class="s_Product_carousel">
						<div class="single-prd-item">
							<img class="img-fluid" src="img/category/s-p1.jpg" alt=""></img>
						</div>
						<div class="single-prd-item">
							<img class="img-fluid" src="img/category/s-p1.jpg" alt=""></img>
						</div>
						<div class="single-prd-item">
							<img class="img-fluid" src="img/category/s-p1.jpg" alt=""></img>
						</div>
					</div>
				</div>
				<div class="col-lg-5 offset-lg-1">
					<div class="s_product_text">
						<h3>Faded SkyBlu Denim Jeans</h3>
						<h2>$149.99</h2>
						<ul class="list">
							<li><a class="active" href="#"><span>Categoría</span> : Nombre Categoria</a></li>
							<li><Link to="/home/perfil"><a class="active" href="#"><span>Proveedor</span> : Link perfil proveedor</a></Link></li>
						</ul>
						<p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
							something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
							during the winter.</p>
						
						<div class="card_area d-flex align-items-center">
							<Link to="/presupuesto/nuevo"><a class="primary-btn" href="#">Solicitar Presupuesto </a></Link>
							
						
						</div>
						<div class="card_area d-flex align-items-center">
							
							
						
						</div>

						<div class="card_area d-flex align-items-center">
							
							<Link to="/pedido/nuevo"><a class="primary-btn" href="#">Solicitar Pedido</a></Link> 
						
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<section class="product_description_area">
		<div class="container">
			<ul class="nav nav-tabs" id="myTab" role="tablist">
				{/* <li class="nav-item">
					<a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
					aria-selected="false">Specification</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
					aria-selected="false">Comments</a>
				</li>
				<li class="nav-item">
					<a class="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
					aria-selected="false">Reviews</a>
				</li> */}
			</ul>
		</div>
	</section>
	{/* <!--================End Single Product Area =================--> */}

  
     {/* <!-- start footer Area --> */}
		<Footer></Footer>
	{/* <!-- End footer Area --></li> */}

            </body>
        );
    }
}

export default connect(mapStateToProps)(Detalles)