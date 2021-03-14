import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import Login from './Login'
import ResetPass from './resetPassword'
import RecoverPass from './recoverPassword'

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
 
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `#d93211 !important`,
    }
  },

  cssFocused: {color:`#d93211 !important`},
  notchedOutline: {
    borderWidth: '2px',
  },

  buttonDialog:{
    color:'#ff6c00',
  },
  inputLabel: {
   
    "&.Mui-focused": {
      color: '#d93211',
    },
  },
  


}));

export function IniciarSesion(props: any) {

  const classes = useStyles(theme);
  return <Login classes={ classes } { ...props } />
}

export function ResetPassword(props: any) {

  const classes = useStyles(theme);
  return <ResetPass classes={ classes } { ...props } />
}


export function RecoverPassword(props: any) {

  const classes = useStyles(theme);
  return <RecoverPass classes={ classes } { ...props } />
}


