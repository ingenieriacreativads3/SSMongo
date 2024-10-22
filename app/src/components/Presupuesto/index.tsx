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
  // fixedHeight: {
  //   height: 1300,
  // },
  // fixedHeight2: {
  //   height: 850,
  // },
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

export function NuevoPresupuesto(props: any) {

	const classes = useStyles(theme);
  return <PresupuestoNuevo classes={classes} { ...props } />;

}

export function ComprasPresupuestos() {

	const classes = useStyles(theme);
	return <ListaCompras classes={classes} />;

}

export function VentasPresupuestos() {

	const classes = useStyles(theme);
	return <ListaVentas classes={classes} />;

}

export function Presupuestar(props: any) {

  const classes = useStyles(theme);
  return <Presupuestacion classes={ classes } { ...props } />;

}

export function Renegociar(props: any) {

	const classes = useStyles(theme);
  return <Renegociacion classes={ classes } { ...props } />;

}

export function VerDetallePresupuesto(props: any) {

	const classes = useStyles(theme);
	return <Detalle classes={classes} { ...props } />;

}