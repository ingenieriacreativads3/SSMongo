import React from 'react';
import { connect } from 'react-redux'

import * as itemActions from './../../store/actions/item'

import { PaginaBusqueda as BusquedaPage } from './../../components/Home'
import { InicioDrawer } from './../DrawerInicio'
import { Footer } from './../Footer'
import { AppBar } from './../AppBar'

function mapStateToProps(store: {
  requestReducer: any,
  itemReducer: any,
  login: any
}) {
  return {
    requestReducer: store.requestReducer,
    itemReducer: store.itemReducer,
    login: store.login
  };
}

class Busqueda extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
    this.state = {};
  }

  componentWillMount = () => {
    this.props.dispatch(itemActions.searchByName(this.props.match.params.search))
  }
  
  drawer = () => {
    return <InicioDrawer { ...this.props } />
  }

  footer = () => {
    return <Footer { ...this.props } />
  }

  appBar = () => {
    return <AppBar { ...this.props } />
  }

  action = (idItem: string) => {
		this.props.dispatch(itemActions.agregarBusqueda(
			this.props.cookies.get('empresaId'),
			idItem
		))
	}

  render(){

    let items: any[] = []

    if(this.props.itemReducer.fetched) {
      items = this.props.itemReducer?.data?.data?.items || []
    }

    return(
      <div>
        <BusquedaPage
          drawer={ this.drawer() }
          footer={ this.footer() }
          appBar={ this.appBar() }
          action={ this.action }
          { ...this.props }
          items={ items }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Busqueda)