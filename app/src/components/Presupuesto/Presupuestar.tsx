import React from 'react';
import {TextField, ListItem, Box,Paper, FormControl, Divider,ListItemAvatar, ListItemText, Grid,Typography, CssBaseline,	Avatar,	Button,TextareaAutosize} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FixedSizeList } from 'react-window';

const CssTextField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#d93211',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#d93211',
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#d93211',
			},
			'&:hover fieldset': {
				borderColor: '#d93211',
			},
			'&.Mui-focused fieldset': {
				borderColor: '#d93211',
			},
		},
	},
})(TextField);

class Presupuestar extends React.Component <{}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

	// eslint-disable-next-line no-useless-constructor
	constructor(props: any) {
		super(props);
		this.renderRow = this.renderRow.bind(this)
		this.state = {};
	}

	renderRow(props: any, mensajes: any[]) {
		const { index, style } = props;

		return (
			<ListItem button style={style} key={index}>
				<ListItem alignItems="flex-start">
					<ListItemAvatar>
						<Avatar 
							alt={ mensajes?.[index].empresa?.nombre || '' }
							src={ 'http://localhost:8000/' + mensajes?.[index].empresa?.logo || '' }
						/>
					</ListItemAvatar>
					<ListItemText
						secondary={
							<React.Fragment>
								<Typography
									component="span"
									variant="body2"
									color="textPrimary"
								>
									{ mensajes?.[index].empresa?.nombre || '' }
								</Typography>
								{" — " + mensajes?.[index].comentario || ''}
							</React.Fragment>
						}
					/>
				</ListItem>
			</ListItem>
		);
	}

	componentWillReceiveProps() {

		if(this.props.presupuesto !== undefined) {
			this.setState({
				presupuesto: this.props.presupuesto
			})
		}

	}

	render(){

		let foto: string = ''
		let itemPresupuesto: {
			cantidad: number,
			item: {
				nombre: string,
				precio: string,
				foto: string[]
			},
			unidadDeMedida: {
				nombre: string
			}
		} = {
			cantidad: 0,
			item: {
				nombre: '',
				precio: '0',
				foto: []
			},
			unidadDeMedida: {
				nombre: ''
			}
		}

		let empresa_demandante: {
			_id: string,
			email: string,
			nombre: string
		} = {
			_id: '',
			email: '',
			nombre: ''
		}

		let empresa_perteneciente: {
			_id: string,
			email: string,
			nombre: string
		} = {
			_id: '',
			email: '',
			nombre: ''
		}

		let mensajes: {
			comentario: string,
			leido: boolean,
			empresa: {
				nombre: string,
				logo: string
			}
		}[] = []

		if(
			this.props.presupuesto !== undefined &&
			this.props.presupuesto.items !== undefined &&
			Array.isArray(this.props.presupuesto.items) &&
			this.props.presupuesto.items.length > 0
		) {
			itemPresupuesto = this.props.presupuesto.items[0]
		}

		if(
			this.props.presupuesto !== undefined &&
			this.props.presupuesto.empresa_demandante !== undefined
		) {
			empresa_demandante = this.props.presupuesto.empresa_demandante
		}

		if(
			itemPresupuesto !== undefined &&
			itemPresupuesto.item !== undefined &&
			itemPresupuesto.item.foto !== undefined &&
			Array.isArray(itemPresupuesto.item.foto) &&
			itemPresupuesto.item.foto.length > 0
		) {
			foto = 'http://localhost:8000/' + itemPresupuesto.item.foto[0]
		}

		if(
			this.props?.messageList !== undefined &&
			Array.isArray(this.props.messageList) &&
			this.props.messageList.length > 0
		) {
			mensajes = this.props.messageList
		}

		const classes = this.props.classes
		let msj: string = ''

		if(
			this.props.presupuesto !== null &&
			this.props.presupuesto !== undefined &&
			this.props.presupuesto.mensajes !== undefined &&
			this.props.presupuesto.mensajes.length
		) {
			this.props.presupuesto.mensajes.map((mensaje: {
				comentario: string
			}) => {
				msj = msj + mensaje.comentario
			})	
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
								{"Presupuestación"}
								</Box>
							</Typography>
							<Divider className={classes.divider} />
						<FormControl>
						<form id="presupuestarForm" ref={this.props.presupuestarRef}>
						<Grid container spacing={3}>
							<Grid container xs={12} sm={12}>
							<Grid item xs={12} sm={12}>
								<Typography style={{marginTop:'20px', marginLeft:'15px'}} variant="h5" component="h2">
									Datos del solicitante
								</Typography>
								</Grid>
								<Grid item xs={12} sm={4}>
								<TextField disabled id="Empresa" label="Empresa" value={ empresa_demandante.nombre } className={classes.input}	/>
								</Grid>
								<Grid item xs={12} sm={4}>
								<TextField disabled id="Email" label="Email" value={ empresa_demandante.email } className={classes.input}	/>
								</Grid>
								<Grid item xs={12} sm={4}>
								<TextField disabled id="Telefono" label="Telefono" value="poner el telefono aqui" className={classes.input}	/>
								</Grid>
								<Grid item xs={12} sm={4}>
								<TextField disabled id="Provincia" label="Provincia" value="poner la provincia aqui" className={classes.input}	/>
								</Grid>
								<Grid item xs={12} sm={4}>
								<TextField disabled id="Ciudad" label="Ciudad" value="poner la ciudad aqui" className={classes.input}	/>
								</Grid>
								<Grid item xs={12} sm={4}>
								<TextField disabled id="CP" label="CP" value="poner el cp aqui" className={classes.input}	/>
								</Grid>
							</Grid>

							<Grid container xs={12} sm={12}>
							<Grid item xs={12} sm={12}>
								<Typography style={{marginTop:'20px', marginLeft:'15px'}} variant="h5" component="h2">
								Presupuesto solicitado
								</Typography>
								</Grid>
								<Grid item xs={12} sm={4}>
								<TextField disabled id="ProductoSolicitado" label="Producto" value={ itemPresupuesto?.item?.nombre || '' } className={classes.input}	/>
								</Grid>
								<Grid item xs={12} sm={4}>
								<TextField disabled id="CantidadSolicitada" label="Cantidad" value={ itemPresupuesto?.cantidad || 0 } className={classes.input}	/>
								</Grid>
								<Grid item xs={12} sm={4}>
								<TextField disabled id="UnidadSolicitada" label="Unidad" value={ itemPresupuesto?.unidadDeMedida?.nombre || '' } className={classes.input}	/>
								</Grid>
								<Grid item xs={12} sm={4}>
								<TextField disabled id="PrecioSolicitado" label="Precio" value={ itemPresupuesto?.item?.precio || '0' } className={classes.input}	/>
								</Grid>
								<Grid item xs={12} sm={4}>
								
								<FixedSizeList height={200} width={370} itemSize={100} itemCount={mensajes.length} >
									{ (props) => this.renderRow(props, mensajes) }
								</FixedSizeList>
									{/* <TextareaAutosize style={{borderRadius:7}} disabled aria-label="minimum height" rowsMin={8} className={classes.textTarea} value={msj}	/> */}
								</Grid>
								<Grid item xs={12} sm={4}>
									<img className={classes.fotoItem} alt={ foto }	src={ foto } /> 
								</Grid>
							</Grid>
						</Grid>

						<Grid container xs={12} sm={12}>
							<Grid item xs={12} sm={12}>
							<Typography style={{marginTop:'20px', marginLeft:'15px'}} variant="h5" component="h2">
									Mi presupuesto
								</Typography>
							</Grid>
							<Grid item xs={12} sm={4}>
							<CssTextField 
								className={classes.margin} 
								id="Cantidad" 
								label="Cantidad" 
								type="number" 
								onChange={this.props.getCantidadItem}
								required={true}
								error={this.props.errors.Cantidad != null ? true : false}
								helperText={this.props.errors.Cantidad != null ? this.props.errors.Cantidad : ""}
								inputProps={{min:1}}	 
										/>
							</Grid>
							<Grid item xs={12} sm={4}>
							<CssTextField 
								className={classes.margin} 
								id="Importe" 
								label="Importe" 
								type="number" 
								onChange={this.props.getImporte} 
								required={true}
								error={this.props.errors.Importe != null ? true : false}
								helperText={this.props.errors.Importe != null ? this.props.errors.Importe : ""}
								inputProps={{min:1}}	/>
							</Grid>
							<Grid item xs={12} sm={4}>
							<TextareaAutosize style={{borderRadius:7}} aria-label="minimum height" rowsMin={8} className={classes.textTarea} placeholder="Mensaje" onChange={this.props.getComentario}	/> 
							</Grid>
						</Grid>

						</form>
						<div style={{ width: "100%",	marginTop:"1rem" }}>
							<Box display="flex" flexDirection="row-reverse" p={1} m={1} >
							<Button
								variant="contained"
								color='primary'
								size="small"
								className={classes.button}
								//startIcon={<SendIcon />}
								onClick={this.props.cancelar}
							>
								Cancelar
							</Button>

							<Button
								variant="contained"
								color='primary'
								size="small"
								className={classes.button}
								onClick={ () => this.props.save(this.props?.presupuesto?.items?.[0]?.item?._id || '') }
								disabled={ !this.props.formValid}
							>
								Aceptar
							</Button>
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



export default Presupuestar
