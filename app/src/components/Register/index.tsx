import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import Register from './Register'

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
    margin: theme.spacing(1),
    fontSize: '45px',
    width: 'auto',
    height: 'auto',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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
    margin: theme.spacing(3),
  },
 
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `#d93211 !important`,
    }
  },

  cssFocused: {
    color:`#d93211 !important`
  },

  notchedOutline: {
    borderWidth: '2px',
  },
  iconButton:{
    color:'#d93211',
    '&:hover': {
      color: "#d93211",
   },
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

}));
     
export  function Registrar(props: {
  getFantasyName: any,
  getCUIT: any,
  getUser: any,
  getEmail: any,
  getPass: any,
  register: any,
  errors:any,
  registerRef:any,
}) {

  const classes = useStyles(theme);
  
  return <div>
    <Register 
      classes={ classes }
      getFantasyName={ props.getFantasyName }
      getCUIT={ props.getCUIT }
      getUser={ props.getUser }
      getEmail={ props.getEmail }
      getPass={ props.getPass }
      register={ props.register }
      errors={props.errors}
    registerRef={props.registerRef}
    />
  </div>;
  
}