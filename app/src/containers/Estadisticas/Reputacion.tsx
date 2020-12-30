import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';

import { VerReputacion as Reputacion } from './../../components/Estadisticas'
import { Drawer } from './../Drawer'
import { Footer } from './../Footer'
import { AppBar } from './../AppBar'

import * as evaluacionActions from './../../store/actions/evaluacion'

function mapStateToProps(store: {
  login: any,
  evaluacionReducer: any,
}) {
  return {
    login: store.login,
    evaluacionReducer: store.evaluacionReducer,
  };
}

class OpinionUsuarios extends React.Component<{
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
		super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch(evaluacionActions.getValoraciones(this.props.cookies.get('empresaId')))
  }
  
  drawer() {
    return <Drawer { ...this.props } />
  }

  footer() {
    return <Footer { ...this.props } />
  }

  appBar() {
    return <AppBar { ...this.props } />
  }


  render(){

    let valoraciones: any = {}

    if(
      this.props.evaluacionReducer.fetched &&
      !this.props.evaluacionReducer.fetching
    ) {
      valoraciones = this.props.evaluacionReducer.data.kpi
    }

    return(
      <div>
        <Reputacion
          history={this.props.history}
          location={this.props.location}
          match={this.props.match}
          staticContext={this.props.staticContext}
          drawer={ this.drawer() }
          footer={ this.footer() }
          appBar={ this.appBar() }
          valoraciones={ valoraciones }
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(OpinionUsuarios)