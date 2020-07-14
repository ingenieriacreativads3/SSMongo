import React from 'react';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Drawer from './DrawerInicio'

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
    width: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
       width: theme.spacing(0),
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
    
  minWidth: 180,
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#d93211',
    },
  },
	//paddingLeft:theme.spacing(5),
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
	
	margin:theme.spacing(3),
    backgroundColor: '#d93211',
    color : '#ffffff',
    '&:hover': {
      background: "#d93211",
   },
  },
  iconButton:{
	color:'#d93211',
  },

  inputLabel: {
   
    "&.Mui-focused": {
      color: '#d93211',
    },
  },

  rating:{
	paddingLeft:theme.spacing(3),
  },
  
})); 

export default function DrawerInicio() {
	const classes = useStyles();
	return <Drawer classes={ classes } />;
}
