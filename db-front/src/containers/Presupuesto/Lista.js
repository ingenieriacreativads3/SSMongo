import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/header";
import UserPanel from "../../components/user-panel";
import SearchForm from "../../components/search-form";
import Tabla from '../../components/TablaPresupuestos';
import SideBarMenu from '../../components/SideBarMenu';

import * as PresupuestoAction from '../../store/actions/PresupuestoAction'

import { connect } from 'react-redux'

function mapStateToProps(store) {
  return {
    Register: store.Register,
    idEmpresa: store.Login.data.empresa._id,
    Presupuestos: store.Presupuestos.data.presupuestos
  };
}

class Lista extends React.Component {

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
          
          <section class="content container-fluid">
            <section class="content">
                <div class="row">
                    <div class="col-xs-12">
                      <Tabla
                        lista={ lista }
                        tituloTabla="Lista">
                      </Tabla>
                    </div>
                </div>
            </section>
          </section>
        </div>
        
        <div class="control-sidebar-bg"></div>
      </div>

    );
  }
}

export default connect(mapStateToProps)(Lista);