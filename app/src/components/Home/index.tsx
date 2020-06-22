import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import Cookies from 'universal-cookie';
import Home from './Home'

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
 
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
  
  rootSide: {
    width: '100%',
    maxWidth: 360,
    //backgroundColor: theme.palette.background.paper,
  },
  nested: {
  
    paddingLeft: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 200,
    
  },
  select:{
    color: "black",
 
    "&:before": {
      // changes the bottom textbox border when not focused
      borderColor: "red"
    },
    "&:after": {
      // changes the bottom textbox border when clicked/focused.  thought it would be the same with input label
      borderColor: '#d93211 !important',
    }
  },
  Boton: {
    margin: theme.spacing(3),
    backgroundColor: '#d93211',
    color : '#ffffff',
    '&:hover': {
      background: "#d93211",
   },
  },
  rootCarousel: {
    maxWidth: 1500,
    flexGrow: 1,
    padding: theme.spacing(10),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 250,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
}));

export function InitLayout(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
  drawer: any,

}) {

	const classes = useStyles(theme);
 
  return <div>
    <Home
  
      classes={classes} 
      theme={useTheme}
      history={props.history}
      location={props.location}
      match={props.match}
      staticContext={props.staticContext}
      cookies={props.cookies}
      drawer={props.drawer}
    />
  </div>;
}




