import React from 'react';


import {	Grid,TextField, Paper, Divider, FormControl, Box, Typography, CssBaseline,	Avatar,	 Button} from '@material-ui/core';
import { FixedSizeList } from 'react-window';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import { connect } from 'react-redux'

function mapStateToProps(store: {
	requestReducer: {}
}) {
	return {
		requestReducer: store.requestReducer
	};
}



class Detail extends React.Component <{
	title: string,
	subtitle1:string,
	subtitle2:string,
	presupuesto: {
		_id: string,
		estado: string,
		updated_at: string,
		created_at: string,
		importe: string,
		empresa_demandante: {
			_id: string,
			nombre: string,
			cuit: string,
			usuario: string,
			email: string,
			estado: string,
			updated_at: string,
			created_at: string,
		},
		empresa_perteneciente: {
			_id: string,
			nombre: string,
			cuit: string,
			usuario: string,
			email: string,
			estado: string,
			updated_at: string,
			created_at: string
		},
		mensajes: [],
		items: [
			{
				"item": {
					"_id": string,
					"foto": string[],
					"nombre": string,
					"precio": string,
					"descrpcion": string,
					"mostrarPrecio": boolean,
					"unidad_de_medida_id": string,
					"updated_at": string,
					"created_at": string,
					"catalogo_id": string,
					"unidad_de_medida": {
						"_id": string,
						"nombre": string,
						"abreviatura": string,
						"updated_at": string,
						"created_at": string,
						}
				},
				"unidadDeMedida": {
					"_id": string,
					"nombre": string,
					"abreviatura": string,
					"updated_at": string,
					"created_at": string,
				},
				"cantidad": number
			}
		]
	}|null,
	pedido: {
		"_id": string,
		"empresa_perteneciente_id": string,
		"empresa_demandante_id": string,
		"importe": string,
		"estado": string,
		"presupuesto_id": string,
		"updated_at": string,
		"created_at": string,
		"mensajes": [],
		"importeTotal": string,
		"items": [
			{
				"item": {
					"_id": string,
					"foto": string[],
					"nombre": string,
					"precio": string,
					"descrpcion": string,
					"mostrarPrecio": boolean,
					"unidad_de_medida_id": string,
					"updated_at": string,
					"created_at": string,
					"catalogo_id": string,
					"unidad_de_medida": {
						"_id": string,
						"nombre": string,
						"abreviatura": string,
						"updated_at": string,
						"created_at": string,
					}
				},
				"unidadDeMedida": {
					"_id": string,
					"nombre": string,
					"abreviatura": string,
					"updated_at": string,
					"created_at": string,
				},
				"cantidad": number
			}
		],
		"empresa_demandante": {
			"_id": string,
			"nombre": string,
			"cuit": string,
			"usuario": string,
			"clave": string,
			"email": string,
			"estado": string,
			"updated_at": string,
			"created_at": string,
		},
		"empresa_perteneciente": {
			"_id": string,
			"nombre": string,
			"cuit": string,
			"usuario": string,
			"clave": string,
			"email": string,
			"estado": string,
			"updated_at": string,
			"created_at": string,
		},
		"presupuesto": {
			"_id": string,
			"idEmpresaPerteneciente": string,
			"idEmpresaDemandante": string,
			"estado": string,
			"updated_at": string,
			"created_at": string,
			"importe": string,
			"importeTotal": string,
			"items": [
				{
					"item": {
						"_id": string,
						"foto": string[],
						"nombre": string,
						"precio": string,
						"descrpcion": string,
						"mostrarPrecio": boolean,
						"unidad_de_medida_id": string,
						"updated_at": string,
						"created_at": string,
						"catalogo_id": string,
						"unidad_de_medida": {
							"_id": string,
							"nombre": string,
							"abreviatura": string,
							"updated_at": string,
							"created_at": string,
						}
					},
					"unidadDeMedida": {
						"_id": string,
						"nombre": string,
						"abreviatura": string,
						"updated_at": string,
						"created_at": string,
					},
					"cantidad": number
				}
			],
			"mensajes": []
		}
	}|null,
	labelCompany: string,
	company: {
		_id: string,
		nombre: string,
		cuit: string,
		usuario: string,
		email: string,
		estado: string,
		updated_at: string,
		created_at: string
	},
	actions: any
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any
	
	constructor(props: any) {
		super(props);
		this.state = {};
	}

	renderRow = (props:any) => {
		const { index, style } = props;

		let msj: any[] = []
		let empresa_demandante: any = {}
		let empresa_perteneciente: any = {}

		if(this.props.presupuesto !== null) {
			if(
				this.props.presupuesto !== undefined &&
				this.props.presupuesto.mensajes !== undefined &&
				this.props.presupuesto.mensajes.length
			) {
				this.props.presupuesto.mensajes.map((mensaje: any) => {
					msj.push(mensaje)
				})
				empresa_perteneciente = this.props.presupuesto.empresa_perteneciente
				empresa_demandante = this.props.presupuesto.empresa_demandante
			}
		}

		if(this.props.pedido !== null) {
			if(
				this.props.pedido.presupuesto !== undefined &&
				this.props.pedido.presupuesto.mensajes !== undefined &&
				this.props.pedido.presupuesto.mensajes.length
			) {
				this.props.pedido.mensajes.map((mensaje: any) => {
					msj.push(mensaje)
				})
				empresa_perteneciente = this.props.pedido.empresa_perteneciente
				empresa_demandante = this.props.pedido.empresa_demandante
			}
		}
	
		let empresa: any = {}

		if(
			empresa_perteneciente !== undefined &&
			empresa_perteneciente._id !== undefined &&
			empresa_perteneciente._id === msj[index].empresa_id
		) {
			empresa = empresa_perteneciente
		}

		if(
			empresa_demandante !== undefined &&
			empresa_demandante._id !== undefined &&
			empresa_demandante._id === msj[index].empresa_id
		) {
			empresa = empresa_demandante
		}

		let src: string = 'http://localhost:8000/'
		let nombre: string = ''

		if(
			empresa !== undefined
		) {
			if(empresa.logo !== undefined) src = src + empresa.logo
			if(empresa.nombre !== undefined) nombre = empresa.nombre
		}

		return (
			<ListItem button style={style} key={index}>
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar alt={nombre} src={src} />
					</ListItemAvatar>
					<ListItemText
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									//className={classes.inline}
									color="textPrimary"
								>
									{nombre}
								</Typography>
								{" — " + msj[index].comentario}
							</React.Fragment>
						}
					/>
				</ListItem>
			</ListItem>
		);
	}
	
	render(){

		const classes = this.props.classes
		

		let msj: any[] = []

		if(this.props.presupuesto !== null) {
			if(
				this.props.presupuesto !== undefined &&
				this.props.presupuesto.mensajes !== undefined &&
				this.props.presupuesto.mensajes.length
			) {
				this.props.presupuesto.mensajes.map((mensaje: any) => {
					msj.push(mensaje)
				})	
			}
		}

		if(this.props.pedido !== null) {
			if(
				this.props.pedido.presupuesto !== undefined &&
				this.props.pedido.presupuesto.mensajes !== undefined &&
				this.props.pedido.presupuesto.mensajes.length
			) {
				this.props.pedido.mensajes.map((mensaje: any) => {
					msj.push(mensaje)
				})
			}
		}

		let estado: string = ''
		let importe: string = ''
		let itemNombre: string = ''
		let itemPrecio: string = ''
		let unidad: string = ''
		let cantidad: string = ''
		let imagen: string = ''
		
		if(this.props.pedido !== null) {
			estado = this.props.pedido.estado
			importe = this.props.pedido.importeTotal
			itemNombre = this.props.pedido.items[0].item.nombre
			itemPrecio = this.props.pedido.items[0].item.precio
			unidad = this.props.pedido.items[0].unidadDeMedida.nombre
			cantidad = this.props.pedido.items[0].cantidad
			imagen = 'http://localhost:8000/' + this.props.pedido.items[0].item.foto[0]
		}

		if(this.props.presupuesto !== null) {
			estado = this.props.presupuesto.estado
			importe = this.props.presupuesto.importeTotal
			itemNombre = this.props.presupuesto.items[0].item.nombre
			itemPrecio = this.props.presupuesto.items[0].item.precio
			unidad = this.props.presupuesto.items[0].unidadDeMedida.nombre
			cantidad = this.props.presupuesto.items[0].cantidad
			imagen = 'http://localhost:8000/' + this.props.presupuesto.items[0].item.foto[0]
		}

		return(
			<div className={classes.root}>
				<CssBaseline />
			 	{this.props.appBar}
				{this.props.drawer}
				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
					<Grid
						container
						spacing={0}
						direction="column"
						alignItems="center"
						justify="center"
					>
						<Paper style={{ padding: 20, margin:50}}>
							<Typography component="div" >
								<Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"	fontStyle='italic'	fontWeight="fontWeightBold" fontSize={22}>
									{ this.props.title }
								</Box>
							</Typography>
							<Divider className={classes.divider} />
							<FormControl>
								<form>
									<Grid container spacing={3}>
										<Grid container xs={12} sm={12}>
											<Grid item xs={12} sm={12}>
												<Typography style={{marginTop:'20px', marginLeft:'15px'}} variant="h5" component="h2">
													{this.props.subtitle1}
													<span style={{paddingLeft:20}}> <Button variant="outlined" style={{color:'#ffba00', borderColor:'#ffba00'}}>{ estado }</Button></span>
												</Typography>
											</Grid>
											<Grid item xs={12} sm={4}>
												<TextField disabled id="standard-required" label={ this.props.labelCompany } value={ this.props.company.nombre }	className={classes.input}	/>
											</Grid>
											<Grid item xs={12} sm={4}>
												<TextField disabled id="standard-required" label="Importe" value={ importe }	className={classes.input}	InputLabelProps={{ shrink: true }}/>
											</Grid>
											<Grid item xs={12} sm={4}>
												<FixedSizeList height={200} width={370} itemSize={100} itemCount={msj.length} >
													{ this.renderRow }
												</FixedSizeList>
											</Grid>
										</Grid>
										<Grid container xs={12} sm={12}>
											<Grid item xs={12} sm={12}>
												<Typography style={{marginLeft:'15px'}} variant="h5" component="h2">
													{this.props.subtitle2}
												</Typography>
											</Grid>
											<Grid item xs={12} sm={4}>
												<TextField disabled id="standard-required" label="Nombre" value={ itemNombre }	className={ classes.input }	/>
											</Grid>
											<Grid item xs={12} sm={4}>
												<TextField disabled id="standard-required" label="Precio" value={ itemPrecio }	className={ classes.input }	/>
											</Grid>
											<Grid item xs={12} sm={4}>
												<TextField disabled id="standard-required" label="Unidad de Medida" value={ unidad }	className={classes.input}	/>
											</Grid>
											<Grid item xs={12} sm={4}>
												<TextField disabled id="standard-required" label="Cantidad" value={ cantidad }	className={ classes.input }	/>
											</Grid>
											<Grid item xs={12} sm={4}>
												<img className={classes.fotoItem}	 src={imagen} />
											</Grid>
										</Grid>
									</Grid>
								</form>	
								<div style={{ width: "100%" }}>
									<Box display="flex" flexDirection="row-reverse" p={1} m={1} >
									{this.props.actions(classes)}
									</Box>
								</div>
							</FormControl>
						</Paper>
					</Grid>
					{this.props.footer}
				</main>
			</div>
		);
	}
}

export default connect(mapStateToProps)(Detail)