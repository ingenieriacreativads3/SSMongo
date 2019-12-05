import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.min.css';
import './dist/css/skins/skin-blue.min.css';
import './dist/css/skins/_all-skins.min.css';

class TablaSolicitudValidacion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }

  render(){
    return(
    
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">{ this.props.tituloTabla }</h3>
          </div>
          {/* <!-- /.box-header --> */}
          <div class="box-body">
          <table id="example1" class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Fecha Solicitud</th>
                <th>Cliente</th>
                <th>Cantidad</th>
                <th>Unidad</th>
                <th>Precio</th>
                <th>Estado</th>
                <th>Presupuestar</th>
              </tr>
            </thead>
            <tbody>

              { this.props.lista }

            </tbody>
            <tfoot>
              <tr>
                <th>Fecha Solicitud</th>
                <th>Cliente</th>
                <th>Cantidad</th>
                <th>Unidad</th>
                <th>Precio</th>
                <th>Estado</th>
                <th>Presupuestar</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
       
    );
  }
}

export default TablaSolicitudValidacion