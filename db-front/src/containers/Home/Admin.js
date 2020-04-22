import './shop/css/linearicons.css';
import './shop/css/owl.carousel.css';
import './shop/css/font-awesome.min.css';
import './shop/css/themify-icons.css';
import './shop/css/nice-select.css';
import './shop/css/nouislider.min.css';
import './shop/css/bootstrap.css';
import './shop/css/main.css'; 

import React from 'react';
import { Link } from "react-router-dom";

import SideBarMenu from "../../components/SideBarMenu";

import { connect } from 'react-redux'

function mapStateToProps(store) {
  return {
    idEmpresa: store.Login.data.empresa._id,
  };
}

class Admin extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render(){


    return(
            
   
      <div class="wrapper">

			<SideBarMenu></SideBarMenu>

        <div class="content-wrapper">

        <div class="col-xl-9 col-lg-8 col-md-12">
				{/* <!-- Start Filter Bar --> */}
				<div class="filter-bar d-flex flex-wrap align-items-center">
					<div class="sorting">
						<select>
							<option value="1">De menor a mayor precio</option>
							<option value="1">Productos mas vendidos</option>
						
						</select>
					</div>
					<div class="sorting mr-auto">
						<select>
							<option value="1">10</option>
							<option value="1">50</option>
							<option value="1">Todos</option>
						</select>
					</div>
					<div class="pagination">
						<a href="#" class="prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>
						<a href="#" class="active">1</a>
						<a href="#">2</a>
						<a href="#">3</a>
						<a href="#" class="dot-dot"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
						<a href="#">6</a>
						<a href="#" class="next-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
					</div>
				</div>
				{/* <!-- End Filter Bar --> */}
				{/* <!-- Start Best Seller --> */}
				<section class="lattest-product-area pb-40 category-list">
					<div class="row">
						{/* <!-- single product --> */}
						<div class="col-lg-4 col-md-6">
							<div class="single-product">
								<img class="img-fluid" src="../../shop/img/product/p1.jpg" alt=""></img>
								<div class="product-details">
									<h6>addidas New Hammer sole
										for Sports person</h6>
									<div class="price">
										<h6>$150.00</h6>
										
									</div>
									<div class="prd-bottom">

										<Link to="/item/editar">
										<a href="" class="social-info">
											<span class="lnr lnr-pencil"></span>
											<p class="hover-text">Editar</p>
										</a>
										</Link>
									
										<Link to="/home/detalles">
										<a href="" class="social-info">
											<span class="lnr lnr-trash"></span>
											<p class="hover-text">Eliminar</p>
										</a>
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- single product --> */}
						<div class="col-lg-4 col-md-6">
							<div class="single-product">
								<img class="img-fluid" src="../../shop/img/product/p1.jpg" alt=""></img>
								<div class="product-details">
									<h6>addidas New Hammer sole
										for Sports person</h6>
									<div class="price">
										<h6>$150.00</h6>
										
									</div>
									<div class="prd-bottom">

										<Link to="/item/editar">
										<a href="" class="social-info">
											<span class="lnr lnr-pencil"></span>
											<p class="hover-text">Editar</p>
										</a>
										</Link>
										<Link to="/home/detalles">
										<a href="" class="social-info">
											<span class="lnr lnr-trash"></span>
											<p class="hover-text">Eliminar</p>
										</a>
										</Link>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- single product --> */}
						<div class="col-lg-4 col-md-6">
							<div class="single-product">
								<img class="img-fluid" src="../../shop/img/product/p1.jpg" alt=""></img>
								<div class="product-details">
									<h6>addidas New Hammer sole
										for Sports person</h6>
									<div class="price">
										<h6>$150.00</h6>
										
									</div>
									<div class="prd-bottom">

										<Link to="/item/editar">
										<a href="" class="social-info">
											<span class="lnr lnr-pencil"></span>
											<p class="hover-text">Editar</p>
										</a>
										</Link>
										<Link to="/home/detalles">
										<a href="" class="social-info">
											<span class="lnr lnr-trash"></span>
											<p class="hover-text">Eliminar</p>
										</a>
										</Link>
									</div>
								</div>
							</div>
						</div>
						
						
					</div>
				</section>
				{/* <!-- End Best Seller --> */}
				{/* <!-- Start Filter Bar --> */}
				<div class="filter-bar d-flex flex-wrap align-items-center">
					<div class="sorting mr-auto">
						<select>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
							<option value="1">Show 12</option>
						</select>
					</div>
					<div class="pagination">
						<a href="#" class="prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>
						<a href="#" class="active">1</a>
						<a href="#">2</a>
						<a href="#">3</a>
						<a href="#" class="dot-dot"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a>
						<a href="#">6</a>
						<a href="#" class="next-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
					</div>
				</div>
				{/* <!-- End Filter Bar --> */}
			</div>

        </div>

      </div>
     
    
         
        
       

        
     
        
   
    );
  }
}

export default connect(mapStateToProps)(Admin)