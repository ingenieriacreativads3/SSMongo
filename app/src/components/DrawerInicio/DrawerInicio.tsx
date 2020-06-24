import React, { Component }  from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import clsx from 'clsx'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add'
import ListSubheader from '@material-ui/core/ListSubheader';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { FormControl, Button, InputLabel,Select, MenuItem, Divider,Drawer, IconButton} from '@material-ui/core';
import * as drawerAction from './../../store/actions/drawer';
import StorefrontIcon from '@material-ui/icons/Storefront';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import RoomIcon from '@material-ui/icons/Room';
import Rating from '@material-ui/lab/Rating';

import * as ubicacionActions from './../../store/actions/ubicacion'

function mapStateToProps(store: {
  ubicacionReducer: any,
  drawerReducer: {
    open: boolean
  }
}) {
  return {
	open: store.drawerReducer.open,
	ubicacionReducer: store.ubicacionReducer
  };
}

class DrawerInicio extends React.Component<{}, {
	anchorEl: null | HTMLElement,
	mobileMoreAnchorEl: null | HTMLElement
	valueFilter: number | null,
	hoverFilter: any,
	provincia: string,
  	municipio: string
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.handleChangeProvincia = this.handleChangeProvincia.bind(this);
		this.handleChangeMunicipio = this.handleChangeMunicipio.bind(this);
		this.state = {
			anchorEl: null,
			mobileMoreAnchorEl: null,
			valueFilter: 2,
			hoverFilter: -1,
			provincia: '',
			municipio: ''
		};
	}


	componentWillMount() {

		if(
		  !this.props.ubicacionReducer.fetched &&
		  !this.props.ubicacionReducer.fetching
		) {
		  this.props.dispatch(ubicacionActions.getProvincias())
		}
	
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


	render(){

		const classes = this.props.classes

		const handleDrawerClose = () => {
			this.props.dispatch(drawerAction.close())
		};

		const labels: { [index: string]: string } = {
			1: 'Muy Malo',
			2: 'Malo',
			3: 'Bueno',
			4: 'Muy Bueno',
			5: 'Excelente',
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
			
				
				<Drawer
					variant="permanent"
					classes={{
						paper: clsx(classes.drawerPaper, !this.props.open && classes.drawerPaperClose),
					}}
					open={this.props.open}
				>
					
					<div className={classes.toolbarIcon}>
						<IconButton onClick={handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					
					 <ListSubheader inset className={classes.subtitle}>Categorias</ListSubheader>
					
					<ListItem button>
						<ListItemIcon>
							<BuildOutlinedIcon className={classes.iconButton} />
						</ListItemIcon>
						<ListItemText primary="Construccion" />
                	</ListItem>
					<ListItem button>
						<ListItemIcon>
							<LocationCityOutlinedIcon className={classes.iconButton} />
						</ListItemIcon>
						<ListItemText primary="Industria manufacturera" />
                	</ListItem>
					<ListItem button>
						<ListItemIcon>
							<StorefrontIcon className={classes.iconButton} />
						</ListItemIcon>
						<ListItemText primary="Comercio" />
                	</ListItem>
					
					
					<Divider/>
					<ListSubheader inset className={classes.subtitle}>Filtros</ListSubheader>
					<ListItem >
						<ListItemIcon>
							<RoomIcon className={classes.iconButton} />						</ListItemIcon>
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
                      <Button variant="contained"  className={classes.Boton}>
                      Aplicar Filtro
                    </Button>
                

				</Drawer>
						
		);
	}
}

export default connect(mapStateToProps)(DrawerInicio)