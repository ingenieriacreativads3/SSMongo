import React from 'react';

import clsx from 'clsx'

import { FormControl,FormControlLabel,Checkbox, Button, InputLabel,Select, MenuItem, Grid, Typography} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';

import { connect } from 'react-redux'

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import StorefrontIcon from '@material-ui/icons/Storefront';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import LocationCityOutlinedIcon from '@material-ui/icons/LocationCityOutlined';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import RoomIcon from '@material-ui/icons/Room';
import StarBorder from '@material-ui/icons/StarBorder';
import Rating from '@material-ui/lab/Rating';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import * as ubicacionActions from './../../store/actions/ubicacion'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function mapStateToProps(store: {
  ubicacionReducer: any,
  dialogReducer: {
    openDialog: boolean
  }
}) {
  return {
    openDialog: store.dialogReducer.openDialog,
    ubicacionReducer: store.ubicacionReducer
  };
}

class SideBarInicio extends React.Component <{}, {

  valueFilter: number | null,
  hoverFilter: any,
  provincia: string,
  municipio: string,
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
			valueFilter: 2,
      hoverFilter: -1,
      provincia: '',
      municipio: '',
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


  render(){

		const classes = this.props.classes
		const fixedHeightCardCatalog = clsx(classes.CardCatalog, classes.fixedHeightCAtalog);
    
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

           
            <Grid item xs={12} md={3}>
                <ListItem  className={classes.subtitle}  button onClick={this.handleClickFiltros}>
						<ListItemText  className={classes.subtitle} primary="Filtros" />
						{this.state.openFiltros ? <ExpandLess /> : <ExpandMore />}
					</ListItem>

					


					
					<Collapse in={this.state.openFiltros} timeout="auto" unmountOnExit>

					<ListItem  className={classes.subtitle}  button onClick={this.handleClickCategorias}>
						<ListItemText  className={classes.subtitle} primary="Categorias" />
						{this.state.openCategorias ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.openCategorias} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							
								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Agricultura, ganadería"
							  /> 
								{/* 	<ListItemText  primary="Agricultura, ganadería, caza, silvicultura y pesca"  /> */}
								</ListItem>

								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Explotación de minas"
							  /> 
									{/* <ListItemText primary="Explotación de minas y canteras" /> */}
								</ListItem>

								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Industria manufacturera"
							  /> 
									{/* <ListItemText primary="Industria manufacturera" /> */}
								</ListItem>

								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Sum.de electricidad, gas"
							  /> 
									{/* <ListItemText primary="Suministro de electricidad, gas, vapor y aire acondicionado" /> */}
								</ListItem>

								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Sum. de agua"
							  /> 
								{/* 	<ListItemText primary="Suministro de agua, cloacas, gestión de residuos y recuperación de materiales y saneamiento público" /> */}
								</ListItem>

								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Construcción"
							  /> 
									{/* <ListItemText primary="Construcción" /> */}
								</ListItem>


								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Comercio"
							  /> 
									{/* <ListItemText primary="Comercio al por mayor y al por menor; reparación de vehículos automotores y motocicletas" /> */}
								</ListItem>


								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Serv. de transporte"
							  /> 
									{/* <ListItemText primary="Servicio de transporte y almacenamiento" /> */}
								</ListItem>


								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Serv. de alojamiento"
							  /> 
									{/* <ListItemText primary="Servicios de alojamiento y servicios de comida" /> */}
								</ListItem>


								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Comunicaciones"
							  /> 
								{/* 	<ListItemText primary="Información y comunicaciones" /> */}
								</ListItem>


								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Serv. de seguros"
							  /> 
								{/* 	<ListItemText primary="Intermediación Financiera y servicios de seguros" /> */}
								</ListItem>


								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Serv. inmobiliarios"
							  /> 
									{/* <ListItemText primary="Servicios inmobiliarios" /> */}
								</ListItem>

								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Serv. profesionales"
							  /> 
									{/* <ListItemText primary="Servicios profesionales, científicos y técnicos" /> */}
								</ListItem>


								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Activ. administrativas"
							  /> 
									{/* <ListItemText primary="Actividades administrativas y servicios de apoyo" /> */}
								</ListItem>

								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Administración Pública"
							  /> 
								{/* 	<ListItemText primary="Administración Pública, defensa y seguridad social obligatoria" /> */}
								</ListItem>

								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Enseñanza"
							  /> 
									{/* <ListItemText primary="Enseñanza" /> */}
								</ListItem>


								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Salud humana"
							  /> 
									{/* <ListItemText primary="Salud humana y servicios sociales" /> */}
								</ListItem>


								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Ser.culturales,deportivos"
							  /> 
									{/* <ListItemText primary="Servicios artísticos, culturales, deportivos y de esparcimiento" /> */}
								</ListItem>


								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Serv. de asociaciones"
							  /> 
									{/* <ListItemText primary="Servicios de asociaciones y servicios personales" /> */}
								</ListItem>


								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Serv. hogares privados"
							  /> 
									{/* <ListItemText primary="Servicios de hogares privados que contratan servicio doméstico" /> */}
								</ListItem>


								<ListItem button className={classes.nested}>
								<FormControlLabel
                                
								control={
								  <Checkbox
									style ={{
									  color: "#d93211",
									}}
								  />
								}
								label="Serv. de organizaciones"
							  /> 
									{/* <ListItemText primary="Servicios de organizaciones y órganos extraterritoriales" /> */}
								</ListItem>


							
						</List>
					</Collapse> 


						<List component="div" disablePadding>
							
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

						<Button variant="contained"  className={classes.Boton}>
						Aplicar Filtro
						</Button>
							
						</List>
					</Collapse> 
					
					
					
               
              </Grid>
             
    );
  }
}

export default connect(mapStateToProps)(SideBarInicio)
