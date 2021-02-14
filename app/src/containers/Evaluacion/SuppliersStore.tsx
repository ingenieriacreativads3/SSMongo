import React from 'react';
import { connect } from 'react-redux'

import { EvaluarPlataforma as EvaluacionPlataforma} from './../../components/Evaluacion'
import { OneButton } from './../../components/Dialogs'

import * as evaluacionActions from './../../store/actions/evaluacion'
import * as dialogActions from './../../store/actions/dialog'
import { Footer } from './../Footer'
import { AppBar } from './../AppBar'

function mapStateToProps(store: {
	evaluacionReducer: any,
}) {
	return {
		evaluacionReducer: store.evaluacionReducer,
	};
}

class ValoracionPlataforma extends React.Component<{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

	// eslint-disable-next-line no-useless-constructor
	constructor(props: any) {
		super(props);
		this.state = {};
	}

	componentDidUpdate() {

		if(this.props.evaluacionReducer.fetched) {
			this.props.dispatch(dialogActions.openOneButton())
		} else {
			this.props.dispatch(dialogActions.closeOneButton())
		}

	}

	aceptar = () => {

		this.props.dispatch(dialogActions.closeOneButton())
		if(this.props.evaluacionReducer.status !== 200) {
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
		return <AppBar { ...this.props } />
	}

	render(){

		return(
			<div>
				<EvaluacionPlataforma
					{ ...this.props }
					footer={ this.footer() } 
					appBar={ this.appBar() }
				/>
				<OneButton 
					title={ 'Evaluacion' }
					text={ this.props.evaluacionReducer.message }
					functionRight={ this.aceptar }
					labelButtonRight={ 'Aceptar' }
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps)(ValoracionPlataforma)