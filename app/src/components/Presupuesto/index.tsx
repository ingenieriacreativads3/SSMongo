import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';


import PresupuestoNuevo from './Nuevo'
import ListaCompras from './ListaCompras'
import ListaVentas from './ListaVentas'
import Presupuestacion from './Presupuestar'
import Detalle from './DetallePresupuesto'
import Renegociacion from './Renegociar'
import { checkPropTypes } from 'prop-types';

const drawerWidth = 240;


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
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 1300,
  },
  fixedHeight2: {
    height: 850,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  card: {
    minHeight: 300
  },
  button: {
    marginRight:theme.spacing(2),
    backgroundColor: '#d93211',
    color : '#ffffff',
    '&:hover': {
      background: "#d93211",
   },
  },
  avatar:{
    color:"#ffffff",
    backgroundColor:'#d93211',
  },
  margin:{
    margin:theme.spacing(2),
  },
  input:{
    margin:theme.spacing(2),
  },
  textTarea:{
    width:'250px',
    // marginLeft:theme.spacing(2),
    // marginTop:theme.spacing(2),
  },
  fotoItem:{
    width:'150px',
    height:'150px',
  }

}));



export function NuevoPresupuesto(props:{
  getCantidadItem: any,
  getComentario:any,
  save:any,
  drawer:any,
  footer:any,
  appBar:any,
  item: {
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
    },
    "catalogo": {
      "_id": string,
      "empresa_id": string,
      "updated_at": string,
      "created_at": string,
      "empresa": {
        "_id": string,
        "nombre": string,
        "cuit": string,
        "usuario": string,
        "clave": string,
        "email": string,
        "estado": string,
        "updated_at": string,
        "created_at": string,
      }
    }
  },
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
}) {

	const classes = useStyles(theme);
  return <PresupuestoNuevo 
    classes={classes}
    getCantidadItem={props.getCantidadItem}
    getComentario={props.getComentario}
    save={props.save} 
    drawer={props.drawer}
    footer={props.footer}
    appBar={props.appBar}
    item={ props.item }
    empresa={ props.empresa }
  />;

}

export function ComprasPresupuestos() {

	const classes = useStyles(theme);
	return <ListaCompras classes={classes} />;

}

export function VentasPresupuestos() {

	const classes = useStyles(theme);
	return <ListaVentas classes={classes} />;

}

export function Presupuestar(props:{
  getCantidadItem: any,
  getComentario:any,
  getImporte:any,
  save:any,
  cancelar: any
  drawer:any,
  footer:any,
  appBar:any,
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
        _id: string,
        foto: string[],
        nombre: string,
        precio: string,
        descrpcion: string,
        mostrarPrecio: false,
        unidad_de_medida_id: string,
        updated_at: string,
        created_at: string,
        catalogo_id: string,
      }
    ]
  }
}) {

  const classes = useStyles(theme);
  
  return <Presupuestacion 
    classes={ classes }
    getCantidadItem={ props.getCantidadItem }
    getComentario={ props.getComentario }
    getImporte={ props.getImporte }
    save={ props.save }
    cancelar={ props.cancelar }
    drawer={ props.drawer }
    footer={ props.footer }
    presupuesto={ props.presupuesto }
    appBar={props.appBar}
  />;

}

export function Renegociar(props:{
  getCantidadItem: any,
  getComentario:any,
  getPrecioSugerido:any,
  save:any,
  drawer:any,
  footer:any,
  appBar:any,
  presupuesto: {
    _id: string,
    estado: string,
    updated_at: string,
    created_at: string,
    importe: string,
    importe_anterior: string,
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
        _id: string,
        foto: string[],
        nombre: string,
        precio: string,
        descrpcion: string,
        mostrarPrecio: boolean,
        unidad_de_medida_id: string,
        updated_at: string,
        created_at: string,
        catalogo_id: string,
      }
    ]
  },
  company: {
    _id: string,
    nombre: string,
    cuit: string,
    usuario: string,
    email: string,
    estado: string,
    updated_at: string,
    created_at: string,
  }
}) {

	const classes = useStyles(theme);
  return <Renegociacion 
    classes={ classes } 
    getCantidadItem={ props.getCantidadItem }
    getComentario={ props.getComentario }
    getPrecioSugerido={ props.getPrecioSugerido }
    save={ props.save }
    drawer={ props.drawer }
    footer={ props.footer }
    appBar={ props.appBar }
    presupuesto={ props.presupuesto }
    company={ props.company }
  />;

}

export function VerDetallePresupuesto(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any
}) {

	const classes = useStyles(theme);
	return <Detalle classes={classes} history={props.history} location={props.location} match={props.match} staticContext={props.staticContext} />;

}