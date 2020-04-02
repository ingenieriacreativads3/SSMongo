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


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }

  render(){


    return(
    
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
							<Link to="/home/inicio"><li class="nav-item"><a class="nav-link" href="index.html">Home</a></li></Link>
							
							<Link to="/home/admin"><li class="nav-item"><a class="nav-link">Mi perfil</a></li></Link>

							<Link to="/ingresar"><li class="nav-item"><a class="nav-link">Cerrar sesión</a></li></Link>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							
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

    );
  }
}

export default Header



