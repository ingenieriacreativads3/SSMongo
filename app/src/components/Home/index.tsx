import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import Home from './Inicio'

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
  },
 
  fixedHeight: {
    height: 'auto',
  },
  fixedHeightCAtalog:{
    height:330,
    width:250,
  },
  
  card: {
    minHeight: 300
  },
  button: {
    margin: theme.spacing(0.5),
    backgroundColor: '#d93211',
    color : '#ffffff',
    '&:hover': {
      background: "#d93211",
   },
  },
 
  
 
  iconButton:{
    color:'#d93211',
    '&:hover': {
      color: "#d93211",
   },
  },
  Link:{
    outline:'none',
  },
  img:{
    width:300,
    display:'flex'
  },
  input:{
    
    "&.Mui-focused": {
      color: '#d93211'
    },
    
    
    "&:after": {
      // changes the bottom textbox border when clicked/focused.  thought it would be the same with input label
      borderColor: '#d93211'
    }
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(30),
      paddingRight: 0,
    },
  },

  
  
}));

export function PantallaInicio() {

	const classes = useStyles(theme);
 
  return <div>
  <Home classes={classes} />
  </div>;
}



