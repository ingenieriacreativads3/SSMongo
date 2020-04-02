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

      
      <body class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
      <div class="wrapper">
        {/* <!-- Navbar --> */}
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
          {/* <!-- Left navbar links --> */}
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
              <a href="/home/inicio" class="nav-link">INICIO</a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
              <a href="/home/admin" class="nav-link">MI PERFIL</a>
            </li>
            <li class="nav-item d-none d-sm-inline-block">
              <a href="/ingresar" class="nav-link">CERRAR SESION</a>
            </li>
          </ul>
      
         {/*  <!-- SEARCH FORM -->
          <form class="form-inline ml-3">
            <div class="input-group input-group-sm">
              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search">
              <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form> */}
      
          {/* <!-- Right navbar links --> */}
          
        </nav>
        {/* <!-- /.navbar --> */}
    
        {/* <!-- Main Sidebar Container --> */}
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
                  <a href="pages/widgets.html" class="nav-link">
                    <i class="nav-icon  fas fa-barcode"></i>
                    <p>
                      Catálogo
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/widgets.html" class="nav-link">
                    <i class="nav-icon fas  fa-plus"></i>
                    <p>
                      Nuevo Item
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/widgets.html" class="nav-link">
                    <i class="nav-icon fas fa-dollar "></i>
                    <p>
                      Mis compras - Presupuestos
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/widgets.html" class="nav-link">
                    <i class="nav-icon fas fa-shopping-cart"></i>
                    <p>
                      Mis compras - Pedidos
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/widgets.html" class="nav-link">
                    <i class="nav-icon fas fa-dollar "></i>
                    <p>
                      Mis ventas - Presupuestos
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/widgets.html" class="nav-link">
                    <i class="nav-icon fas fa-shopping-cart"></i>
                    <p>
                      Mis ventas - Pedidos
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/widgets.html" class="nav-link">
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

       
      
      
        
      </div>
     
      
     
      </body>
      
    );
  }
}


export default SideBarMenu