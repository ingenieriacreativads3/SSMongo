import React from 'react';
import { connect } from 'react-redux'

import { VerDetalleItem as ItemDetalle} from './../../components/Item'
import * as itemActions from './../../store/actions/item'


function mapStateToProps(store: {
  itemReducer: any,
  login: any
}) {
  return {
    item : store.itemReducer,
    login: store.login
  };
}

class Detalle extends React.Component<{
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


    if(
      !this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching
    ) {
    
    this.props.dispatch(itemActions.getItem(this.props.match.params.id))
    }

    return(
      <div>
        <ItemDetalle
        // history={this.props.history}
        // location={this.props.location}
        // match={this.props.match}
        // staticContext={this.props.staticContext}
         />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Detalle)