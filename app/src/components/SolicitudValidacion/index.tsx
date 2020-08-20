import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
 
import Lista from './Lista'
import Validacion from './Validacion'

//const drawerWidth = 240;


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
    height: 680,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 170,
    maxWidth: 300,
    '& .MuiInput-underline:after': {
      borderBottomColor: '#d93211',
    },
  },
  selectEmpty: {
   // marginTop: theme.spacing(2),
  },
  card: {
    minHeight: 300
  },
  button: {
    backgroundColor: '#d93211',
    //margin:theme.spacing(2),
    color : '#ffffff',
    '&:hover': {
      background: "#d93211",
   },
  },

  Boton: {
    backgroundColor: '#d93211',
    color : '#ffffff',
    //margin:theme.spacing(3),
    marginTop: theme.spacing(5),
    
    '&:hover': {
      background: "#d93211",
   },
  },

  avatar:{
    color:"#ffffff",
    backgroundColor:'#d93211',
  },
   
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  }, 
   noLabel: {
    marginTop: theme.spacing(3),
  }, 
  input:{
    
    margin:theme.spacing(2),
    "&.Mui-focused": {
      color: '#d93211'
    
    },
    
    "&:after": {
      // changes the bottom textbox border when clicked/focused.  thought it would be the same with input label
      borderColor: '#d93211'
    }
  },
  inputLabel: {
   
    "&.Mui-focused": {
      color: '#d93211',
    },
  },

}));

export function SolicitudesValidacion(props: {
  data: any,
  title: string,
  columns: {}[],
  action: any
}) {

	const classes = useStyles(theme);
  return <Lista 
    classes={ classes }
    data={ props.data }
    title={ props.title }
    columns={ props.columns }
    action= { props.action }
  />;

}

export function ValidarNuevoUsuario(props: {
  title: string,
  _id: string,
  nombre: string,
  cuit:string,
  rubros: {
    _id: string,
    nombreRubro: string,
    updated_at: string,
    created_at: string,
  }[],
  listaRubros: {
    _id: string,
    nombreRubro: string,
    updated_at: string,
    created_at: string,
  }[],
  getRubros: any,
  footer:any,
  appBar:any,
  drawer:any,
}) {

	const classes = useStyles(theme);
  return <div>
    <Validacion
      classes={classes} 
      title={props.title}
      _id={props._id}
      nombre={props.nombre}
      cuit={props.cuit}
      rubros={props.rubros}
      listaRubros={props.listaRubros}
      getRubros={props.getRubros}
      footer={props.footer}
      appBar={props.appBar}
      drawer={props.drawer}
    />
  </div>
}

