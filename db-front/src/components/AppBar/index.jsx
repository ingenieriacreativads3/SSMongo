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
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		backgroundColor:theme.palette.background.default,
	},
	drawerPaper: {
		width: drawerWidth,
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
	return <AppBar classes={classes} />;
}
