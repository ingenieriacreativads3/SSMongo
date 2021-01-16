import React from 'react';
import { connect } from 'react-redux'
import clsx from 'clsx'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { List,Collapse, FormControlLabel,Typography, Checkbox,  FormControl, Button, InputLabel,Select, MenuItem, Divider,Drawer} from '@material-ui/core';
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
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.handleClickCategorias = this.handleClickCategorias.bind(this);
		this.handleClickFiltros = this.handleClickFiltros.bind(this);
		this.handleChangeProvincia = this.handleChangeProvincia.bind(this);
		this.handleChangeMunicipio = this.handleChangeMunicipio.bind(this);
		this.state = {
			anchorEl: null,
			mobileMoreAnchorEl: null,
			valueFilter: 2,
			hoverFilter: -1,
			provincia: '',
			municipio: '',
			grupo: '',
			openCategorias: false,
			openFiltros: false,
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

	handleChangeProvincia(e: any) {
		this.setState({
		  provincia: e.target.value
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


	handleChangeMunicipio(e: any) {
		this.setState({
		  municipio: e.target.value
		});
	}

	handleClickCategorias(e: any) {
		this.setState({ openCategorias: !this.state.openCategorias })
	}

	handleClickFiltros(e: any) {
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

		this.props.dispatch(itemActions.search(
			'none',
			this.state.provincia,
			valoracion,
			'none'
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
						{/* <Avatar src={logoLetras} className={classes.avatar} ></Avatar> */}
					</div> 
					
					<Divider />

					<List component="div" disablePadding>

						<ListItem >
							<ListItemIcon>
								<RoomIcon className={classes.iconButton} />	
							</ListItemIcon>
							<ListItemText primary="Filtros" />
						</ListItem>

						<ListItem >
							<ListItemIcon>
								<RoomIcon className={classes.iconButton} />	
							</ListItemIcon>
							<ListItemText primary="Categorías" />
						</ListItem>

						<ListItem >
							<FormControl variant="outlined" className={classes.formControl}>
								<InputLabel id="demo-simple-select-outlined-label" className={classes.inputLabel}>Grupos</InputLabel>
								<Select
									labelId="demo-simple-select-outlined-label"
									id="demo-simple-select-outlined"
									className={classes.select}
									label="Provincia"
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
									{provincias.map((provincia: {
										nombre: string,
										id: string
									}) => {
										return <MenuItem value={provincia.nombre}>{provincia.nombre}</MenuItem>
									})}
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
								{municipios.map((municipio: {
									nombre: string,
									id: string
								}) => {
									return <MenuItem value={municipio.nombre}>{municipio.nombre}</MenuItem>
								})}
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

							<Button onClick={ this.filter } variant="contained" className={classes.Boton}>
								Aplicar Filtro
							</Button>
								
						</List>
				</Drawer>
						
		);
	}
}

export default connect(mapStateToProps)(DrawerInicio)