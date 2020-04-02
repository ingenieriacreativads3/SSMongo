import React from 'react';
import { Link } from "react-router-dom";
import SideBarMenu from '../../components/SideBarMenu'




import '../Home/shop/css/linearicons.css'
import '../Home/shop/css/owl.carousel.css';
import '../Home/shop/css/font-awesome.min.css';
import '../Home/shop/css/themify-icons.css';
import '../Home/shop/css/nice-select.css';
import '../Home/shop/css/nouislider.min.css';
import '../Home/shop/css/bootstrap.css';
import '../Home/shop/css/main.css'; 

import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'

function mapStateToProps(store) {
  return {
    Item: store.Item,
    idEmpresa: store.Login.data.empresa._id
  };
}

class Nuevo extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.getNombre = this.getNombre.bind(this);
    this.getPrecio = this.getPrecio.bind(this);
    this.getFoto = this.getFoto.bind(this);
    this.getDescripcion = this.getDescripcion.bind(this);
    this.getCaracteristicas = this.getCaracteristicas.bind(this);
    this.getUnidadDeMedida = this.getUnidadDeMedida.bind(this);
    this.getMostrarPrecio = this.getMostrarPrecio.bind(this);
    this.state = {
      Item: {
        nombre: '',
        precio: '',
        foto: '',
        descripcion: '',
        caracteristicas: '',
        unidadDeMedida: '',
        mostrarPrecio: false
      }
    };
  }

  onSubmit() {
    this.props.dispatch(ItemAction.nuevo(this.props.idEmpresa, this.state.Item));
  }

  getNombre(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        nombre: e.target.value
      }
    });

  }

  getPrecio(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        precio: e.target.value
      }
    });

  }

  getFoto(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        foto: e.target.value
      }
    });

  }

  getDescripcion(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        descripcion: e.target.value
      }
    });

  }

  getCaracteristicas(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        caracteristicas: e.target.value
      }
    });

  }

  getUnidadDeMedida(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        unidadDeMedida: e.target.value
      }
    });

  }

  getMostrarPrecio(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        mostrarPrecio: e.target.value
      }
    });

  }

  render(){

    return(
            
      <div class="wrapper">
      {/* <aside class="main-sidebar">
        <section class="sidebar">

         
           <SideBarMenu></SideBarMenu> 

        </section>
      </aside> */}


      <div class="content-wrapper">


      
            <div class="col-lg-5">
                <div class="blog_right_sidebar">
                   
                    <aside class="single_sidebar_widget author_widget">
                        <img class="author_img rounded-circle" src="img/blog/author.png" alt=""></img>
                        <h4>Imagen</h4>
                        <p>Selecciona la foto del item</p>
                        {/* <div class="social_icon">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-github"></i></a>
                            <a href="#"><i class="fa fa-behance"></i></a>
                        </div> */}
                        
                        <div class="br"></div>
                        <input type="file" id="exampleInputFile"></input>
                    </aside>
                    <aside class="single_sidebar_widget popular_post_widget">
                      
                      <div>
                    <a class="primary-btn submit_btn" href="#">Añadir Imagen</a>
                        </div>
                    </aside>
                   
                </div>
            </div>


            <div class="col-lg-7">
              <div class="comment-form">
                    <h4>Nuevo Item</h4>
                    <form>
                        <div class="form-group form-inline">
                            <div class="form-group col-lg-6 col-md-6 name">
                              <input type="text" class="form-control" id="nombreItem" placeholder="Nombre item" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Nombre item'"onChange={ this.getNombre }></input>
                                
                            </div>
                            <div class="form-group col-lg-3 col-md-3 name">
                               <input type="number" class="form-control" id="precioItem" placeholder="Precio" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Precio'" onChange={ this.getPyrecio }></input>
                            </div>
                            <div class="col-md-3 form-group">
                            <div class="creat_account">
                                <input type="checkbox" id="f-option2" name="selector" checked></input>
                                <span>Mostrar precio</span>
                                
                            </div>
                           
                          </div>
                        </div>

                        <div class="form-group form-inline">
                            <div class="col-md-6 form-group p_star">
                            <select class="country_select" id="unidadeDeMedida" onChange={ this.getUnidadDeMedida }>
                                  <option value="1">Kilogramos</option>
                                  <option value="2">Metros</option>
                                  <option value="4">Litros</option>
                                  <option value="4">Horas</option>
                              </select>
                                
                            </div>

                            <div class="col-md-6 text-right">
                              <Link to="/unidadMedida/nuevo"><button type="submit" value="submit" class="primary-btn">Nueva Unidad</button></Link>
                            </div>
                            
                            </div>

                        

                        <div class="form-group">
                            <textarea class="form-control mb-10" rows="5" name="caracteristicas" placeholder="Caracteristicas"
                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Caracteristicas'" required=""onChange={ this.getCaracteristicas }></textarea>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control mb-10" rows="5" name="descripcion" placeholder="Descripción"
                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Descripción'" required=""onChange={ this.getDescripcion }></textarea>
                        </div>
                        
                        <a href="#" class="primary-btn submit_btn">Guardar Item</a>
                    </form>
                </div>
            </div>



        </div>
   
    </div>



    );
  }
}

export default connect(mapStateToProps)(Nuevo)
