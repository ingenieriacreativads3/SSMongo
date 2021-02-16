import React from 'react';
import clsx from 'clsx'

import SendIcon from '@material-ui/icons/Send';
import { Container, Grid, Card, Divider, Box, Typography, CssBaseline, RadioGroup, CardHeader, Button, CardContent,FormControlLabel, CardActions,TextareaAutosize} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

import Radio from '@material-ui/core/Radio';
import * as drawerActions from './../../store/actions/drawer'
import * as evaluateAction from './../../store/actions/evaluacion'
import * as empresaAction from './../../store/actions/empresa'

import { connect } from 'react-redux'

function mapStateToProps(store: {
	evaluacionReducer : any,
	empresaReducer : any,
}) {
  return {
	  empresaReducer : store.empresaReducer,
	  evaluacionReducer : store.evaluacionReducer,
  };
}

class EvaluacionEmpresa extends React.Component <{}, {
  valueTime: number,
  hoverTime: any,
  valuePrice: number,
  hoverPrice: any,
  valueAvailable: number,
  hoverAvailable: any,
  comentario: string,
  rebuy: boolean,
	disabled: boolean
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
			valueTime: 2,
		  hoverTime: -1,
		  valuePrice: 2,
		  hoverPrice: -1,
		  valueAvailable: 2,
		  hoverAvailable: -1,
		  comentario: '',
		  rebuy: false,
			disabled: true
		};
  }

	componentDidUpdate = () => {
		if(
			this.state.disabled &&
			this.props?.cookies?.get('empresaId') !== undefined &&
			this.props?.cookies?.get('empresaId') !== null &&
			(this.props?.match?.params?.id || '') !== undefined &&
			(this.props?.match?.params?.id || '') !== null &&
			(this.props?.match?.params?.id || '') !== ''
		) {
			this.setState({
				disabled: false
			})
		}
	}

  componentWillMount() {
		this.props.dispatch(drawerActions.invisibleDrawer())
		this.props.dispatch(empresaAction.getEmpresa(this.props.match.params.id))
  }

	getComentario = (e: any) => {
	  this.setState({comentario: e.target.value});
	}

	handleChange = (e:any) =>{
	  if(e.target.value === "SI"){
			this.setState({rebuy: true});
	  }else{
			this.setState({rebuy: false});
	  }
	}

	evaluate = () => {

		if(
			this.props?.cookies?.get('empresaId') !== undefined &&
			this.props?.cookies?.get('empresaId') !== null &&
			(this.props?.match?.params?.id || '') !== undefined &&
			(this.props?.match?.params?.id || '') !== null &&
			(this.props?.match?.params?.id || '') !== ''
		) {

			this.props.dispatch(evaluateAction.setEvaluacionEmpresa(
				this.props.cookies.get('empresaId'),
				this.props.match.params.id,
				this.state.valueTime,
				'tiempoRespuesta',
				this.state.comentario,
			))
	
			this.props.dispatch(evaluateAction.setEvaluacionEmpresa(
				this.props.cookies.get('empresaId'),
				this.props.match.params.id,
				this.state.valuePrice,
				'relacionPrecioCalidad',
				this.state.comentario,
			))
	
			this.props.dispatch(evaluateAction.setEvaluacionEmpresa(
				this.props.cookies.get('empresaId'),
				this.props.match.params.id,
				this.state.valueAvailable,
				'disponibilidad',
				this.state.comentario,
			))
	
			// this.props.dispatch(evaluateAction.setEvaluacionEmpresa(
			// 	this.props.cookies.get('empresaId'),
			// 	this.props.match.params.id,
			// 	(this.state.rebuy) ? 1 : 0,
			// 	'rebuy',
			// 	this.state.comentario,
			// ))
		} else {
			this.setState({
				disabled: true
			})
		}
	}

  render(){

		const classes = this.props.classes
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);
		var company: string = ''

		const labels: { [index: string]: string } = {
			1: 'Muy Malo',
			2: 'Malo',
			3: 'Bueno',
			4: 'Muy Bueno',
			5: 'Excelente',
		};

		if(this.props.empresaReducer.perfil) { 
			company= this.props?.empresaReducer?.data?.empresa?.nombre || ''
		}

		console.log(this.props.empresaReducer);
		

		return(
			<div className={classes.root}>
				<CssBaseline />
				{this.props.appBar}
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth="lg" className={classes.container}>
						<Grid container spacing={3}>

							<Grid item lg={12}>
								<Card className={fixedHeightCard}>
									<CardHeader title="¡Gracias por elegirnos! Tu opinión es importante para nosotros" />
									<Divider />
									<CardContent>
										<Grid container >
											<Grid container>
												<Grid item lg={12}>
													<Typography variant="subtitle1" gutterBottom className={classes.subtitle}>
														Empresa : { company }
													</Typography>
												</Grid>
											</Grid>
											<Grid container>
												<Grid item lg={6}>
													<Typography variant="subtitle1" gutterBottom className={classes.preguntaEncuesta}>
														Tiempo de respuesta a los mensajes/consultas
													</Typography>
													<Rating
														className={classes.respuestaEncuesta}
														name="hover-feedback-time"
														value={this.state.valueTime}
														precision={1}
														onChange={(event, newValueTime) => {
															if(newValueTime !== null) {
																this.setState({
																	valueTime: newValueTime
																})
															}
														}}
														onChangeActive={(event, newHoverTime) => {
															this.setState({
																hoverTime: newHoverTime
															})
														}}
													/>
													{ this.state.valueTime !== null && <Box className={classes.respuestaEncuesta} ml={2}>{labels[this.state.hoverTime !== -1 ? this.state.hoverTime : this.state.valueTime]}</Box>}
												</Grid>
												<Grid item lg={6}>
													<Typography variant="subtitle1" gutterBottom className={classes.preguntaEncuesta}>
														Relación precio - calidad
													</Typography>
													<Rating
														className={classes.respuestaEncuesta}
														name="hover-feedback-price"
														value={this.state.valuePrice}
														precision={1}
														onChange={(event, newValuePrice) => {
															if(newValuePrice !== null) {
																this.setState({
																valuePrice: newValuePrice
																})
															}
														}}
														onChangeActive={(event, newHoverPrice) => {
															this.setState({
															hoverPrice: newHoverPrice
															})
														}}
													/>
													{ this.state.valuePrice !== null && <Box className={classes.respuestaEncuesta} ml={2}>{labels[this.state.hoverPrice !== -1 ? this.state.hoverPrice : this.state.valuePrice]}</Box>}
												</Grid>
											</Grid>
											<Grid container>
												<Grid item lg={6}>
													<Typography variant="subtitle1" gutterBottom className={classes.preguntaEncuesta} >
														Disponibilidad de productos y/o servicios
													</Typography>
													<Rating
														className={classes.respuestaEncuesta}
														name="hover-feedback-available"
														value={this.state.valueAvailable}
														precision={1}
														onChange={(event, newValueAvailable) => {
															if(newValueAvailable !== null) {
																this.setState({
																	valueAvailable: newValueAvailable
																})
															}
														}}
														onChangeActive={(event, newHoverAvailable) => {
															this.setState({
																hoverAvailable: newHoverAvailable
															})
														}}
													/>
													{ this.state.valueAvailable !== null && <Box className={classes.respuestaEncuesta} ml={2}>{labels[this.state.hoverAvailable !== -1 ? this.state.hoverAvailable : this.state.valueAvailable]}</Box>}
												</Grid>
												<Grid item lg={6}>
													<Typography variant="subtitle1" gutterBottom className={classes.preguntaEncuesta}>
														¿Volvería a operar con esta empresa?
													</Typography>
													<RadioGroup  row aria-label="position" name="position" defaultValue="top" className={classes.respuestaEncuesta}  >
														<FormControlLabel
															value="SI"
															control={<Radio className={classes.radioButton} />}
															label="SI"
															labelPlacement="start"
															onChange={this.handleChange}
														/>
														<FormControlLabel
															value="NO"
															control={<Radio className={classes.radioButton} />}
															label="NO"
															labelPlacement="start"
															onChange={this.handleChange}	
														/>
													</RadioGroup>
												</Grid>
											</Grid>
											<TextareaAutosize style={{borderRadius:7}} aria-label="minimum height" rowsMin={10} placeholder="Mensaje" className={classes.textTarea} onChange={this.getComentario} />
										</Grid>
									</CardContent>
									<CardActions>
										<Grid container spacing={3} direction = 'column' alignItems = 'flex-end'  >
											<Grid item lg={12} >
												<Button
													variant="contained"
													color='primary'
													size="small"
													className={classes.button}
													startIcon={<SendIcon />}
													onClick={ this.evaluate }
													disabled={ this.state.disabled }
												>
													Enviar
												</Button>
											</Grid>
										</Grid>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</Container>
					{this.props.footer}
				</main>
			</div>
		);
  }
}

EvaluacionEmpresa.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(EvaluacionEmpresa)