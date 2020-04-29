import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from './AppBar'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

	root: {
		display: 'flex',
	},
	appBar: {
		
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		backgroundColor:'#f48c13',
	},
	avatar: {
        // margin: theme.spacing(1),
        fontSize: '1px',
        width: 'auto',
        height: 'auto',
	  },
	  subtitle:{
		color:'#d93211',
	  },
	  menuButton:{
		 color:'#ffffff',
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
	
})); 

export default function PermanentDrawerLeft() {
	const classes = useStyles();
	return <AppBar classes={ classes } />;
}
