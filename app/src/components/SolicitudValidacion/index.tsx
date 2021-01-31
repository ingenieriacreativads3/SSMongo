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
    height: 500,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 170,
    maxWidth: 370,
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
   //marginTop:'35px',
  },

  Boton: {
    //backgroundColor: '#d93211',
    color : '#d93211',
    //margin:theme.spacing(3),
    marginTop: theme.spacing(4),
    
  //   '&:hover': {
  //     background: "#d93211",
  //     color : '#ffffff',
  //  },
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

export function SolicitudesValidacion(props: any) {

	const classes = useStyles(theme);
  return <Lista classes={ classes } { ...props } />;

}

export function ValidarNuevoUsuario(props: any) {
	const classes = useStyles(theme);
  return <div>
    <Validacion classes={ classes } { ...props } />
  </div>
}

export const NO_VALIDADA: string = 'No Validada'
export const VALIDADA: string = 'Validada'
export const NO_AUTENTICADA: string = 'No Autenticada'
export const AUTENTICADA: string = 'Autenticada'

