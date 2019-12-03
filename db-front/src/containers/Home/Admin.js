import React from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import UserPanel from "../../components/UserPanel";
import SearchForm from "../../components/SearchForm";
import SideBarMenu from "../../components/SideBarMenu";

class Admin extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render(){

    return(
            
      <div className="wrapper">

        <Header></Header>

        <aside className="main-sidebar">
          <section className="sidebar">

            <UserPanel></UserPanel>
            <SearchForm></SearchForm>
            <SideBarMenu></SideBarMenu>
            
          </section>
        </aside>

        <div className="content-wrapper">

            <section className="content-header">
              <h1>
                  Empresa
                  <small>Admin</small>
              </h1>
              <ol className="breadcrumb">
                  <li><a href="#"><i className="fa fa-dashboard"></i>Empresa</a></li>
                  <li><a href="#">Admin</a></li>
              </ol>
            </section>

            <section className="content container-fluid">

              <section className="content">
                <div className="row">
                  <div className="col-xs-12">

                  </div>
                </div>
              </section>

            </section>
        </div>

        <footer className="main-footer">
          <div className="pull-right hidden-xs">
            Anything you want
          </div>
          {/* <!-- Default to the left --> */}
          <strong>Copyright &copy; 2016 <a href="#">Company</a>.</strong> All rights reserved.
        </footer>

        <aside className="control-sidebar control-sidebar-dark">
          <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
            <li className="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-home"></i></a></li>
            <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-gears"></i></a></li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="control-sidebar-home-tab">
              <h3 className="control-sidebar-heading">Recent Activity</h3>
              <ul className="control-sidebar-menu">
                <li>
                  <a href="javascript:;">
                    <i className="menu-icon fa fa-birthday-cake bg-red"></i>
                    <div className="menu-info">
                        <h4 className="control-sidebar-subheading">Langdon's Birthday</h4>
                        <p>Will be 23 on April 24th</p>
                    </div>
                  </a>
                </li>
              </ul>

              <h3 className="control-sidebar-heading">Tasks Progress</h3>
              <ul className="control-sidebar-menu">
                <li>
                    <a href="javascript:;">
                      <h4 className="control-sidebar-subheading">
                          Custom Template Design
                          <span className="pull-right-container">
                            <span className="label label-danger pull-right">70%</span>
                          </span>
                      </h4>

                      <div className="progress progress-xxs">
                        <div className="progress-bar progress-bar-danger" style={{ "width": "70%" }}></div>
                    </div>
                    </a>
                </li>
              </ul>

            </div>
          
            <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
            <div className="tab-pane" id="control-sidebar-settings-tab">
                <form method="post">
                  <h3 className="control-sidebar-heading">General Settings</h3>

                  <div className="form-group">
                      <label className="control-sidebar-subheading">
                        Report panel usage
                        <input type="checkbox" className="pull-right" checked />
                      </label>

                      <p>
                        Some information about this general settings option
                      </p>
                  </div>
                </form>
            </div>
          </div>
        </aside>
        {/* <!-- /.control-sidebar --> */}
        {/* <!-- Add the sidebar's background. This div must be placed
        immediately after the control sidebar --> */}
        <div className="control-sidebar-bg"></div>
      </div>

    );
  }
}

export default Admin