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

import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Register extends React.Component{

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.getNombre = this.getNombre.bind(this);
    this.getClave = this.getClave.bind(this);
    this.getCuit = this.getCuit.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getUsuario = this.getUsuario.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Empresa: {
        nombre: '',
        cuit: 0,
        usuario: '',
        clave: '',
        email: '',
        rubros: []
      },
      file: '',
      imagePreviewUrl: ''
    };
  }

  onSubmit() {

    this.props.onSubmit(this.state.Empresa);

  }

  handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  getNombre(e) {

    this.setState({
      Empresa: {
        ...this.state.Empresa,
        nombre: e.target.value
      }
    });

  }

  getCuit(e) {

    this.setState({
      Empresa: {
        ...this.state.Empresa,
        cuit: e.target.value
      }
    });
    
  }

  getUsuario(e) {

    this.setState({
      Empresa: {
        ...this.state.Empresa,
        usuario: e.target.value
      }
    });
    
  }

  getClave(e) {

    this.setState({
      Empresa: {
        ...this.state.Empresa,
        clave: e.target.value
      }
    });
    
  }

  getEmail(e) {

    this.setState({
      Empresa: {
        ...this.state.Empresa,
        email: e.target.value
      }
    });
    
  }

  render(){

    let imagePreviewUrl = this.state.imagePreviewUrl;
    let $imagePreview = null;

    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Por favor selecciona una imagen </div>);
    }

    return(
      <body>
      <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-t-85 p-b-20">
          <form class="login100-form validate-form">
            <span class="login100-form-title p-b-70">
              Registro
            </span>
            <span class="login100-form-avatar">
              <img src="img/logo.png"></img>
            </span>
  
            <div class="wrap-input100 validate-input m-t-85 m-b-35" data-validate = "El nombre es requerido">
              <input class="input100" type="text" name="nombre" onChange={ this.getNombre }></input>
              <span class="focus-input100" data-placeholder="Nombre de la empresa"></span>
            </div>

            <div class="wrap-input100 validate-input m-t-85 m-b-35" data-validate = "El CUIT es requerido">
              <input class="input100" type="text" name="CUIT" onChange={ this.getCuit }></input>
              <span class="focus-input100" data-placeholder="CUIT"></span>
            </div>
  
            <div class="wrap-input100 validate-input m-b-50" data-validate="El usuario es requerido">
              <input class="input100" type="text" name="usuario" onChange={ this.getUsuario}></input>
              <span class="focus-input100" data-placeholder="Usuario"></span>
            </div>

            <div class="wrap-input100 validate-input m-b-50" data-validate="El email es requerido">
              <input class="input100" type="text" name="email" onChange={ this.getEmail}></input>
              <span class="focus-input100" data-placeholder="Email"></span>
            </div>

            <div class="wrap-input100 validate-input m-b-50" data-validate="La contraseña es requerida">
              <input class="input100" type="password" name="contraseña" onChange={ this.getClave}></input>
              <span class="focus-input100" data-placeholder="Contraseña"></span>
            </div>

            <div class="wrap-input100 validate-input m-b-50" data-validate="La contraseña es requerida">
              <input class="input100" type="password" name="contraseña2"></input>
              <span class="focus-input100" data-placeholder="Repita su contraseña"></span>
            </div>
  
            <div class="container-login100-form-btn">
            <Link to={ this.props.redirect }>
              <button class="login100-form-btn" onClick={ this.onSubmit }
              type="submit">
                Registrarme
              </button>
              </Link>
            </div>
  
            <ul class="login-more p-t-190">
              
  
              <li>
                
  
                <Link to="/ingresar" class="txt2">Iniciar sesión</Link>
                
                
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

export default Register;