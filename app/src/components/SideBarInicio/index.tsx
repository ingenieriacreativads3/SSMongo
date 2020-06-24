import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import SideBar from './Inicio'

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
 
  input:{
    
    "&.Mui-focused": {
      color: '#d93211'
    },
    
    
    "&:after": {
      // changes the bottom textbox border when clicked/focused.  thought it would be the same with input label
      borderColor: '#d93211'
    }
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
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#d93211',
      },
    },
    
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
  inputLabel: {
   
    "&.Mui-focused": {
      color: '#d93211',
    },
  },
  


  
  
}));


export  function SideBarInicio() {

	const classes = useStyles(theme);
  return <SideBar classes={ classes } />;


}







