import React from 'react';
import {fade, makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import ItemNuevo from './Nuevo'
import ItemEditar from './Editar'
import Catalogo from './Catalogo'
import DetalleItem from './Detalle'

const drawerWidth = 200;

const theme = createMuiTheme({
	palette: {
		primary: orange,
		secondary: {
			main: '#ffba00',
		},
	},
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  
 
  title: {
    flexGrow: 1,
  },
  
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 'auto',
  },
  fixedHeightCAtalog:{
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  card: {
    minHeight: 300
  },
  button: {
    margin: theme.spacing(0.5),
    backgroundColor: '#d93211',
    color : '#ffffff',
    '&:hover': {
      background: "#d93211",
   },
  },
  Boton: {
    margin: theme.spacing(3),
    backgroundColor: '#d93211',
    color : '#ffffff',
    '&:hover': {
      background: "#d93211",
   },
  },
 
  buttonDialog:{
    color:'#ff6c00',
  },
  avatar:{
    color:"#ffffff",
    backgroundColor:'#d93211',
  },
  iconButton:{
    color:'#d93211',
    '&:hover': {
      color: "#d93211",
   },
  },
  Link:{
    color:'#d93211',
  },
  img:{
    width:300,
    display:'flex'
  },
  input:{
    margin:theme.spacing(1),
    "&.Mui-focused": {
      color: '#d93211'
    },
    
    
    "&:after": {
      // changes the bottom textbox border when clicked/focused.  thought it would be the same with input label
      borderColor: '#d93211'
    }
  },
  botonIcono:{
    
    backgroundColor: '#ffffff',
    outline:'none',
    margin: theme.spacing(5),
  },

  margin:{
    margin:theme.spacing(2),
  },
  textTarea:{
    margin:theme.spacing(2),
    width:'250px',

  },
  Checkbox:{
    margin:theme.spacing(3),
  },
  search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
    marginRight: theme.spacing(2),
    marginTop:theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(130),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color:'#d93211',
  },
  inputRoot: {
		color: '#d93211',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
  
}));

export  function NuevoItem(props: {
  getNombre: any,
  getPrecio: any,
  getMagnitud: any,
  getCaracteristicas: any,
  getDescripcion: any,
  getMostrarPrecio: any,
  getFoto: any,
  save: any,
  unidadesDeMedida: any[]
}) {

	const classes = useStyles(theme);
  return <ItemNuevo 
    classes={ classes }
    getNombre={ props.getNombre }
    getPrecio={ props.getPrecio }
    getMagnitud={ props.getMagnitud }
    getCaracteristicas={ props.getCaracteristicas }
    getDescripcion={ props.getDescripcion }
    getMostrarPrecio={ props.getMostrarPrecio }
    getFoto={ props.getFoto }
    save={ props.save }
    unidadesDeMedida={ props.unidadesDeMedida }
  />;

}

export  function VerDetalleItem() {

	const classes = useStyles(theme);

  return <div>
    <DetalleItem classes={classes} />;
   
  </div>

}

export  function EditarItem(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
}) {

	const classes = useStyles(theme);
 
  return <ItemEditar 
    classes={classes}
    history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
  />;

}

export  function MostrarCatalogo(props: {
  items: any[]
}) {

	const classes = useStyles(theme);
 
  return <div>
    <Catalogo 
      classes={classes}
      items={props.items}
    />
  </div>;

}


