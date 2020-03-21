import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


class SideBarMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render(){

    return(
        
    <div class="wrapper">
        
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3 style={{color:"#ffba00"}}>Suppliers Store</h3>
            </div>

            <ul class="list-unstyled components">
               
                {/* <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li> */}

                <li>
                <Link to="/home/admin"><a href="#">Mi catálogo</a></Link>
                </li>
                <li>
                <Link to="/item/nuevo"><a href="#">Nuevo Item</a></Link>
                </li>
                <li>
                    <a href="#">Estadísticas actividades comerciales</a>
                </li>
                <li>
                    <a href="#">Estadísticas opiniones de usuarios</a>
                </li>
                <li>
                <Link to="/presupuestos"><a href="#">Mis compras - Presupuestos</a></Link>
                </li>
                <li>
                    <a href="#">Mis compras - Pedidos</a>
                </li>
                <li>
                    <a href="#">Mis ventas - Presupuestos</a>
                </li>
                <li>
                    <a href="#">Mis ventas - Pedidos</a>
                </li>
                <li>
                <Link to="/solicituddevalidacion"><a href="#">Solicitudes de validacion</a></Link>
                </li>
                {/* <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li> */}
                
            </ul>

            
        </nav>

        {/* <!-- Page Content  --> */}
        {/* <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn text-sidebar bg-turbo-yellow">
                        <i class="fas fa-align-left"></i>
                        <span></span>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#" id="item">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" id="item">MI PERFIL</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav> */}
 <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    

            
        </div>
       
    /* 
     <script type="text/javascript">
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            })
        });
    </script>  */

    );

  }
}

export default SideBarMenu