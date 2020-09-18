import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import Cookies from 'universal-cookie';
import Home from './Home'
import Busqueda from './Busqueda'

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
    paddingTop: theme.spacing(20),
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
    //maxWidth: 1500,
    width:1500,
    flexGrow: 1,
    
    paddingTop:theme.spacing(7),
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 250,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
   img: {
    
    width: 1500,
   
  
  }, 
  rootCategorias:{
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 150,
  },
  tabs:{
   paddingTop:theme.spacing(2),
   color:"#d93211",
   fontSize:20,
   
   
  },
  // title:{
  //   paddingTop:theme.spacing(35),
  // },
  tab:{
    fontSize:13,
    color:"#d93211",
   
  },
  iconoCategoria:{
    fontSize:25,
    color:"#d93211",
   
  }
 
}));

export function InitLayout(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
  drawer: any,
  footer: any,
  appBar:any,
  action: any,
  itemsTrending: [
    {
      item: {
        "_id": string,
        "foto": string[],
        "nombre": string,
        "precio": string,
        "descrpcion": string,
        "mostrarPrecio": boolean,
        "unidad_de_medida_id": string,
        "updated_at": string,
        "created_at": string,
        "catalogo_id": string,
        "unidad_de_medida": {
          "_id": string,
          "nombre": string,
          "abreviatura": string,
          "updated_at": string,
          "created_at": string,
        }
      },
      "cantidad": number
    }
  ],
  items: any[]
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
      footer={props.footer}
      appBar={props.appBar}
      action={ props.action }
      items={ props.items }
      itemsTrending={ props.itemsTrending }
    />
  </div>;
}

export function PaginaBusqueda(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  cookies: Cookies
  drawer: any,
  footer: any,
  appBar:any,

}) {

	const classes = useStyles(theme);
 
  return <div>
    <Busqueda
  
      classes={classes} 
      theme={useTheme}
      history={props.history}
      location={props.location}
      match={props.match}
      staticContext={props.staticContext}
      cookies={props.cookies}
      drawer={props.drawer}
      footer={props.footer}
      appBar={props.appBar}
    />
  </div>;
}




