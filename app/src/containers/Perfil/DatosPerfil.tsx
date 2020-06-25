import React from 'react';
import { connect } from 'react-redux'
import * as registerActions from '../../store/actions/register'
import { PerfilPropio as Perfil} from './../../components/Perfil'
import Link from '@material-ui/core/Link';
import { Footer } from './../Footer'
import { Drawer } from './../Drawer'


function mapStateToProps(store: {
  
  login: any
}) {
  return {
   
    
    login: store.login
  };
}

class DatosPerfil extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
 
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
    this.state = {};
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

  render(){

   {
    
    this.props.dispatch(registerActions.getEmpresa(this.props.match.params.id))
    }

  

    return(
      <div>
        <Perfil 
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          staticContext={this.props.staticContext}
          footer={this.footer()}
          drawer={this.drawer()}
         
         />
      </div>
    );
  }
}

export default connect(mapStateToProps)(DatosPerfil)