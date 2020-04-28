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
        backgroundColor:'#ff6c00' ,
        color:'#ffffff',
        '&:hover': {
          background: "#ffba00",
       },
      },
      Link:{
        color:'#ff6c00',
      }
  
}));

export  function IniciarSesion() {

	const classes = useStyles(theme);
  return <Login classes={ classes } />;


}


