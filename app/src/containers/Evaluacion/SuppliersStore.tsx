import React from 'react';
import { connect } from 'react-redux'
import Cookies from 'universal-cookie';
import { InicioDrawer } from './../DrawerInicio'
import Link from '@material-ui/core/Link';

import { EvaluarPlataforma as EvaluacionPlataforma} from './../../components/Evaluacion'
import { OneButton } from './../../components/Dialogs'

import * as evaluacionActions from './../../store/actions/evaluacion'
import * as dialogActions from './../../store/actions/dialog'
import DrawerInicio from '../../components/DrawerInicio';
import { Footer } from './../Footer'
import {AppBar} from './../AppBar'

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
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
}, {
  
  numeroValoracion: number,
  conceptoValoracion: string,
  opinion : string,
  
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getNumeroValoracion = this.getNumeroValoracion.bind(this);
    this.getConceptoValoracion = this.getConceptoValoracion.bind(this);
    this.getOpinion = this.getOpinion.bind(this);
    this.save = this.save.bind(this);
    this.aceptar = this.aceptar.bind(this);
    this.state = {
    
      numeroValoracion: 0,
      conceptoValoracion: '',
      opinion: '',
    };
  }

 

  componentDidUpdate() {

    if(this.props.itemReducer.fetched) {
      this.props.dispatch(dialogActions.openOneButton())
    } else {
      this.props.dispatch(dialogActions.closeOneButton())
    }

  }

  getNumeroValoracion(e: any) {
    this.setState({ numeroValoracion: e.target.value })
  }

  getConceptoValoracion(e: any) {
    this.setState({ conceptoValoracion: e.target.value })
  }

  getOpinion(e: any) {
    this.setState({ opinion: e.target.value })
  }

  save() {

    this.props.dispatch(evaluacionActions.setEvaluacionPlataforma(
      this.props.cookies.get('empresaId'),
      this.state.numeroValoracion,
      this.state.conceptoValoracion,
      this.state.opinion,
     
    ))

  }

  aceptar() {

    this.props.dispatch(dialogActions.closeOneButton())
    if(this.props.itemReducer.status !== 200) {
      this.props.dispatch(evaluacionActions.reintentar())
    } else {
      this.props.dispatch(evaluacionActions.setear())
      this.props.history.push('/home/inicio')
    }

  }

  footer() {
    return <Footer 
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
        <EvaluacionPlataforma 
          getNumeroValoracion={ this.getNumeroValoracion }
          getConceptoValoracion={ this.getConceptoValoracion }
          getOpinion={ this.getOpinion }
          save={ this.save }
          footer={ this.footer() } 
          appBar={this.appBar()}
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