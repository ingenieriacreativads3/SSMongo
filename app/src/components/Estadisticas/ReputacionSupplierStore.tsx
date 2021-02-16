import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { Container, Grid,Box, Card, Tabs, Tab, Avatar, ListSubheader, ListItemAvatar,ListItemText,Divider, CardActions, CardHeader, ListItem, Typography, CssBaseline,	CardContent} from '@material-ui/core';
import { FixedSizeList } from 'react-window';


import PieChart, {
		Legend,
		Series,
		Export,
		Label,
		SmallValuesGrouping,
		Connector
	} from 'devextreme-react/pie-chart';


var navegabilidad: any = [{
	rating: 'Excelente',
	percent: 55.5
}, {
	rating: 'Muy Bueno',
	percent: 20.8
}, {
	rating: 'Bueno',
	percent: 2.6
}, {
	rating: 'Malo',
	percent: 19.1
}, {
	rating: 'Muy Malo',
	percent: 2.0
},
]

var actualizacion: any = [{
	rating: 'Excelente',
	percent: 55.5
}, {
	rating: 'Muy Bueno',
	percent: 20.8
}, {
	rating: 'Bueno',
	percent: 2.6
}, {
	rating: 'Malo',
	percent: 19.1
}, {
	rating: 'Muy Malo',
	percent: 2.0
},
]

var recommend: any = [{
		rating: 'SI',
		percent: 70,
	}, {
		rating: 'NO',
		percent: 30
	},
]

function mapStateToProps(store: {}) {
	return {};
}

class ReputacionSupplierStore extends React.Component <{}, {
	value:number,
	navegabilidad: any,
	actualizacion: any,
	recommend: any,
	update: boolean
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
			value:0,
			navegabilidad: [{
					rating: 'Excelente',
					percent: 55.5
				}, {
					rating: 'Muy Bueno',
					percent: 20.8
				}, {
					rating: 'Bueno',
					percent: 2.6
				}, {
					rating: 'Malo',
					percent: 19.1
				}, {
					rating: 'Muy Malo',
					percent: 2.0
				},
			],
			actualizacion: [{
					rating: 'Excelente',
					percent: 55.5
				}, {
					rating: 'Muy Bueno',
					percent: 20.8
				}, {
					rating: 'Bueno',
					percent: 2.6
				}, {
					rating: 'Malo',
					percent: 19.1
				}, {
					rating: 'Muy Malo',
					percent: 2.0
				},
			],
			recommend: [{
					rating: 'SI',
					percent: 70,
				}, {
					rating: 'NO',
					percent: 30
				},
			],
			update: false
		};
	}

	componentDidUpdate() {

		let valoraciones: any = {}
		
		let navegabilidad: any = [{
				rating: 'Excelente',
				percent: 0
			}, {
				rating: 'Muy Bueno',
				percent: 0
			}, {
				rating: 'Bueno',
				percent: 0
			}, {
				rating: 'Malo',
				percent: 0
			}, {
				rating: 'Muy Malo',
				percent: 0
			},
		]

		let actualizacion: any = [{
				rating: 'Excelente',
				percent: 0
			}, {
				rating: 'Muy Bueno',
				percent: 0
			}, {
				rating: 'Bueno',
				percent: 0
			}, {
				rating: 'Malo',
				percent: 0
			}, {
				rating: 'Muy Malo',
				percent: 0
			},
		]

		let recommend: any = [{
				rating: 'SI',
				percent: 0
			}, {
				rating: 'NO',
				percent: 0
			},
		]

		if(this.props.valoraciones !== undefined) {
			valoraciones = this.props.valoraciones
		}

		let navegabilidadaTotal = 0
		let actualizacionTotal = 0
		let recomiendaTotal = 0
		
		Object.keys(valoraciones).map((key: string) => { if(key === 'navegabilidada') { Object.keys(valoraciones[key]).map((keys: string) => { navegabilidadaTotal = navegabilidadaTotal + valoraciones[key][keys] }) } })
		Object.keys(valoraciones).map((key: string) => { if(key === 'actualizacion') { Object.keys(valoraciones[key]).map((keys: string) => { actualizacionTotal = actualizacionTotal + valoraciones[key][keys] }) } })
		Object.keys(valoraciones).map((key: string) => { if(key === 'recomienda') { Object.keys(valoraciones[key]).map((keys: string) => { recomiendaTotal = recomiendaTotal + valoraciones[key][keys] }) } })

		navegabilidad.map((valor: {
			rating: string,
			percent: number
		}) => {
			if(valor.rating === 'Excelente') { if(valoraciones !== undefined && valoraciones !== null) { Object.keys(valoraciones).map((key: string) => { if(key == 'navegabilidada') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss == '5') { valor.percent = (valoraciones[key][keyss] * 100) / navegabilidadaTotal } }) } }) } }
			if(valor.rating === 'Muy Bueno') { if(valoraciones !== undefined && valoraciones !== null) { Object.keys(valoraciones).map((key: string) => { if(key == 'navegabilidada') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss == '4') { valor.percent = (valoraciones[key][keyss] * 100) / navegabilidadaTotal } }) } }) } }
			if(valor.rating === 'Bueno') { if(valoraciones !== undefined && valoraciones !== null) { Object.keys(valoraciones).map((key: string) => { if(key == 'navegabilidada') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss == '3') { valor.percent = (valoraciones[key][keyss] * 100) / navegabilidadaTotal } }) } }) } }
			if(valor.rating === 'Malo') { if(valoraciones !== undefined && valoraciones !== null) { Object.keys(valoraciones).map((key: string) => { if(key == 'navegabilidada') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss == '2') { valor.percent = (valoraciones[key][keyss] * 100) / navegabilidadaTotal } }) } }) } }
			if(valor.rating === 'Muy Malo') { if(valoraciones !== undefined && valoraciones !== null) { Object.keys(valoraciones).map((key: string) => { if(key == 'navegabilidada') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss == '1') { valor.percent = (valoraciones[key][keyss] * 100) / navegabilidadaTotal } }) } }) } }
		})

		actualizacion.map((valor: {
			rating: string,
			percent: number
		}) => {
			if(valor.rating === 'Excelente') { if(valoraciones !== undefined && valoraciones !== null) { Object.keys(valoraciones).map((key: string) => { if(key == 'actualizacion') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss == '5') { valor.percent = (valoraciones[key][keyss] * 100) / actualizacionTotal } }) } }) } }
			if(valor.rating === 'Muy Bueno') { if(valoraciones !== undefined && valoraciones !== null) { Object.keys(valoraciones).map((key: string) => { if(key == 'actualizacion') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss == '4') { valor.percent = (valoraciones[key][keyss] * 100) / actualizacionTotal } }) } }) } }
			if(valor.rating === 'Bueno') { if(valoraciones !== undefined && valoraciones !== null) { Object.keys(valoraciones).map((key: string) => { if(key == 'actualizacion') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss == '3') { valor.percent = (valoraciones[key][keyss] * 100) / actualizacionTotal } }) } }) } }
			if(valor.rating === 'Malo') { if(valoraciones !== undefined && valoraciones !== null) { Object.keys(valoraciones).map((key: string) => { if(key == 'actualizacion') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss == '2') { valor.percent = (valoraciones[key][keyss] * 100) / actualizacionTotal } }) } }) } }
			if(valor.rating === 'Muy Malo') { if(valoraciones !== undefined && valoraciones !== null) { Object.keys(valoraciones).map((key: string) => { if(key == 'actualizacion') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss == '1') { valor.percent = (valoraciones[key][keyss] * 100) / actualizacionTotal } }) } }) } }
		})

		recommend.map((valor: {
			rating: string,
			percent: number
		}) => {
			if(valor.rating === 'SI') { if(valoraciones !== undefined && valoraciones !== null) { Object.keys(valoraciones).map((key: string) => { if(key == 'recomienda') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss == 'Si') { valor.percent = (valoraciones[key][keyss] * 100) / actualizacionTotal } }) } }) } }
			if(valor.rating === 'NO') { if(valoraciones !== undefined && valoraciones !== null) { Object.keys(valoraciones).map((key: string) => { if(key == 'recomienda') { Object.keys(valoraciones[key]).map((keyss: string) => { if(keyss == 'No') { valor.percent = (valoraciones[key][keyss] * 100) / actualizacionTotal } }) } }) } }
		})

		if(!this.state.update && Object.keys(this.props.valoraciones).length > 0) {
			this.setState({
				navegabilidad,
				actualizacion,
				recommend,
				update: true
			})
		}

	}
	
	customizeLabel(point:any) {
		return `${point.argumentText }: ${ point.valueText }%`;
	}	

	renderRow = (props: any) => {
		const { index, style, data } = props;

		let item = data[index];

		var inicialAvatar = item.usuario.substr(0,[1]).toUpperCase();
		
	
		return (
			<ListItem button style={style} key={index}>
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar>{inicialAvatar}</Avatar>
				
					</ListItemAvatar>
					<ListItemText
						primary={ item.usuario }
						secondary={
							<React.Fragment>
								{/* <Typography
									component="span"
									variant="body2"
									color="textPrimary"
								>
									{ 'Anónimo' }
								</Typography> */}
								{ item.mensaje }
							</React.Fragment>
						}
					/>
				</ListItem>
			</ListItem>
		);
	}

	render(){

		const classes = this.props.classes
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);
	 
		const handleChangeTabs = (event:any, value:number) => {
			this.setState({value: value});
		};

		console.log(this.state.navegabilidad);

		return(
			<div className={classes.root}>
				<CssBaseline />
				{this.props.appBar}
				{this.props.drawer}
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth="lg" className={classes.container}>
						<Grid container spacing={3}>
							<Grid item lg={12}>
								<Card className={fixedHeightCard}>
									<CardHeader />
									<Typography component="div" >
										<Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"	fontStyle='italic'	fontWeight="fontWeightBold" fontSize={22}>
											{"Reputacion Plataforma"}
										</Box>
									</Typography>
									<Divider className={classes.divider} />
									<CardContent>
									<Grid container
										direction="row"
										justify="center"
										alignItems="center" 
										style={{display: this.state.navegabilidad.length == 0 ? "block": "none"}}>
										<ListSubheader style={{fontSize:"25px"}}	>
											Aún no hay suficientes datos para calcular la reputación de la plataforma
										</ListSubheader> 
										</Grid>

										<Grid container spacing={3} style={{display: this.state.navegabilidad.length  > 0 ? "block": "none"}}>
											<Grid container spacing={3}>
												<Grid item xs={12} sm={6}>
													<PieChart
														id="pie"
														type="doughnut"
														title="Navegabilidad"
														palette="Soft Pastel"
														dataSource={this.state.navegabilidad}
													>
														<Series argumentField="rating" valueField="percent">
															<SmallValuesGrouping mode="topN" topCount={5} />
															<Label
																visible={true}
																format="fixedPoint"
																customizeText={this.customizeLabel}
															>
																<Connector visible={true} width={1} />
															</Label>
														</Series>
														<Export enabled={true} />
														<Legend horizontalAlignment="center" verticalAlignment="bottom" />
													</PieChart>
												</Grid>
												<Grid item xs={12} sm={6}>
													<PieChart
														id="pie"
														type="doughnut"
														title="Actualizacion de la plataforma"
														palette="Soft Pastel"
														dataSource={this.state.actualizacion}
													>
														<Series argumentField="rating" valueField="percent">
															<SmallValuesGrouping mode="topN" topCount={5} />
															<Label
																visible={true}
																format="fixedPoint"
																customizeText={this.customizeLabel}
															>
																<Connector visible={true} width={1} />
															</Label>
														</Series>
														<Export enabled={true} />
														<Legend horizontalAlignment="center" verticalAlignment="bottom" />
													</PieChart>
												</Grid>
											</Grid>
											<Grid container spacing={3}>
												<Grid xs={12} sm={6} >
													<PieChart
														id="pie"
														type="doughnut"
														title="Recomendaria Suppliers Store?"
														palette="Soft Pastel"
														dataSource={this.state.recommend}
													>
														<Series argumentField="rating" valueField="percent">
															<SmallValuesGrouping mode="topN" topCount={2} />
															<Label
																visible={true}
																format="fixedPoint"
																customizeText={this.customizeLabel}
															>
																<Connector visible={true} width={1} />
															</Label>
														</Series>
														<Export enabled={true} />
														<Legend horizontalAlignment="center" verticalAlignment="bottom" />
													</PieChart>
												</Grid>
												<Grid xs={12} sm={6} >
													<Box>
														<Grid container alignItems="center">
															<Grid xs={12} sm={12} item style={{ flexGrow: 1, marginTop:'25px' }}>
																<Tabs
																	value={ this.state.value }
																	onChange={ handleChangeTabs }
																	style={{ color:"#d93211", marginLeft:'20px'}}
																>
																	<Tab label="Comentarios" />
																</Tabs>
																{
																	this.state.value === 0 && 
																	<FixedSizeList itemData={ this.props.opiniones } height={260} width={500} itemSize={100} itemCount={this.props.opiniones.length}>
																		{ this.renderRow }
																	</FixedSizeList>
																}
															</Grid>
														</Grid>
													</Box>
												</Grid>
											</Grid>
										</Grid>
									</CardContent>
									<CardActions>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</Container>
					{	this.props.footer	}
				</main>
			</div>	
		);
	}
}


export default connect(mapStateToProps)(ReputacionSupplierStore)