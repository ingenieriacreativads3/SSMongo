import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import Login from './Login'

const theme = createMuiTheme({
	palette: {
		primary: orange,
		secondary: {
			main: '#ffba00',
		},
	},
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // margin: theme.spacing(1),
    fontSize: '50px',
    width: 'auto',
    height: 'auto',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor:'#f48c13' ,
    color:'#ffffff',
    '&:hover': {
      background: "#d93211 ",
    },
  },
  Link:{
    color:'#d93211',
  },
  cssLabel: {
    color : '#d93211',
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `#d93211 !important`,
    }
  },

  cssFocused: {color:`#d93211 !important`},
  notchedOutline: {
    borderWidth: '2px',
    borderColor: '#d93211 !important'
  },

  buttonDialog:{
    color:'#ff6c00',
  },
  
}));

export  function IniciarSesion() {

  const classes = useStyles(theme);
  
  return <div>
    <Login classes={ classes } />
  </div>;


}


