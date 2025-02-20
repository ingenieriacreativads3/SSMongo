import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import Foot from './Footer'
//const drawerWidth = 200;

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
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
  },
  
  
 
  
  footer: {
    marginTop: theme.spacing(60),
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      
  },
  avatar: {
     marginLeft: theme.spacing(15),
     marginRight: theme.spacing(15),
    width:'160px',
    height:'100px',
    
	
	},
}));

export  function Footer(
  props: {
    history: any,
    location: any,
    match: any,
    staticContext?: any,
}) {

	const classes = useStyles(theme);
  return <Foot 
      classes={classes} 
      theme={useTheme}
      history={props.history}
      location={props.location}
      match={props.match}
      staticContext={props.staticContext} />;


}





