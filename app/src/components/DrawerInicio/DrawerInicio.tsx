import React from 'react';
import { connect } from 'react-redux'
import clsx from 'clsx'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { List,Collapse, FormControlLabel,Typography, TextField, Checkbox, Grid, OutlinedInput, InputAdornment,  FormControl, Button, InputLabel,Select, MenuItem, Divider,Drawer} from '@material-ui/core';
import * as drawerAction from './../../store/actions/drawer';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import RoomIcon from '@material-ui/icons/Room';
import Rating from '@material-ui/lab/Rating';
import  logoLetras  from './../Login/img/logoLetras.png'
import * as ubicacionActions from './../../store/actions/ubicacion'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import * as actividadEconomicaActions from './../../store/actions/actividadEconomica'
import * as itemActions from './../../store/actions/item'
import AppsIcon from '@material-ui/icons/Apps';
import { withStyles } from '@material-ui/core/styles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

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

function mapStateToProps(store: {
  ubicacionReducer: any,
  drawerReducer: {
    open: boolean
	},
	actividadEconomicaReducer: any,
	itemReducer: any
}) {
  return {
		open: store.drawerReducer.open,
		ubicacionReducer: store.ubicacionReducer,
		actividadEconomicaReducer: store.actividadEconomicaReducer,
		itemReducer: store.itemReducer,
  };
}

class DrawerInicio extends React.Component<{}, {
	anchorEl: null | HTMLElement,
	mobileMoreAnchorEl: null | HTMLElement
	valueFilter: number | null,
	hoverFilter: any,
	provincia: string,
	municipio: string,
	grupo: string,
	openCategorias: boolean,  
	openFiltros:boolean,
	precioMinimo: string,
	precioMaximo: string,

}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
			anchorEl: null,
			mobileMoreAnchorEl: null,
			valueFilter: 0,
			hoverFilter: -1,
			provincia: '',
			municipio: '',
			grupo: '',
			openCategorias: false,
			openFiltros: false,
			precioMinimo:'',
			precioMaximo:''
		};
	}

	componentWillMount() {

		if(
		  !this.props.ubicacionReducer.fetched &&
		  !this.props.ubicacionReducer.fetching
		) {
		  this.props.dispatch(ubicacionActions.getProvincias())
		}

		this.props.dispatch(actividadEconomicaActions.getActividadesEconomicas())
	
	}

	handleChangeProvincia = (e: any) => {
		this.setState({
			provincia: e.target.value,
			municipio: ''
		});
	
		if(
		  this.props.ubicacionReducer.provincias !== undefined
		) {
		  this.props.ubicacionReducer.provincias.map((provincia: {
			nombre: string,
			id: string
		  }) => {
			if(e.target.value == provincia.nombre) {
			  this.props.dispatch(ubicacionActions.getMunicipios(provincia.id))
			}
		  })
		}
	
	}


	handleChangeMunicipio = (e: any) => {
		this.setState({
		  municipio: e.target.value
		});
	}

	handleClickCategorias = (e: any) => {
		this.setState({ openCategorias: !this.state.openCategorias })
	}

	handleClickFiltros = (e: any) => {
		this.setState({ openFiltros: !this.state.openFiltros })
	}

	getGrupo = (e: any) => {
		this.setState({ grupo: e.target.value });
	}

	filter = () => {

		let valoracion: string = ''

		if(this.state.valueFilter !== null) {
			valoracion = this.state.valueFilter.toString()
		}

		let itemName: string = 'none'
		let provincia: string = 'none'
		let localidad: string = 'none'
		let empresaName: string = 'none'
		let precioMinimo: string = 'none'
		let precioMaximo: string = 'none'

		if(this.state.provincia !== '') provincia = this.state.provincia
		if(this.state.municipio !== '') localidad = this.state.municipio

		this.props.dispatch(itemActions.search(
			itemName,
			provincia,
			localidad,
			'none',
			empresaName,
			precioMinimo,
			precioMaximo,
		))
	}

	clearFilter = () => {

	
		let valoracion: string = ''

		if(this.state.valueFilter !== null) {
			valoracion = this.state.valueFilter.toString()
		}

		let itemName: string = 'none'
		let provincia: string = 'none'
		let localidad: string = 'none'
		let empresaName: string = 'none'
		let precioMinimo: string = 'none'
		let precioMaximo: string = 'none'

		this.setState({provincia:''});
		this.setState({municipio:''});
		this.setState({valueFilter:0});
		this.setState({precioMinimo:''});
		this.setState({precioMaximo:''});

	

		this.props.dispatch(itemActions.search(
			itemName,
			provincia,
			localidad,
			'none',
			empresaName,
			precioMinimo,
			precioMaximo,
		))
	}

	render(){

		const classes = this.props.classes

		const handleDrawerClose = () => {
			this.props.dispatch(drawerAction.close())
		};

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

		let grupos: any[] = []

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

		if(this.props.actividadEconomicaReducer.fetched) {
			grupos = this.props.actividadEconomicaReducer.data.actividad
		}

		return(
			
				
				<Drawer
					variant="permanent"
					classes={{
						paper: clsx(classes.drawerPaper, !this.props.open && classes.drawerPaperClose),
					}}
					open={this.props.open}
				>
					<div className={classes.toolbar} >
						<Typography style={{color:'#d93211', marginTop: '15px', marginLeft:'25px', fontStyle:'italic'}} variant="h5"  gutterBottom>
							Suppliers Store
						</Typography>
					</div>
					
					<Divider />

					<List component="div" disablePadding>

						{/* <ListItem >
							<ListItemIcon>
								<AppsIcon className={classes.iconButton} />	
							</ListItemIcon>
							<ListItemText primary="Rubros" />
						</ListItem> */}

						{/* <ListItem >
							<FormControl variant="outlined" className={classes.formControl}>
								<InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>Rubros</InputLabel>
								<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									className={classes.select}
									label="Rubros"
									value={ this.state.grupo }
									onChange={ this.getGrupo }
								>
									{
										grupos.map((grupo: {
											nombre: string
										}) => {
											return <MenuItem value={grupo.nombre}>{grupo.nombre}</MenuItem>
										})
									}
								</Select>
							</FormControl>
						</ListItem>
							 */}
						<ListItem >
							<ListItemIcon>
								<RoomIcon className={classes.iconButton} />	
							</ListItemIcon>
							<ListItemText primary="Ubicacion" />
						</ListItem>

						<ListItem >
							<FormControl variant="outlined" className={classes.formControl}>
								<InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>Provincia</InputLabel>
									<Select
										labelId="demo-simple-select-outlined-label"
										id="demo-simple-select-outlined"
										className={classes.select}
										label="Provincia"
										value={this.state.provincia} 
										onChange={this.handleChangeProvincia}
									>
										{
											provincias.map((provincia: {
												nombre: string,
												id: string
											}) => {
												return <MenuItem value={provincia.nombre}>{provincia.nombre}</MenuItem>
											})
										}
									</Select>
							</FormControl>
						</ListItem>


						<ListItem >
							<FormControl variant="outlined"  className={classes.formControl}>
														
								<InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>Ciudad</InputLabel>
								<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									className={classes.select}
									label="Ciudad"
									value={this.state.municipio} 
									onChange={this.handleChangeMunicipio}
									defaultValue={1}
								>
									{
										municipios.map((municipio: {
											nombre: string,
											id: string
										}) => {
											return <MenuItem value={municipio.nombre}>{municipio.nombre}</MenuItem>
										})
									}
								</Select>
							</FormControl>
						</ListItem>


						<ListItem>
								<ListItemIcon>
									<StarHalfIcon className={classes.iconButton} />
								</ListItemIcon>
								<ListItemText primary="Valoracion" />
							</ListItem>
							
							<ListItem >
								<Rating className={classes.rating}
									name="hover-feedback-price"
									value={this.state.valueFilter}
									precision={1}
									onChange={(event, newValueFilter) => {
										this.setState({
										valueFilter: newValueFilter
										})
									}}
									onChangeActive={(event, newValueFilter) => {
										this.setState({
										hoverFilter: newValueFilter
										})
									}}
								/>
							</ListItem>

							<ListItem>
								<ListItemIcon>
									<AttachMoneyIcon className={classes.iconButton} />
								</ListItemIcon>
								<ListItemText primary="Precio" />
							</ListItem>
							<Grid container spacing={3}>
							<ListItem >
								
								<Grid item xs={12} sm={6}>
								<TextField
								className={classes.textField}
								variant="outlined"
								label="Minimo"
								type="number"
								value={this.state.precioMinimo}
								inputProps={{min:1}}
								onChange={(event) => {
									this.setState({
									precioMinimo: event.target.value,
									})
								}}
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
								<TextField
								className={classes.textField}
								variant="outlined"
								label="Maximo"
								value={this.state.precioMaximo}
								type="number"
								inputProps={{min:1}}
								onChange={(event) => {
									this.setState({
									precioMaximo: event.target.value,
									})
								}}
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
								
							</ListItem>
</Grid>
							
							<Grid>
							<Button onClick={ this.filter } variant="contained" className={classes.Boton}>
								Aplicar Filtro
							</Button>
							</Grid>
							<Grid>
							<Button onClick={ this.clearFilter } variant="contained" className={classes.Boton2}>
								Eliminar Filtro
							</Button>
							</Grid>
						</List>
				</Drawer>
						
		);
	}
}

export default connect(mapStateToProps)(DrawerInicio)