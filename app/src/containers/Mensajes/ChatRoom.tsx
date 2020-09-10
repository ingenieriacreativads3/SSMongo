import React from 'react';
import { connect } from 'react-redux'
import * as empresaActions from '../../store/actions/empresa'
import * as fileActions from './../../store/actions/file'
import * as dialogActions from './../../store/actions/dialog'
import { PerfilPropio as Perfil} from './../../components/Perfil'
import { OneButton } from './../../components/Dialogs'
import Link from '@material-ui/core/Link';
import { Footer } from './../Footer'
import { Drawer } from './../Drawer'
import { AppBar } from './../AppBar'
import Cookies from 'universal-cookie';
import { ChatRoom as Chat} from './../../components/Mensajes'

function mapStateToProps(store: {
  empresaReducer: any,
  login: any
}) {
  return {
    empresaReducer: store.empresaReducer,
    login: store.login
  };
}

class Mensajes extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
  }

  

  footer() {
    return <Footer 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
    />
  }

  drawer() {
    return <Drawer 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
    />
  }

  appBar() {
    return <AppBar 
      history={this.props.history}
      location={this.props.location}
      match={this.props.match}
      staticContext={this.props.staticContext}
      cookies={this.props.cookies}
    />
  }

  

  

  render(){

    return(
      <div>
        <Chat 
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          staticContext={this.props.staticContext}
          footer={this.footer()}
          drawer={this.drawer()}
          appBar={this.appBar()}
         
         />
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(Mensajes)