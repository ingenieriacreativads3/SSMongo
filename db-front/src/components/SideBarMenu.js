import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.min.css';
import './dist/css/skins/skin-blue.min.css';
import './dist/css/skins/_all-skins.min.css';

class SideBarMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render(){

    return(

      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">HEADER</li>

        <li className="active"><a href="#"><i className="fa fa-link"></i> <span>Catálogo</span></a></li>
        <li><Link to="/item/nuevo"><i className="fa fa-link"></i> <span>Agregar nuevo Ítem</span></Link></li>
        <li><a href="#"><i className="fa fa-link"></i> <span>Estadísticas y opiniones</span></a></li>
        <li><a href="#"><i className="fa fa-link"></i> <span>Estad. act. comerciales</span></a></li>
        <li><a href="#"><i className="fa fa-link"></i> <span>Compras</span></a></li>
        <li><a href="#"><i className="fa fa-link"></i> <span>Pedidos</span></a></li>
        <li><Link to="/presupuesto/nuevo"><i className="fa fa-link"></i> <span>Nuevo Presupuesto</span></Link></li>
        <li><a href="#"><i className="fa fa-link"></i> <span>Ventas</span></a></li>
        <li><a href="#"><i className="fa fa-link"></i> <span>Pedidos</span></a></li>
        <li><a href="#"><i className="fa fa-link"></i> <span>Presupuestos</span></a></li>
        <li className="treeview">
          <a href="#"><i className="fa fa-link"></i> <span>Multilevel</span>
              <span className="pull-right-container">
                  <i className="fa fa-angle-left pull-right"></i>
              </span>
          </a>
          <ul className="treeview-menu">
              <li><a href="#">Link in level 2</a></li>
              <li><a href="#">Link in level 2</a></li>
          </ul>
        </li>
      </ul>
      
    );

  }
}

export default SideBarMenu