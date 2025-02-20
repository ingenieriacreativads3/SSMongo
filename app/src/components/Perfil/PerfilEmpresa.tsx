import React from 'react';
import { Link} from "react-router-dom";
import { Grid, Paper, TextareaAutosize,Divider, ListSubheader, CardMedia, Card, Box, Typography, TextField, CssBaseline, Button, CardContent,	FormControl} from '@material-ui/core';
import	foto	from './../Login/img/logo.png'
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import { connect } from 'react-redux'
import SendIcon from '@material-ui/icons/Send';
import config from './../../config'

import * as empresaActions from './../../store/actions/empresa'
import * as itemActions from './../../store/actions/item'
import * as userActions from './../../store/actions/user'

function mapStateToProps(store: {
	empresaReducer: any,
	itemReducer: any,
	userReducer: any,
}) {
	return {
		userReducer: store.userReducer,
		itemReducer: store.itemReducer,
		empresaReducer: store.empresaReducer,
	};
}

class PerfilEmpresa extends React.Component <{}, {
	mensaje: string
}>	{

	props: any
	static propTypes: any
	static defaultProps: any
 
	constructor(props: any) {
		super(props);
		this.state = {
			mensaje: ''
		};
	}

	componentWillMount = () => {
		this.props.dispatch(empresaActions.getEmpresa(this.props.match.params.id))
		this.props.dispatch(itemActions.getCatalogo(this.props.match.params.id))
		
		let userId: string | null = localStorage.getItem(config.session_user)
		if(localStorage.getItem(config.session_user) === null || localStorage.getItem(config.session_user) === undefined) this.props.history.push('/')
		if(userId !== null) this.props.dispatch(userActions.get(userId))
		
	}

	register = () => {
		this.props.dispatch(empresaActions.setMensaje(
			this.props.userReducer?.data?.empresa?._id || '',
			this.props.empresaReducer?.data?.empresa?._id || '',
			this.state.mensaje
		))
	}

	get = (e: any) => {
		this.setState({
			...this.state,
			[e.target.name]: e.target.value
		})
	}

	render(){

		const classes = this.props.classes
		
		let empresa: any = {}
		let items: any[] = []
		let user: any = {}
		let rubros: any[] = []

		if(this.props.empresaReducer.perfil && this.props.empresaReducer.data.empresa !== undefined) {
			empresa = this.props.empresaReducer.data.empresa
		}

		if(this.props.itemReducer.fetched) {
			items = this.props.itemReducer?.data?.items || []
		}

		if(this.props.userReducer.fetched) {
			user = this.props.userReducer?.data?.empresa || {}
		}

		if(empresa.rubros !== undefined) {
			rubros = empresa.rubros
		}

		return(
			<div className={classes.root}>
				<CssBaseline />
				{ this.props.appBar }
				{ this.props.drawer }

				<main className={classes.content}>
					<div className={classes.appBarSpacer} />
          <Grid
            container
          >
            <Paper style={{width:"100%", padding: 20, margin:50}}>
              <FormControl fullWidth>
                <Grid container xs={12} sm={12}>

				<Grid item xs={12} sm={6}>
				<Grid container
  					direction="row"
  					justify="center"
  					alignItems="flex-start" xs={12} sm={12}>
				<Typography className = {classes.nombreEmpresa} variant="h2" component="h3" gutterBottom>
					{ empresa?.nombre || '' }
				</Typography>
				</Grid>
				<Grid container
  					direction="row"
  					justify="center"
  					alignItems="flex-start" xs={12} sm={12}>
				<Box>			
					<img src={'http://localhost:8000/' + empresa.logo} className={classes.img} />
					{
						rubros.map((rubro: {
							nombreRubro: string,
							grupo: string
						}) => {
							return <Typography variant="h5" className={classes.item} gutterBottom>
								<BuildOutlinedIcon fontSize="large" style={{ color: '#d93211' }} />
								{' ' + rubro.grupo } - { rubro.nombreRubro }
							</Typography>
						})
					}
					<Typography variant="h5"	className={classes.item} gutterBottom>
						<LocationOnIcon fontSize="large" style={{ color: '#d93211' }} />
						{' ' +  empresa.localidad } - { empresa.provincia }
					</Typography>
					<Typography variant="h5"className={classes.item}	 gutterBottom>
						<PhoneIcon fontSize="large" style={{ color: '#d93211' }} />
						{' ' +  empresa.telefono }
					</Typography>
				</Box>
				</Grid>
				</Grid>

				<Grid container
  					direction="row"
  					justify="center"
  					alignItems="flex-start" xs={12} sm={6}>
				<Box	border={2} borderRadius={16} borderColor="#7f7f7f">
				<Typography className={classes.titulo}	variant="h4" component="h3" gutterBottom>
					Contactanos
				</Typography> 
				<Grid item xs={12} sm={12}>
				<TextField
					className={classes.datoContacto}
					variant="outlined"
					disabled
					value={ user?.nombre || ''  }
					label="Nombre"
					type="text"
					InputLabelProps={{
						classes: {
							root: classes.cssLabel,
							focused: classes.cssFocused,
						},
						shrink: true
					}}
					InputProps={{
						classes: {
							root: classes.cssOutlinedInput,
							focused: classes.cssFocused,
							notchedOutline: classes.notchedOutline,
						},
					}}
				/>			 
				</Grid>
				<Grid item xs={12} sm={12}>
				<TextField
					className={classes.datoContacto}
					variant="outlined"
					disabled
					value={ user?.email }
					label="Email"
					type="email"
					name='email'
					InputLabelProps={{
						classes: {
							root: classes.cssLabel,
							focused: classes.cssFocused,
						},
						shrink: true
					}}
					InputProps={{
						classes: {
							root: classes.cssOutlinedInput,
							focused: classes.cssFocused,
							notchedOutline: classes.notchedOutline,
						},
					}}
				/>
				</Grid>
				<TextareaAutosize	
					style={{ borderRadius:7 }}
					aria-label="minimum height"
					rowsMin={10}
					placeholder="Mensaje"
					className={classes.textTarea}
					onChange={ this.get }
					name='mensaje'
				/>
			<Grid
			container
			direction="row"
			justify="flex-end"
			alignItems="flex-end"
			>
			<Button
				variant="contained"
				color='primary'
				size="small"
				className={classes.buttonEnviar}
				startIcon={<SendIcon />}
				onClick={ this.register }
			>
				Enviar
			</Button>
			</Grid>
		</Box>
				</Grid>


				</Grid>
				<Grid xs={12} sm={12} 
				container
				direction="column"
				justify="center"
				alignItems="center">
				<Grid item xs={12} sm={6}>
				<ListSubheader	className={classes.titleProductos}>
					<Divider></Divider>			 
					Nuestros Productos
				</ListSubheader> 
				</Grid>
				
				</Grid>

				<Grid
				container
				direction="row"
				alignItems="flex-start"
				justify="flex-start"
				spacing={3}
				xs={12} sm={12}>

				{
				items.map((item: {
					item: {
						_id: string,
						foto: string[],
						nombre: string,
						precio: string,
						mostrarPrecio:boolean,
						unidad_de_medida: {
							nombre: string
						}
					}
				}) => {
					return <Grid item xs={12} sm={6} md={3}>
					<Link to={ '/item/detalle/' + item.item._id } style={{textDecoration:'none'}}>
						<Card className={classes.cardProducto} >
								<CardMedia
									component="img"
									alt={ item.item.nombre }
									height="140"
									image={ 'http://localhost:8000/' + item.item.foto[0] }
									title={ item.item.nombre }
									className={classes.cardMedia}
								/>
								<CardContent className={classes.cardContent}>
									<Typography gutterBottom variant="h5" className={classes.cardName} >
										{ item.item.nombre.length > 42 ?  item.item.nombre.slice(0, 39) + "..." : item.item.nombre }
									</Typography>
								
									<Typography style={{color:"#d93211"}}  gutterBottom variant="h5" component="h2" >
										{ item.item.mostrarPrecio ? "$" + item.item.precio : 'Consultar precio' }	{<Typography style={{display:'inline-block'}} variant="subtitle1" color="textSecondary"> x { item.item.unidad_de_medida.nombre }</Typography>}
									</Typography>
									
								</CardContent>
						</Card>
					</Link>
					</Grid>
				})
			}
		  					</Grid>
							</FormControl>
						</Paper>
					</Grid>
				</main>
			</div>
		);
	}
}


export default connect(mapStateToProps)(PerfilEmpresa)