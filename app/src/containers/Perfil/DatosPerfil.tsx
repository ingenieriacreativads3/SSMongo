import React from 'react';
import { connect } from 'react-redux'
import * as registerActions from '../../store/actions/register'
import { PerfilPropio as Perfil} from './../../components/Perfil'
import Link from '@material-ui/core/Link';

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


  render(){

   {
    
    this.props.dispatch(registerActions.getEmpresa(this.props.match.params.id))
    }

  

    return(
      <div>
        <Perfil 
        //   history={this.props.history}
        //   location={this.props.location}
        //   match={this.props.match}
        //   staticContext={this.props.staticContext}
         
         />
      </div>
    );
  }
}

export default connect(mapStateToProps)(DatosPerfil)