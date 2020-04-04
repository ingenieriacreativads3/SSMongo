import React from 'react';
import { Link } from "react-router-dom";

import SideBarMenu from '../../components/SideBarMenu';

import '../../components/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../../components/bower_components/font-awesome/css/font-awesome.min.css';
import '../../components/bower_components/Ionicons/css/ionicons.min.css';
import '../../components/dist/css/AdminLTE.min.css';
import '../../components/dist/css/skins/skin-blue.min.css';
import '../../components/dist/css/skins/_all-skins.min.css';


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



      <SideBarMenu></SideBarMenu>


      <div class="content-wrapper">
      
        
      
            <div class="col-md-5">
            <div class="box box-warning">
                
                <div class="blog_right_sidebar">
                   
                    <aside class="single_sidebar_widget author_widget">
                       
                        <div class="box-header with-border">
                        <img class="author_img rounded-circle" src="img/blog/author.png" alt=""></img>

                      <h3 class="box-title">Imagen</h3>
                      <p>Selecciona la foto del item</p>

                    </div>
                       
                        
                        <div class="br"></div>
                        <input type="file" id="exampleInputFile"></input>
                    </aside>
                    <aside class="single_sidebar_widget popular_post_widget">
                      
                    <div class="box-footer"> 
                    <div class="col-md-12 text-right">
                    <a class="primary-btn submit_btn" href="#">Añadir</a>
                        </div>
                    </div>
                    </aside>
                   
                </div>
                </div>
            </div>


            <div class="col-md-7">
            <div class="box box-warning">
            <div class="box-header with-border">

                      <h3 class="box-title">Nuevo Item</h3>

                    </div>
                       
                    <form>
                        <div class="form-group form-inline">
                            <div class="form-group col-lg-6 col-md-6 name">
                              <input type="text" class="form-control" id="nombreItem" placeholder="Nombre item" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Nombre item'"onChange={ this.getNombre }></input>
                                
                            </div>
                            <div class="form-group col-lg-6 col-md-6 name">
                               <input type="number" class="form-control" id="precioItem" placeholder="Precio" onfocus="this.placeholder = ''"
                                    onblur="this.placeholder = 'Precio'" onChange={ this.getPyrecio }></input>
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

                            <div class="col-md-6 form-group">
                          
                                <input type="checkbox" checked></input>
                                <span>Mostrar precio</span>
                                
                        
                           
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

                        <div class="box-footer">
                        <div class="col-md-6 text-left">
                              <Link to="/unidadMedida/nuevo"><button type="submit" value="submit" class="btn btn-warning btn-lg btn-block">Nueva Unidad</button></Link>
                            </div>
                        <div class="col-md-6 text-right">
                        <a href="#" class="primary-btn submit_btn">Guardar</a>
                        </div>
                        </div>
                    </form>
                </div>
            </div>



        </div>
   
    </div>



    );
  }
}

export default connect(mapStateToProps)(Nuevo)
