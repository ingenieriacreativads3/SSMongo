import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import Foot from './Footer'
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
    flexDirection: 'column',
    // minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    // padding: theme.spacing(3, 2),
    // marginTop: 'auto',
    
    height:'100px',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  avatar: {
		// margin: theme.spacing(1),
		fontSize: '30px',
		width: 'auto',
		height: 'auto',
	},
}));

export  function Footer() {

	const classes = useStyles(theme);
  return <Foot classes={ classes } />;


}





