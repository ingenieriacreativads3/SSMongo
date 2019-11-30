/* eslint-disable jsx-a11y/anchor-is-valid */
import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.min.css';
import './plugins/iCheck/square/blue.css';

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
        
      <div class="login-box">
          <div class="login-logo">
              <a href="../../index2.html"><b>Admin</b>LTE</a>
          </div>
          <div class="login-box-body">
            <p class="login-box-msg">Sign in to start your session</p>

            <form>
                
              <div class="form-group has-feedback">
                  <input type="text" class="form-control" placeholder="Usuario" onChange={ this.getUser }></input>
                  <span class="glyphicon glyphicon-user form-control-feedback"></span>
              </div>

              <div class="form-group has-feedback">
                  <input type="password" class="form-control" placeholder="Contraseña" onChange={ this.getPass }></input>
                  <span class="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div class="row">
                  <div class="col-xs-8">
                  <div class="checkbox icheck">
                      <label>
                          <input type="checkbox"></input> Remember Me
                      </label>
                  </div>
                  </div>
                  <div class="col-xs-4">

                    <Link to={ this.props.redirect }>
                      <button 
                        onClick={ this.onSubmit }
                        type="submit"
                        class="btn btn-primary btn-block btn-flat">
                          Sign In
                      </button>
                    </Link>

                  </div>
              </div>
            </form>

            <div class="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
                Facebook</a>
            <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
                Google+</a>
            </div>

            <a href="#">I forgot my password</a><br></br>
            <Link to="/registrar" class="text-center">Register a new membership</Link>
          </div>
      </div>

    )
  }
}

export default Login;