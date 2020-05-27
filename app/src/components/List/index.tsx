import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
 
import ListExport from './List'

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
    maxHeight: 440,
	},
	
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
	},
	
  fixedHeight: {
    height: 400,
	},
	
  formControl: {
    margin: theme.spacing(2),
    minWidth: 170,
    maxWidth: 300,
	},
	
  selectEmpty: {
   // marginTop: theme.spacing(2),
	},
	
  card: {
    minHeight: 300
	},
	
  button: {
    backgroundColor: '#d93211',
    margin:theme.spacing(2),
    color : '#ffffff',
    '&:hover': {
      background: "#d93211",
   },
  },

  Boton: {
    backgroundColor: '#d93211',
    color : '#ffffff',
    margin:theme.spacing(3),
    '&:hover': {
      background: "#d93211",
   },
  },

  avatar:{
    color:"#ffffff",
    backgroundColor:'#d93211',
	},
	
  input:{
    
    margin:theme.spacing(2),
    "&.Mui-focused": {
      color: '#d93211'
    
    },
    
    "&:after": {
      borderColor: '#d93211'
		}
		
  },

}));

export function List(props: {
  data: any,
  title: string,
  columns: {}[],
  action: any
}) {

	const classes = useStyles(theme);
  return <ListExport 
    classes={ classes }
    data={ props.data }
    title={ props.title }
    columns={ props.columns }
    action= { props.action }
  />;

}
