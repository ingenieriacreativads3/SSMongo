import React, { Component } from 'react';
import SideBar from '../../src/SideBar';

class UserPanel extends Component {
	render() {
		return (
        <div>
          {
            SideBar.UserPanel.map((panel) => {
              return (
                <div class="user-panel">
                  <div class="pull-left image">
                    <img src={panel.imgUserSolVal} class="img-circle" alt="User Image" />
                  </div>
                    <div class="pull-left info">
                      <p>{panel.nameUser}</p>
                      <a href="#"><i class={panel.icono}></i> Online</a>
                    </div>
                </div>
              );
            })
          }
      </div>
    );
  }
} 
export default UserPanel;