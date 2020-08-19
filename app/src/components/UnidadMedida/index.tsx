import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import UnidadMedidaNueva from './Nuevo'
import SolicitudAValidar from './ValidarSolicitud'
import Lista from './Lista'

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
    maxHeight: 440,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 400,
  },
  fixedHeight2:{
    height:250,
  },
  formControl: {
   
      marginTop: theme.spacing(2),
      marginLeft:theme.spacing(5),
      minWidth: 190,
      maxWidth: 300,
      '& .MuiInput-underline:after': {
        borderBottomColor: '#d93211',
      },
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  card: {
    minHeight: 300
  },
  button: {
    marginTop:theme.spacing(20),
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


  iconButton:{
    color:'#ff6c00',
    '&:hover': {
      color: "#ffba00",
   },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `#d93211 !important`,
    }
  },
  inputLabel:{
    
    "&.Mui-focused": {
      color: '#d93211'
    }
  },
  cssFocused: {color:`#d93211 !important`},
  notchedOutline: {
    borderWidth: '1px',
  },

  input: {
    marginLeft:theme.spacing(5),
    marginTop:theme.spacing(3),
  },
  // inputNuevo: {
  //   marginLeft:theme.spacing(10),
  //   marginTop:theme.spacing(3),
  // },
  buttonNuevo:{
    //marginTop:theme.spacing(25),
    backgroundColor: '#d93211',
    color : '#ffffff',
    '&:hover': {
      background: "#d93211",
   },
  }

  
  

}));

export  function NuevaUnidadMedida(props: {
  getUnidad: any,
  getSimbolo: any,
  save: any,
  drawer:any,
  footer:any,
  appBar:any,
}) {

	const classes = useStyles(theme);
  return <UnidadMedidaNueva 
    classes={ classes }
    getUnidad={ props.getUnidad }
    getSimbolo={ props.getSimbolo }
    save={ props.save }
    drawer={props.drawer}
    footer={props.footer}
    appBar={props.appBar}
  />;

}

export  function ValidarSolicitud(props: {
  title: string,
  _id: string,
  usuario: string,
  fecha:string,
  unidad:string,
  simbolo:string,
  magnitud:string,
  drawer:any,
  footer:any,
  appBar:any,
}) {

	const classes = useStyles(theme);
  return <SolicitudAValidar 
  classes={ classes }
  title= {props.title}
  _id= {props._id}
  usuario= {props.usuario}
  fecha={props.fecha}
  unidad={props.unidad}
  simbolo={props.simbolo}
  magnitud={props.magnitud}
  drawer={props.drawer}
  footer={props.footer}
  appBar={props.appBar}
   />;

}


export  function SolicitudesUnidadMedida() {

	const classes = useStyles(theme);
  return <Lista classes={ classes } />;

}




