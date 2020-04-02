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
                        <h3 class="box-title">Solicitudes de Validacion</h3>
                        </div>
                        {/* <!-- /.box-header --> */}
                        <div class="box-body">
                        <table class="table table-bordered table-striped">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Fecha Solicitud</th>
                                <th>Empresa</th>
                                <th>Fecha de Actualización</th>
                                <th>Estado</th>
                                
                              </tr>
                            </thead>
                            <tbody>

                              { this.props.solicitudValidacion }

                            </tbody>
                           {/*  <tfoot>
                              <tr>
                                <th>ID</th>
                                <th>Estado</th>
                                <th>Fecha Solicitud</th>
                                <th>Empresa</th>
                                <th>Fecha de Actualización</th>
                                
                              </tr>
                            </tfoot> */}
                        </table>
                        </div>
                        {/* <!-- /.box-body --> */}
                    </div>
       
    );
  }
}

export default TablaSolicitudValidacion