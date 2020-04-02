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


class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }

  render(){


    return(
    
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

    );
  }
}

export default Banner