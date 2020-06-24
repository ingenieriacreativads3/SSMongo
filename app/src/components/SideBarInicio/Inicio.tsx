import React from 'react';

import clsx from 'clsx'

import { FormControl, Button, InputLabel,Select, MenuItem, Grid, Typography} from '@material-ui/core';
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
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                              Categorias 
                            </Typography>
                    </ListSubheader>
                  } 
                  className={classes.rootSide}
                  >
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
                <ListItem button>  {/*  onClick={handleClick}  */}
                  <ListItemIcon>
                    <StorefrontIcon className={classes.iconButton}/>
                  </ListItemIcon>
                  <ListItemText primary="Comercio" />
                {/*   {open ? <ExpandLess /> : <ExpandMore />} */}
                </ListItem>
                <Collapse /* in={open} */ timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Starred" />
                    </ListItem>
                  </List>
                </Collapse>
                </List>
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={

                    <ListSubheader component="div" id="nested-list-subheader">
                      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                        Filtros 
                      </Typography>
                    </ListSubheader>
                    
                  } 
                  
                  className={classes.rootSide}
                  >
                     <ListItem>
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
                <Rating
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
                      <Button variant="contained" className={classes.Boton}>
                      Aplicar filtro
                    </Button>
                </List>
               
              </Grid>
             
    );
  }
}

export default connect(mapStateToProps)(SideBarInicio)
