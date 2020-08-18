import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import AppBar from './AppBar'

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({

	root: {
		display: 'flex',
	},
	appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
 
	
	subtitle:{
	color:'#d93211',
	},
	menuButton:{
		color:'#ffffff',
		marginRight: theme.spacing(1),
	},
	
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		backgroundColor:theme.palette.background.default,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	link:{
		color:'#f48c13',
	},
	// necessary for content to be below app bar
	toolbar:{
		
	backgroundColor:'#f48c13',
	},
	content: {
		flexGrow: 1,
		backgroundColor: '#f48c13',
		padding: theme.spacing(3),
	},
	grow: {
		flexGrow: 1,
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color:'#d93211',
	},
	inputRoot: {
		color: '#ffffff',
		
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '50ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
	
})); 

export default function PermanentDrawerLeft(props: {
	cerrarSesion: any,
	miPerfil: any,
	cambiarPassword: any
}) {
	const classes = useStyles();
	return <AppBar 
		classes={ classes }
		cerrarSesion={ props.cerrarSesion }
		miPerfil={ props.miPerfil }
		cambiarPassword={ props.cambiarPassword }
	/>;
}
