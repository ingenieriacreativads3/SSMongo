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
  
  footer: {
    padding: theme.spacing(6, 0),
    marginTop: theme.spacing(71),
   

    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
 
}));

export  function Footer() {

	const classes = useStyles(theme);
  return <Foot classes={ classes } />;


}





