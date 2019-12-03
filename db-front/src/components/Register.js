import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.min.css';
import './plugins/iCheck/square/blue.css';

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
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return(
      <div class="register-box">
        <div class="register-logo">
          <a href="../../index2.html"><b>Suppliers Store</b></a>
        </div>

        <div class="register-box-body">
          <p class="login-box-msg">Crea tu cuenta</p>

          <form>

            <div class="form-group has-feedback">
              <input required type="text" class="form-control" placeholder="Nombre" onChange={ this.getNombre }></input>
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>

            <div class="form-group has-feedback">
              <input required type="number" class="form-control" placeholder="CUIT" onChange={ this.getCuit }></input>
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>

            <div class="form-group has-feedback">
              <input required type="text" class="form-control" placeholder="Usuario" onChange={ this.getUsuario}></input>
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>

            <div class="form-group has-feedback">
                <input required type="email" class="form-control" placeholder="Email" onChange={ this.getEmail}></input>
                <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
            </div>

            <div class="form-group has-feedback">
              <input required type="password" class="form-control" placeholder="Contraseña" onChange={ this.getClave}></input>
              <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>

            <div class="form-group has-feedback">
              <input required type="password" class="form-control" placeholder="Reescribir contraseña"></input>
              <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
            </div>

            <div class="row">
              <div class="col-xs-8">
                <div class="checkbox icheck">
                  <label>
                    <input type="checkbox"></input> Acepto los<a href="#">terminos y condiciones </a>
                  </label>
                </div>
              </div>
              <div class="col-xs-4">

                <Link to={ this.props.redirect }>
                  <button 
                    onClick={ this.onSubmit }
                    type="submit"
                    class="btn btn-primary btn-block btn-flat">
                      Registrarme
                  </button>
                </Link>

              </div>
            </div>
          </form>

          <Link to="/ingresar" class="text-center">Ya soy un miembro</Link>
        </div>
      </div>
        
    )
  }
}

export default Register;