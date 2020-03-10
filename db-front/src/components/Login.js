/* eslint-disable jsx-a11y/anchor-is-valid */
import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.min.css';
import './plugins/iCheck/square/blue.css';

import './dist/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './dist/fonts/iconic/css/material-design-iconic-font.min.css';
import './dist/vendor/animate/animate.css';
import './dist/vendor/css-hamburgers/hamburgers.min.css';
import './dist/vendor/select2/select2.min.css';
import './dist/vendor/daterangepicker/daterangepicker.css';
import './dist/css/main.css';
import './dist/css/util.css';


/* import './dist/vendor/jquery/jquery-3.2.1.min.js'; */
/* import './dist/vendor/animsition/js/animsition.min.js'; */
/* import './dist/vendor/bootstrap/js/popper.js'; */
/* import './dist/vendor/bootstrap/js/bootstrap.js'; */
/* import './dist/vendor/select2/select2.js'; */
/* import './dist/vendor/daterangepicker/daterangepicker.js'; */
/* import './dist/vendor/countdowntime/countdowntime.js'; */
/* import './dist/js/main.js'; */





import React from 'react';
import { Link } from "react-router-dom";



class Login extends React.Component{

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.getPass = this.getPass.bind(this);
    this.getUser = this.getUser.bind(this);
    
    this.state = {
      login: {
        user: '',
        pass: ''
      }
    }
  }

  onSubmit() {
    this.props.onSubmit(this.state.login.user, this.state.login.pass);
  }

  getPass(e) {

    this.setState({
      login: {
        ...this.state.login,
        pass: e.target.value
      }
    });
    
  }

  getUser(e) {

    this.setState({
      login: {
        ...this.state.login,
        user: e.target.value
      }
    });
    
  }

  render(){
    return(

    <body>
        <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100 p-t-85 p-b-20">
            <form class="login100-form validate-form">
              <span class="login100-form-title p-b-70">
                Bienvenido
              </span>
              <span class="login100-form-avatar">
                <img src="img/logo.png"></img>
              </span>
    
              <div class="wrap-input100 validate-input m-t-85 m-b-35" data-validate = "El usuario es requerido">
                <input class="input100" type="text" name="username"></input>
                <span class="focus-input100" data-placeholder="Usuario"></span>
              </div>
    
              <div class="wrap-input100 validate-input m-b-50" data-validate="La contraseña es requerida">
                <input class="input100" type="password" name="pass"></input>
                <span class="focus-input100" data-placeholder="Contraseña"></span>
              </div>
    
              <div class="container-login100-form-btn">
              <Link to={ this.props.redirect }>
                <button class="login100-form-btn" onClick={ this.onSubmit }
                type="submit">
                  Ingresar
                </button>
                </Link>
              </div>
    
              <ul class="login-more p-t-190">
                <li class="m-b-8">
                  
    
                  <a href="#" class="txt2">
                   ¿Olvidó su Contraseña?
                  </a>
                </li>
    
                <li>
                  
    
                  <Link to="/registrar" class="txt2">¿No tienes cuenta? Registrate ahora</Link>
                  
                  
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
  </body>
         
   
    )
  }
 
}

export default Login;