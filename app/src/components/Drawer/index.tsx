import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Menu from './MenuLateral'

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({

	root: {
		display: 'flex',
	},
	avatar: {
		// margin: theme.spacing(1),
		fontSize: '5px',
		width: 'auto',
		height: 'auto',
	},
	subtitle:{
	color:'#d93211',
	},
	icon:{
		color:'#d93211',
	},
	
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		backgroundColor:theme.palette.background.default,
	},
	drawerPaper: {
    position: 'relative',
	whiteSpace: 'nowrap',
	height: 750,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
	},
	drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
	link:{
		color:'#f48c13',
	
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
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
	toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
	
})); 

export default function MenuLateral(props?: {
	link?: any
}) {
	const classes = useStyles();
	let propsReturn: {
		link: any
	} = {
		link: {}
	}
	if(props) {
		if(props.link) propsReturn = propsReturn
	}
	return <Menu 
		classes={ classes }
		link={ propsReturn.link }
	/>;
}
