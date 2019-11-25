import './bower_components/bootstrap/dist/css/bootstrap.min.css';
import './bower_components/font-awesome/css/font-awesome.min.css';
import './bower_components/Ionicons/css/ionicons.min.css';
import './dist/css/AdminLTE.min.css';
import './plugins/iCheck/square/blue.css';

import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class RegisterForm extends React.Component{
    render(){
        return(
            <div class="register-box">
              <div class="register-logo">
                <a href="../../index2.html"><b>Admin</b>LTE</a>
              </div>

              <div class="register-box-body">
                <p class="login-box-msg">Register a new membership</p>

                <form action="../../index.html" method="post">
                  <div class="form-group has-feedback">
                    <input type="text" class="form-control" placeholder="Full name"></input>
                    <span class="glyphicon glyphicon-user form-control-feedback"></span>
                  </div>
                  <div class="form-group has-feedback">
                    <input type="email" class="form-control" placeholder="Email"></input>
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                  </div>
                  <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="Password"></input>
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                  </div>
                  <div class="form-group has-feedback">
                    <input type="password" class="form-control" placeholder="Retype password"></input>
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
                    { /*<!-- /.col -->*/ }
                    <div class="col-xs-4">
                      <button type="submit" class="btn btn-primary btn-block btn-flat">Register</button>
                    </div>
                    { /*<!-- /.col -->*/ }
                  </div>
                </form>

                <div class="social-auth-links text-center">
                  <p>- OR -</p>
                  <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign up using
                    Facebook</a>
                  <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign up using
                    Google+</a>
                </div>

                <Link to="/login" class="text-center">I already have a membership</Link>
              </div>
              { /*<!-- /.form-box -->*/ }</div>
           
        )
    }
}

export default RegisterForm;