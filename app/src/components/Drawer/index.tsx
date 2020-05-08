import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Menu from './MenuLateral'

const drawerWidth = 240;

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
		width: drawerWidth,
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
	
	
})); 

export default function MenuLateral() {
	const classes = useStyles();
	return <Menu classes={ classes } />;
}
