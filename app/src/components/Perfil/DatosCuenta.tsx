import React from 'react';
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';

import { Container, FormHelperText, Divider,Grid, CircularProgress, Card, Box, Typography, TextField, CssBaseline,	IconButton, Button, CardContent, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions} from '@material-ui/core';

import * as ubicacionActions from './../../store/actions/ubicacion'
import * as fileActions from './../../store/actions/file'
import { connect } from 'react-redux'
import * as errorActions from './../../store/actions/error'
import * as empresaActions from './../../store/actions/empresa'
import * as dialogActions from './../../store/actions/dialog'

function mapStateToProps(store: {
	ubicacionReducer: any,
	fileReducer: any,
	errorReducer:any,
}) {
	return {
		ubicacionReducer: store.ubicacionReducer,
		fileReducer: store.fileReducer,
		errorReducer: store.errorReducer
	};
}

class DatosCuenta extends React.Component <{
	history: any,
	location: any,
	match: any,
	staticContext?: any,
	update: any,
	empresa: {
		"_id": string,
		"nombre": string,
		"cuit": string,
		"usuario": string,
		"email": string,
		"estado": string,
		"updated_at": string,
		"created_at": string,
		"domicilioLegal": string,
		"localidad": string,
		"logo": string,
		"mostrar_perfil": boolean,
		"provincia": string,
		"telefono": string,
		"clave": string,
	}
}, {
	formValid:boolean,
	loadingMunicipios:boolean,
	localidadSeleccionada:boolean,
	provinciaSeleccionada:boolean,
	provincia: string,
	municipio: string,
	photo: File[],
	errors:any[],
		empresa: {
		"_id": string,
		"nombre": string,
		"cuit": string,
		"usuario": string,
		"email": string,
		"estado": string,
		"updated_at": string,
		"created_at": string,
		"domicilioLegal": string,
		"localidad": string,
		"logo": string,
		"mostrar_perfil": boolean,
		"provincia": string,
		"telefono": string,
		"clave": string,
	}
}>	{

	props: any
	static propTypes: any
	static defaultProps: any
	
	private miPerfilRef: React.RefObject<HTMLFormElement>;
 
	constructor(props: any) {
		super(props);
		this.miPerfilRef = React.createRef();
		this.handleChangeProvincia = this.handleChangeProvincia.bind(this);
		this.handleChangeMunicipio = this.handleChangeMunicipio.bind(this);
		this.changeUsuario = this.changeUsuario.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
		this.changeClave = this.changeClave.bind(this);
		this.changeCUIT = this.changeCUIT.bind(this);
		this.changeDomicilio = this.changeDomicilio.bind(this);
		this.changeTelefono = this.changeTelefono.bind(this);
		this.getFoto = this.getFoto.bind(this);
		this.changeMostrarPerfil = this.changeMostrarPerfil.bind(this);
		this.update = this.update.bind(this);
		this.state = {
			localidadSeleccionada:true,
			provinciaSeleccionada:true,
			loadingMunicipios:false,
			formValid:true,
			errors:[],
			provincia: '',
			municipio: '',
			photo: [],
			empresa: {
				"_id": '',
				"nombre": '',
				"cuit": '',
				"usuario": '',
				"email": '',
				"estado": '',
				"updated_at": '',
				"created_at": '',
				"domicilioLegal": '',
				"localidad": '',
				"logo": '',
				"mostrar_perfil": false,
				"provincia": '',
				"telefono": '',
				"clave": '',
			}
		};
	}

	handleChangeProvincia(e: any) {
		this.setState({ empresa: { ...this.state.empresa, provincia: e.target.value } })
		this.props.dispatch(ubicacionActions.getMunicipiosByName(e.target.value))
		
		this.setState({provinciaSeleccionada:true});

		this.setState({ loadingMunicipios: true });
    setTimeout(() => this.setState({ loadingMunicipios: false }), 5000);
				 
		this.setState({formValid:true});
	}

	handleChangeMunicipio(e: any) {
		this.setState({ empresa: { ...this.state.empresa, localidad: e.target.value } })
		
		this.setState({localidadSeleccionada:true});
				 
		this.setState({formValid:true});
	}

	changeUsuario(e: any) {
		this.setState({ empresa: { ...this.state.empresa, usuario: e.target.value } })
		if(!(e.target.value === undefined && e.target.value === null && e.target.value === '')) {
			this.props.dispatch(errorActions.editErrors(e.target.id))
		}
	}

	changeEmail(e: any) {
		this.setState({ empresa: { ...this.state.empresa, email: e.target.value } })
		if(!(e.target.value === undefined && e.target.value === null && e.target.value === '')) {
			this.props.dispatch(errorActions.editErrors(e.target.id))
		}
	}

	changeClave(e: any) {
		//let state = store.getState();
		this.setState({ empresa: { ...this.state.empresa, clave: e.target.value } })
		
	}

	changeCUIT(e: any) {
		this.setState({ empresa: { ...this.state.empresa, cuit: e.target.value } })
	}

	changeDomicilio(e: any) {
		this.setState({ empresa: { ...this.state.empresa, domicilioLegal: e.target.value } })
	}

	changeTelefono(e: any) {
		this.setState({ empresa: { ...this.state.empresa, telefono: e.target.value } })
	}

	getFoto(e: any) {

		let files: File[] = []

		for (var i = 0; i < e.target.files.length; i++) {
			files.push(e.target.files[i])
		}

		files.map((file: File) => {
			this.props.dispatch(fileActions.upload(file))
		})

		this.setState({ photo: files })
	}

	changeMostrarPerfil() {

		let mostrar_perfil: boolean = false

		if(!this.state.empresa.mostrar_perfil) mostrar_perfil = true

		this.setState({ empresa: { ...this.state.empresa, mostrar_perfil: mostrar_perfil } })

	}

	validacion = () => {
		let formIsValid = true;
		let errores=[];
		let ref: any = this.miPerfilRef.current

		for (let i = 0, element; element = ref[i]; i++) {

			if(!element.checkValidity()){

				errores[element.id]=element.validationMessage;
				errores.length = errores.length + 1;
				formIsValid = false;
				this.setState({formValid:formIsValid})
			}
			
		}

		if(this.state.empresa.localidad == ''){
			this.setState({localidadSeleccionada:false})
			this.setState({formValid:false})
		}

		if(this.state.empresa.provincia == ''){
			this.setState({provinciaSeleccionada:false})
			this.setState({formValid:false})
		}

		this.props.dispatch(errorActions.setError(errores)); 
		return formIsValid;
	}

	update(
		id: string,
		nombre: string,
		usuario: string,
		email: string,
		logo: string,
		password: string,
		telefono: string,
		provincia: string,
		localidad: string,
		visible: boolean,
		domicilio: string,
	) {

		if(this.validacion()){
			 
			this.props.dispatch(empresaActions.updateEmpresa(
				id,
				nombre,
				usuario,
				email,
				logo,
				password,
				telefono,
				provincia,
				localidad,
				visible,
				domicilio
			))
		}
	}
			
	render(){

		const classes = this.props.classes
		const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);
		let apiUrl: string = 'http://localhost:8000/'
		let logo: string = this.state.empresa.logo
		let foto: string = apiUrl + logo
		let upload: string = ''

		if(this.props.fileReducer.fetched) {
			upload = this.props?.fileReducer?.data?.foto?.[0] || ''
		}

		if(upload !== '') {
			foto = apiUrl + upload
		}

		let provincias: any[] = [
			{
				nombre: 'Seleccionar',
				id: '1'
			}
		]

		let municipios: any[] = [
			{
				nombre: 'Seleccionar',
				id: '1'
			}
		]

		if(this.state.empresa._id === '' && this.props.empresa._id!== ''){
			this.setState({ empresa: this.props.empresa})
		}

		if(
			this.props.ubicacionReducer.fetched &&
			this.props.ubicacionReducer.provincias !== undefined
		) {
			provincias = this.props.ubicacionReducer.provincias
		}

		if(
			this.props.ubicacionReducer.fetched &&
			this.props.ubicacionReducer.municipios !== undefined
		) {
			municipios = this.props.ubicacionReducer.municipios
		}

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
											<Typography component="div" >
								<Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"	fontStyle='italic'	fontWeight="fontWeightBold" fontSize={22}>
								{"Mi perfil"}</Box>
							</Typography>
								<Divider className={classes.divider} />
											

										<CardContent>
											<form id="miPerfilForm" ref={ this.miPerfilRef } className={classes.root}>
												<Grid container spacing={3}>
												
												<Grid container spacing={3}>
												<div style={{ width: "100%",	marginTop:"1rem" }}>
													<Box display="flex" flexDirection="row-reverse" p={1} m={1} >
													<FormControlLabel className={classes.Checkbox}
														control={
															<Checkbox
																checked={this.state.empresa.mostrar_perfil}
																onChange={this.changeMostrarPerfil}
																style ={{
																	color: "#d93211",
																}}
															/>
														}
														label="Mostrar Perfil"
													/>
													</Box>
													
												
												</div>
														<Grid item xs={12} sm={4}>
														<TextField
															className={classes.textField}
															label="Usuario"
															variant="outlined"
															value={ this.state.empresa.usuario }
															onChange={ this.changeUsuario }
															id="Usuario"
															InputLabelProps={{
																classes: {
																	root: classes.cssLabel,
																	focused: classes.cssFocused,
																},
															}}
															InputProps={{
																classes: {
																	root: classes.cssOutlinedInput,
																	focused: classes.cssFocused,
																	notchedOutline: classes.notchedOutline,
																},
															}}
															 required={true}
															 error={this.props.errorReducer.errors.Usuario != null ? true : false}
															 helperText={this.props.errorReducer.errors.Usuario != null ? this.props.errors.Usuario : ""}
														/>
														
															
														</Grid>
														<Grid item xs={12} sm={4}>
														<TextField
															className={classes.textField}
															variant="outlined"
															value={this.state.empresa.email}
															onChange={ this.changeEmail }
															label="Email"
															type="email"
															id="Email"
															InputLabelProps={{
																classes: {
																	root: classes.cssLabel,
																	focused: classes.cssFocused,
																},
															}}
															InputProps={{
																classes: {
																	root: classes.cssOutlinedInput,
																	focused: classes.cssFocused,
																	notchedOutline: classes.notchedOutline,
																},
															}}
															 required={true}
															 error={this.props.errorReducer.errors.Email != null ? true : false}
															 helperText={this.props.errorReducer.errors.Email != null ? this.props.errors.Email : ""}
														/>
															
														</Grid>
													
													<Grid item xs={12} sm={4}>
														<TextField
															className={classes.textField}
															variant="outlined"
															disabled
															value={ this.state.empresa.cuit }
															onChange={ this.changeCUIT }
															label="CUIT"
															type="text"
															InputLabelProps={{
																classes: {
																	root: classes.cssLabel,
																	focused: classes.cssFocused,
																},
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
														
														<Grid item xs={12} sm={4}>
														<TextField
															className={classes.textField}
															variant="outlined"
															disabled
															value={ this.state.empresa.nombre }
															label="Razón social"
															type="text"
															InputLabelProps={{
																classes: {
																	root: classes.cssLabel,
																	focused: classes.cssFocused,
																},
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
													
													<Grid item xs={12} sm={4}>
														<TextField
														
															variant="outlined"
															value={ this.state.empresa.domicilioLegal }
															onChange={ this.changeDomicilio }
															label="Domicilio"
															type="text"
															className={classes.textField}
															InputLabelProps={{
																classes: {
																	root: classes.cssLabel,
																	focused: classes.cssFocused,
																},
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
														<Grid item xs={12} sm={4}>
														{this.props.loadingProvincias && <CircularProgress />}
														<FormControl 
														variant="outlined" 
														className={classes.formControl}
														 error={!this.state.provinciaSeleccionada} >
															<InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>Provincia</InputLabel>
															<Select
																labelId="demo-simple-select-outlined-label"
																id="demo-simple-select-outlined"
																className={classes.select}
																label="Provincia"
																value={this.state.empresa.provincia} 
																onChange={this.handleChangeProvincia}
																disabled={this.props.loadingProvincias }
															>
																{provincias.map((provincia: {
																	nombre: string,
																	id: string
																}) => {
																	return <MenuItem value={provincia.nombre}>{provincia.nombre}</MenuItem>
																})}
															</Select>
															 {!this.state.provinciaSeleccionada && <FormHelperText error={true} >Selecciona una Provincia</FormHelperText>} 
														</FormControl>
														</Grid>
														<Grid item xs={12} sm={4}>
														{this.state.loadingMunicipios && <CircularProgress />}
														<FormControl 
														variant="outlined"	
														className={classes.formControl}
														 error={!this.state.localidadSeleccionada} >
															<InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>Ciudad</InputLabel>
															<Select
																labelId="demo-simple-select-outlined-label"
																id="demo-simple-select-outlined"
																className={classes.select}
																label="Ciudad"
																value={this.state.empresa.localidad} 
																onChange={this.handleChangeMunicipio}
																disabled={this.state.loadingMunicipios}
															>
																{municipios.map((municipio: {
																	nombre: string,
																	id: string
																}) => {
																	return <MenuItem value={municipio.nombre}>{municipio.nombre}</MenuItem>
																})}
															</Select>
															 {!this.state.localidadSeleccionada && <FormHelperText error={true} >Selecciona una Localidad</FormHelperText>} 
														</FormControl>
													 
														</Grid>
														
													<Grid item xs={12} sm={4}>
														<TextField
															className={classes.textField}
															variant="outlined"
															value={ this.state.empresa.telefono }
															onChange={ this.changeTelefono }
															label="Teléfono"
															type="number"
															InputLabelProps={{
																classes: {
																	root: classes.cssLabel,
																	focused: classes.cssFocused,
																},
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
														<Grid item xs={12} sm={6}>
														<input accept="image/*" className={classes.input} id="icon-button-file" type="file"	onChange = { this.getFoto } />
														<label htmlFor="icon-button-file">
															<IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton}>
																<PhotoCamera />
															</IconButton>
														</label>
														</Grid>
														<Grid item xs={12} sm={4}>
															<img className={classes.fotoLogo}	 src={ foto } ></img>
														</Grid>
													</Grid>
												 
												</Grid>
											</form>
										</CardContent>
										<CardActions>

												<Grid container spacing={3} direction = 'column' alignItems = 'flex-end'	>

													<Grid item lg={12} >

												<Button
													variant="contained"
													color='primary'
													size="small"
													className={classes.button}
													startIcon={<SaveIcon />}
													disabled={ !this.state.formValid && !this.state.provinciaSeleccionada && !this.state.localidadSeleccionada}
													onClick={() => this.update(
														this.state.empresa._id,
														this.state.empresa.nombre,
														this.state.empresa.usuario,
														this.state.empresa.email,
														upload !== '' ? upload : logo,
														this.state.empresa.clave,
														this.state.empresa.telefono,
														this.state.empresa.provincia,
														this.state.empresa.localidad,
														this.state.empresa.mostrar_perfil,
														this.state.empresa.domicilioLegal,
													)}
												>
													Guardar
												</Button>
											</Grid>
										</Grid>
									</CardActions>
								</Card>
							</Grid>
						</Grid>
					</Container>
					{ this.props.footer }
				</main>
			</div>
		);
	}
}

DatosCuenta.defaultProps = {
	classes: {
		color: 'color'
	}
}

export default connect(mapStateToProps)(DatosCuenta)