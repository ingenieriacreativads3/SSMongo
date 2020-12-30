import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import EstadisticaActividad from './EstadisticaActividad'
import Reputacion from './Reputacion'



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

export  function VerEstadisticaActividad(props: any) {
	const classes = useStyles();
	return <EstadisticaActividad classes={ classes } { ...props } />;
}

export  function VerReputacion(props: any) {
	const classes = useStyles();
	return <Reputacion classes={ classes } { ...props } />;
}


