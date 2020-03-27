import React from 'react';
import { Link } from "react-router-dom";
import SideBarMenu from '../../components/SideBarMenu';


import '../Home/shop/css/linearicons.css'
import '../Home/shop/css/owl.carousel.css';
import '../Home/shop/css/font-awesome.min.css';
import '../Home/shop/css/themify-icons.css';
import '../Home/shop/css/nice-select.css';
import '../Home/shop/css/nouislider.min.css';
import '../Home/shop/css/bootstrap.css';
import '../Home/shop/css/main.css'; 

import * as PresupuestoAction from '../../store/actions/PresupuestoAction'

import { connect } from 'react-redux'

function mapStateToProps(store) {
  return {
    Register: store.Register,
    idEmpresa: store.Login.data.empresa._id,
    Presupuestos: store.Presupuestos.data.presupuestos
  };
}

class ListaPedidosCompra extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.path,
      url: this.props.url,  
    };
  }

  componentDidMount() {
    this.props.dispatch(PresupuestoAction.getAll(this.props.idEmpresa))
  }

  render(){

    var lista = [];

    if (this.props.Presupuestos === undefined) {

      lista = [];
      
    } else {

      lista = this.props.Presupuestos.map(presupuesto => {

        var id = '/' + presupuesto._id;

        var direccion = this.state.url + this.state.path + id;

        return(
          <tr>
            <td>{ (presupuesto._id === undefined) ? '_idSolicitud' : presupuesto._id } </td>
            <td>{ (presupuesto.estado === undefined) ? 'NombreCliente' : presupuesto.idEmpresaDemandante }</td>
            <td>{ (presupuesto.fechaCreacionSolicitud === undefined) ? 'Cantidad' : presupuesto.cantidad }</td>
            <td>{ (presupuesto.idUser === undefined) ? 'Unidad' : presupuesto.unidad }</td>
            <td>{ (presupuesto.fechaActualizacionSolicitud === undefined) ? 'Sin cotizar' : presupuesto.precio }</td>
            <td>{ (presupuesto.fechaActualizacionSolicitud === undefined) ? 'En espera' : presupuesto.estado }</td>
            <td><a href={ direccion } >Presupuestar</a></td>
          </tr>
        )
      });
    }

    return(
            
      <div class="wrapper">
        
        <aside class="main-sidebar">
            <section class="sidebar">

             
              <SideBarMenu></SideBarMenu>

            </section>
        </aside>
        
        <div class="content-wrapper">
         
         

          <section class="features-area section_gap">
            <div class="container">
                <div class="row features-inner">
      
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="single-features">
                    <div class="f-icon">
                    <Link to=""><i class="lnr lnr-history"></i></Link>
                    </div>
                    <h6>En Espera</h6>

                  </div>
                </div>
              
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="single-features">
                    <div class="f-icon">
                    <Link to=""><i class="lnr lnr-cross-circle"></i></Link>
                    </div>
                    <h6>Cancelados</h6>
                    
                  </div>
                </div>
              
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="single-features">
                    <div class="f-icon">
                      <Link to=""><i class="lnr lnr-inbox"></i></Link>
                    </div>
                    <h6>Enviados</h6>
                    
                  </div>
                </div>
                
                <div class="col-lg-3 col-md-6 col-sm-6">
                  <div class="single-features">
                    <div class="f-icon">
                    <Link to=""><i class="lnr lnr-checkmark-circle"></i></Link>
                    </div>
                    <h6>Finalizados</h6>
                    
                  </div>
              </div>
                
                </div>
            </div>
          </section>

          <section class="content container-fluid">
            <section class="content">
                <div class="row">
                    <div class="col-xs-12">
                      <div class="box">
                        <div class="box-header">
                          <h3 class="box-title">Mis compras - Pedidos</h3>
                        </div>
                      
                        <div class="box-body">
                          <table  class="table table-bordered table-striped">
                            <thead>
                              <tr>
                                <th>Fecha </th>
                                <th>Vendedor</th>
                                <th>Cantidad</th>
                                <th>Unidad</th>
                                <th>Precio</th>
                                <th>Estado</th>
                               
                              </tr>
                            </thead>
                            <tbody>

                              { this.props.lista }

                            </tbody>
                            
                          </table>
                        </div>
                      </div>
                    </div>
                </div>
            </section>
          </section>

        </div>
      </div>
      
      
    );
  }
}

export default connect(mapStateToProps)(ListaPedidosCompra);