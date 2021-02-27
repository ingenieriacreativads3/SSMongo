import React from 'react';
import { connect } from 'react-redux';
import { Grid, Card, Divider, Paper, FormControl, Box, ListSubheader, ListItemIcon, Typography, CssBaseline,	CardContent, CardMedia} from '@material-ui/core';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import VisibilityIcon from '@material-ui/icons/Visibility';

import PieChart, {
	Series,
	Label,
	Connector,
	SmallValuesGrouping,
	Legend,
	Export
} from 'devextreme-react/pie-chart';

function mapStateToProps(store: {}) {
	return {};
}

class EstadisticasActividad extends React.Component <{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {};
	}

	formatLabel(arg:any) {
		return `${arg.argumentText}: ${arg.valueText}%`;
	}

	render(){

		const classes = this.props.classes
		
		const presupuestos = [
			{
				estado: 'En espera',
				percent: 0
			}, {
				estado: 'Cancelado',
				percent: 0
			}, {
				estado: 'Confirmado',
				percent: 0
			}, {
				estado: 'Presupuestado',
				percent: 0
			},
		]

		// 60296579b9481716c719eac4
		// 60296cf9b9481716c719eac8
		// 6029813ab9481716c719eafb
		// 602981e5b9481716c719eb03
		// 602a8119b9481716c719eb15
		
		const pedidos = [
			{
				estado: 'En espera',
				percent: 0
			}, {
				estado: 'Cancelado',
				percent: 0
			}, {
				estado: 'Finalizado',
				percent: 0
			}, {
				estado: 'Enviado',
				percent: 0
			}
		]

		if((this.props?.resumenVentas?.pedidosTotales || 0) > 0) {
			pedidos.map((source: {
				estado: string,
				percent: number
			}) => {
				if(source.estado === 'En espera') source.percent = (this.props?.resumenVentas?.cantidadEstadosPedidos?.['En espera'] || 0) * (100/(this.props?.resumenVentas?.pedidosTotales || 0))
				if(source.estado === 'Cancelado') source.percent = (this.props?.resumenVentas?.cantidadEstadosPedidos?.['Cancelado'] || 0) * (100/(this.props?.resumenVentas?.pedidosTotales || 0))
				if(source.estado === 'Finalizado') source.percent = (this.props?.resumenVentas?.cantidadEstadosPedidos?.['Finalizado'] || 0) * (100/(this.props?.resumenVentas?.pedidosTotales || 0))
				if(source.estado === 'Enviado') source.percent = (this.props?.resumenVentas?.cantidadEstadosPedidos?.['Enviado'] || 0) * (100/(this.props?.resumenVentas?.pedidosTotales || 0))
			})
		}

		if((this.props?.resumenVentas?.presupuestosTotales || 0) > 0) {
			presupuestos.map((source: {
				estado: string,
				percent: number
			}) => {
				if(source.estado === 'En espera') source.percent = (this.props?.resumenVentas?.cantidadEstadosPresupuestos?.['En espera'] || 0) * (100/(this.props?.resumenVentas?.presupuestosTotales || 0))
				if(source.estado === 'Cancelado') source.percent = (this.props?.resumenVentas?.cantidadEstadosPresupuestos?.['Cancelado'] || 0) * (100/(this.props?.resumenVentas?.presupuestosTotales || 0))
				if(source.estado === 'Confirmado') source.percent = (this.props?.resumenVentas?.cantidadEstadosPresupuestos?.['Confirmado'] || 0) * (100/(this.props?.resumenVentas?.presupuestosTotales || 0))
				if(source.estado === 'Presupuestado') source.percent = (this.props?.resumenVentas?.cantidadEstadosPresupuestos?.['Presupuestado'] || 0) * (100/(this.props?.resumenVentas?.presupuestosTotales || 0))
			})
		}

		if((this.props?.resumenCompras?.pedidosTotales || 0) > 0) {
			pedidos.map((source: {
				estado: string,
				percent: number
			}) => {
				if(source.estado === 'En espera') source.percent = (this.props?.resumenCompras?.cantidadEstadosPedidos?.['En espera'] || 0) * (100/(this.props?.resumenCompras?.pedidosTotales || 0))
				if(source.estado === 'Cancelado') source.percent = (this.props?.resumenCompras?.cantidadEstadosPedidos?.['Cancelado'] || 0) * (100/(this.props?.resumenCompras?.pedidosTotales || 0))
				if(source.estado === 'Finalizado') source.percent = (this.props?.resumenCompras?.cantidadEstadosPedidos?.['Finalizado'] || 0) * (100/(this.props?.resumenCompras?.pedidosTotales || 0))
				if(source.estado === 'Enviado') source.percent = (this.props?.resumenCompras?.cantidadEstadosPedidos?.['Enviado'] || 0) * (100/(this.props?.resumenCompras?.pedidosTotales || 0))
			})
		}

		if((this.props?.resumenCompras?.presupuestosTotales || 0) > 0) {
			presupuestos.map((source: {
				estado: string,
				percent: number
			}) => {
				if(source.estado === 'En espera') source.percent = (this.props?.resumenCompras?.cantidadEstadosPresupuestos?.['En espera'] || 0) * (100/(this.props?.resumenCompras?.presupuestosTotales || 0))
				if(source.estado === 'Cancelado') source.percent = (this.props?.resumenCompras?.cantidadEstadosPresupuestos?.['Cancelado'] || 0) * (100/(this.props?.resumenCompras?.presupuestosTotales || 0))
				if(source.estado === 'Confirmado') source.percent = (this.props?.resumenCompras?.cantidadEstadosPresupuestos?.['Confirmado'] || 0) * (100/(this.props?.resumenCompras?.presupuestosTotales || 0))
				if(source.estado === 'Presupuestado') source.percent = (this.props?.resumenCompras?.cantidadEstadosPresupuestos?.['Presupuestado'] || 0) * (100/(this.props?.resumenCompras?.presupuestosTotales || 0))
			})
		}

		debugger;
		console.log(pedidos);
		console.log(pedidos.length);
		return(
			<div className={classes.root}>
				<CssBaseline />
				{ this.props.appBar }
				{ this.props.drawer }
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justify="center"
					>
						<Paper style={{padding: 20, margin:30}}>
							<Typography component="div" >
								<Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"	fontStyle='italic'	fontWeight="fontWeightBold" fontSize={22}>
									{'Mi Resumen'}
								</Box>
							</Typography>
							<Divider style={{marginBottom:'20px'}} />
							<FormControl>
							<Grid container xs={12} sm={12} spacing={3}>
								<ListSubheader >
									Compras
								</ListSubheader> 
								<Grid
								container
								direction="row"
								justify="center"
								alignItems="center"
								spacing={3}
								>
								<Grid item xs={12} sm={6}>
										<Card className={classes.root}>
											<div className={classes.details}>
												<CardContent className={classes.content1}>
													<Typography component="h5" variant="h5">
														Pedidos
													</Typography>
													<Typography	color="textSecondary" variant="h5" component="h2" style={{display:  this.props?.resumenCompras?.pedidosTotales !== 0 ? "block":"none" }}>
														{ this.props?.resumenCompras?.pedidosTotales || "" }
													</Typography>
													<Typography	color="textSecondary" variant="h6" style={{display:  this.props?.resumenCompras?.pedidosTotales == 0 ? "block":"none" }} >
														{ "Aún no tienes compras" }
													</Typography>
												</CardContent>
											</div>
											<CardMedia
												className={classes.cover}
											/>
											<ListItemIcon className={classes.itemIcon}>
												<ShoppingCart style={{ fontSize: 60 }} className={classes.icon} />
											</ListItemIcon>
										</Card>
									</Grid>
									<Grid item xs={12} sm={6}>
										<Card className={classes.root}>
											<div className={classes.details}>
												<CardContent className={classes.content1}>
													<Typography component="h5" variant="h5">
														Presupuestos
													</Typography>
													<Typography	color="textSecondary" variant="h5" component="h2" style={{display: this.props?.resumenCompras?.presupuestosTotales !== 0 ? "block":"none" }} >
														{ this.props?.resumenCompras?.presupuestosTotales || "" }
													</Typography>
													<Typography color="textSecondary" variant="h6"  style={{display: this.props?.resumenCompras?.presupuestosTotales == 0 ? "block":"none" }}> 
														{"No solicitaste presupuestos"}
													</Typography>
												</CardContent>
											</div>
											<CardMedia
												className={classes.cover}
											/>
											<ListItemIcon className={classes.itemIcon}>
												<AttachMoney style={{ fontSize: 60 }} className={classes.icon} />
											</ListItemIcon>
										</Card>
									</Grid>
									</Grid>
								</Grid>
								<Grid container xs={12} sm={12} spacing={3}>
								<ListSubheader style={{marginTop:"30px"}}>
									Ventas
								</ListSubheader> 
									<Grid
									container
									direction="row"
									justify="center"
									alignItems="center"
									spacing={3}
									>
									<Grid item xs={12} sm={6}>
										<Card className={classes.root}>
											<div className={classes.details}>
												<CardContent className={classes.content1}>
													<Typography component="h5" variant="h5">
														Pedidos
													</Typography>
													<Typography	color="textSecondary" variant="h5" component="h2" style={{display: this.props?.resumenVentas?.pedidosTotales !== 0 ? "block":"none" }}>
														{ this.props?.resumenVentas?.pedidosTotales || "" }
													</Typography>
													<Typography color="textSecondary" variant="h6" style={{display: this.props?.resumenVentas?.pedidosTotales == 0 ? "block":"none" }} >
														{"Aún no tienes ventas"}
													</Typography>
												</CardContent>
											</div>
											<CardMedia
												className={classes.cover}
											/>
											<ListItemIcon className={classes.itemIcon}>
												<ShoppingCart style={{ fontSize: 60 }} className={classes.icon} />
											</ListItemIcon>
										</Card>
									</Grid>
									<Grid item xs={12} sm={6}>
										<Card className={classes.root}>
											<div className={classes.details}>
												<CardContent className={classes.content1}>
													<Typography component="h5" variant="h5">
														Presupuestos
													</Typography>
													<Typography	color="textSecondary" variant="h5"  component="h2" style={{display: this.props?.resumenVentas?.presupuestosTotales !== 0 ? "block":"none" }}>
														{ this.props?.resumenVentas?.presupuestosTotales || "" }
													</Typography>
													<Typography color="textSecondary" variant="h6" style={{display: this.props?.resumenVentas?.presupuestosTotales == 0 ? "block":"none" }} >
														{"Aún no tienes presupuestos"}
													</Typography>
												</CardContent>
											</div>
											<CardMedia
												className={classes.cover}
											/>
											<ListItemIcon className={classes.itemIcon}>
												<AttachMoney style={{ fontSize: 60 }} className={classes.icon} />
											</ListItemIcon>
										</Card>
									</Grid>
									</Grid>
									
								</Grid>
								
								<Divider style={{marginTop:'20px', marginBottom:'20px'}} />
								<Grid container xs={12} sm={12} spacing={4}>
									
									<Grid item xs={12} sm={6}  style={{display: this.props?.resumenVentas?.pedidosTotales !== 0 ? "block":"none" }} >
										<PieChart
											id="pie"
											dataSource={ pedidos }
											palette="Bright"
											title="Mis pedidos"
										>
											<Series
												argumentField="estado"
												valueField="percent"
											>
												<Label visible={true} customizeText={this.formatLabel} format="fixedPoint">
													<Connector visible={true} width={0.5} />
												</Label>
												<SmallValuesGrouping threshold={4.5} mode="smallValueThreshold" />
											</Series>
											<Legend horizontalAlignment="center" verticalAlignment="bottom" />
											<Export enabled={true} />
										</PieChart>
									</Grid>

									<Grid item xs={12} sm={6} style={{display: this.props?.resumenVentas?.presupuestosTotales !== 0 ? "block":"none" }} >
										<PieChart
											id="pie"
											dataSource={ presupuestos }
											palette="Bright"
											title="Mis presupuestos"
										>
											<Series
												argumentField="estado"
												valueField="percent"
											>
												<Label visible={true} customizeText={this.formatLabel} format="fixedPoint">
													<Connector visible={true} width={0.5} />
												</Label>
												<SmallValuesGrouping threshold={4.5} mode="smallValueThreshold" />
											</Series>
											<Legend horizontalAlignment="center" verticalAlignment="bottom" />
											<Export enabled={true} />
										</PieChart>
									</Grid>
								</Grid>
							</FormControl>
						</Paper>
					</Grid>
				{ this.props.footer }
				</main>
			</div>
		);
	}
}


export default connect(mapStateToProps)(EstadisticasActividad)