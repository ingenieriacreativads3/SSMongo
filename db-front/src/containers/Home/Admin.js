import './shop/css/linearicons.css';
import './shop/css/owl.carousel.css';
import './shop/css/font-awesome.min.css';
import './shop/css/themify-icons.css';
import './shop/css/nice-select.css';
import './shop/css/nouislider.min.css';
import './shop/css/bootstrap.css';
import './shop/css/main.css'; 



import React from 'react';
import { Link } from "react-router-dom";

import SideBarMenu from "../../components/SideBarMenu";

import { connect } from 'react-redux'

function mapStateToProps(store) {
  return {
    idEmpresa: store.Login.data.empresa._id,
  };
}

class Admin extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render(){

    return(
            
   
    


     

        //  <!-- Sidebar  --> 
        
        <SideBarMenu></SideBarMenu>


        
   
    );
  }
}

export default connect(mapStateToProps)(Admin)