import React from 'react';
import { Link } from "react-router-dom";




// import '../plugins/jquery/jquery'
// import '../plugins/bootstrap/js/bootstrap.bundle'
// import '../plugins/overlayScrollbars/js/jquery.overlayScrollbars'
// import '../dist/js/adminlte'
// import '../plugins/jquery-mousewheel/jquery.mousewheel'
// import '../dist/js/demo'
// import '../plugins/raphael/raphael'
// import '../plugins/jquery-mapael/jquery.mapael'

// import '../dist/js/pages/dashboard2'
import '../containers/plugins/fontawesome-free/css/all.min.css'
import '../containers/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
import '../containers/dist/css/adminlte.min.css'





class SideBarMenu extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render(){

    return(

      
      
        
    
        //  <!-- Main Sidebar Container --> 
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
          {/* <!-- Brand Logo --> */}
          <a href="index3.html" class="brand-link">
             <img src="../dist/img/logo.png"  class="brand-image img-circle elevation-3"></img> 
            <span class="brand-text font-weight-light">SUPPLIERS STORE</span>
          </a>
      
          {/* <!-- Sidebar --> */}
          <div class="sidebar">
            {/* <!-- Sidebar user panel (optional) --> */}
            {/* <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image"></div>
              <div class="info">
                <a href="#" class="d-block">Nombre Usuario</a>
              </div>
            </div> */}
      
            {/* <!-- Sidebar Menu --> */}
            <nav class="mt-2">
              <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library --> */}
                <li class="nav-item">
                  <a href="/home/admin" class="nav-link">
                    <i class="nav-icon  fas fa-barcode"></i>
                    <p>
                      Catálogo
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/item/nuevo" class="nav-link">
                    <i class="nav-icon fas  fa-plus"></i>
                    <p>
                      Nuevo Item
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/compras/presupuestos" class="nav-link">
                    <i class="nav-icon fas fa-dollar "></i>
                    <p>
                      Mis compras - Presupuestos
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/compras/pedidos" class="nav-link">
                    <i class="nav-icon fas fa-shopping-cart"></i>
                    <p>
                      Mis compras - Pedidos
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/ventas/presupuestos" class="nav-link">
                    <i class="nav-icon fas fa-dollar "></i>
                    <p>
                      Mis ventas - Presupuestos
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/ventas/pedidos" class="nav-link">
                    <i class="nav-icon fas fa-shopping-cart"></i>
                    <p>
                      Mis ventas - Pedidos
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="/solicituddevalidacion" class="nav-link">
                    <i class="nav-icon  fas fa-user-plus"></i>
                    <p>
                      Solicitudes de validación
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- /.sidebar-menu --> */}
          </div>
          {/* <!-- /.sidebar --> */}
        </aside>

       
    );
  }
}


export default SideBarMenu