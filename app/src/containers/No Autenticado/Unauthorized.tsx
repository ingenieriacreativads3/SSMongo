import React from 'react';


//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'


import { NoAutorizado as NoAutenticado } from './../../components/NoAutenticado'


function mapStateToProps(store: {
  login: any,
}) {
  return {
    login: store.login,
  };
}

class Unauthorized extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,

}, {
  user: string,
  pass: string,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  


  render(){

    return(
      <div>
        <NoAutenticado 
         
        />
        
      </div>
    );
  }
}

export default connect(mapStateToProps)(Unauthorized)