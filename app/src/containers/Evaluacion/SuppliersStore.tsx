import React from 'react';
import { connect } from 'react-redux'

import { EvaluarPlataforma as EvaluacionPlataforma} from './../../components/Evaluacion'
import { OneButton } from './../../components/Dialogs'

import * as evaluacionActions from './../../store/actions/evaluacion'
import * as dialogActions from './../../store/actions/dialog'
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'
import Cookies from 'universal-cookie';

function mapStateToProps(store: {
	evaluacionReducer: any,
	itemReducer: any,
}) {
	return {
		evaluacionReducer: store.evaluacionReducer,
		itemReducer: store.itemReducer,
	};
}

class ValoracionPlataforma extends React.Component<{
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

	componentDidUpdate() {

		if(this.props.itemReducer.fetched) {
			this.props.dispatch(dialogActions.openOneButton())
		} else {
			this.props.dispatch(dialogActions.closeOneButton())
		}

	}

	aceptar = () => {

		this.props.dispatch(dialogActions.closeOneButton())
		if(this.props.itemReducer.status !== 200) {
			this.props.dispatch(evaluacionActions.reintentar())
		} else {
			this.props.dispatch(evaluacionActions.setear())
			this.props.history.push('/home/inicio')
		}

	}

	footer() {
		return <Footer { ...this.props } />
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
				<EvaluacionPlataforma 
					footer={ this.footer() } 
					appBar={ this.appBar() }
				/>
				<OneButton 
					title={ 'Evaluacion' }
					text={ this.props.itemReducer.message }
					functionRight={ this.aceptar }
					labelButtonRight={ 'Aceptar' }
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(ValoracionPlataforma)