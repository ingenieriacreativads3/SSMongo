import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import EstadisticaActividad from './EstadisticaActividad'
import Reputacion from './Reputacion'



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
	  
	  title: {
		flexGrow: 1,
	  },
	  
	  appBarSpacer: theme.mixins.toolbar,
	  content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	  },
	  container: {
		paddingTop: theme.spacing(10),
		paddingBottom: theme.spacing(4),
	  },
	  paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	  },
	  fixedHeight: {
		height: 'auto',
	  },
	  fixedHeightCAtalog:{
		height: 345,
	  },
	 
	  card: {
		minHeight: 300
	  },
	  
	  avatar:{
		color:"#ffffff",
		backgroundColor:'#d93211',
	  },
	  
	  margin:{
		margin:theme.spacing(2),
	  },
	  details: {
		display: 'flex',
		flexDirection: 'column',
	  },
	  content1: {
		flex: '1 0 auto',
		padding:theme.spacing(4),
		
	  },
	  cover: {
		width: 80,
	  },
	  
	 
	  icon:{
		  color:'#f48c13'
		  
	  },
	  itemIcon:{
		  padding:theme.spacing(4),
	  },

	  list: {
		width: '100%',
		maxWidth: '70ch',
		backgroundColor: theme.palette.background.paper,
		margin:theme.spacing(10),
	  },
	  inline: {
		display: 'inline',
	  },
	  grafico:{
		width:'300px',
		height:'auto',
		
	  },
	  subtitle:{
		  fontSize:22,
		  marginLeft:'50px',
		  marginTop:'20px',
		  fontWeight:'bold',
		  color:"#232323",
		  fontFamily: 'Segoe UI Light',
	  }
	 
	  
	
	  
})); 

export  function VerEstadisticaActividad(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any
	drawer:any,
	footer:any,
	appBar:any,
  }) {
	const classes = useStyles();
	return <EstadisticaActividad 
	classes={ classes }
	history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    drawer={props.drawer}
    footer={props.footer} 
	appBar={props.appBar}
	/>;
}

export  function VerReputacion(props: {
	history: any,
	location: any,
	match: any,
	staticContext?: any
	drawer:any,
	footer:any,
	appBar:any,
  }) {
	const classes = useStyles();
	return <Reputacion 
	classes={ classes }
	history={props.history}
    location={props.location}
    match={props.match}
    staticContext={props.staticContext}
    drawer={props.drawer}
    footer={props.footer} 
	appBar={props.appBar}/>;
}


