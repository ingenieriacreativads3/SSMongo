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
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
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
          <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>

        <div class="register-box-body">
          <p class="login-box-msg">Register a new membership</p>

          <form action="../../index.html" method="post">
            <div class="form-group has-feedback">
              <input type="text" class="form-control" placeholder="Nombre"></input>
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>

            <div class="form-group has-feedback">
              <input type="text" class="form-control" placeholder="Razón Social"></input>
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>

            <div class="form-group has-feedback">
              <input type="number" class="form-control" placeholder="CUIT"></input>
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>

            <div class="form-group has-feedback">
              <input type="text" class="form-control" placeholder="Teléfono"></input>
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>

            <div class="form-group has-feedback">
              <input type="text" class="form-control" placeholder="Usuario"></input>
              <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>

            <div class="form-group has-feedback">
              <input type="password" class="form-control" placeholder="Contraseña"></input>
              <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
              <input type="password" class="form-control" placeholder="Reescribir contraseña"></input>
              <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
            </div>

            <div class="form-group has-feedback">
              <input type="password" class="form-control" placeholder="Reescribir contraseña"></input>
              <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
            </div>

            <div class="row">
              <div class="col-xs-8">
                <div class="checkbox icheck">
                  <label>
                    <input type="checkbox"></input> I agree to the <a href="#">terms</a>
                  </label>
                </div>
              </div>
              <div class="col-xs-4">
                <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
              </div>
            </div>
          </form>

          <Link to="/ingresar" class="text-center">I already have a membership</Link>
        </div>
      </div>
        
    )
  }
}

export default Register;