import React from 'react';
import { makeStyles, withStyles, Theme, createStyles, fade } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import Switch from '@material-ui/core/Switch';
 
import ListExport from './List'

const theme = createMuiTheme({
	palette: {
		primary: orange,
		secondary: {
			main: '#ffba00',
		},
	},
});

export const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }),
)(Switch);

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
  search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
    marginRight: theme.spacing(2),
    marginTop:theme.spacing(5),
		marginLeft: theme.spacing(2),
		width: 'auto',
		[theme.breakpoints.up('lg')]: {
			marginLeft: theme.spacing(120),
			width: 'auto',
		},
	},

}));

export function List(props: {
  history: any,
  location: any,
  match: any,
  staticContext?: any,
  data: any,
  title: string,
  columns: {}[],
  action: any,
  drawer: any,
  checked?: boolean,
  getChecked?: any,
  isCatalog?: boolean,
  footer:any,
  delete?: any
  appBar:any,
}) {

	const classes = useStyles(theme);
  return <ListExport 
    classes={ classes }
    data={ props.data }
    title={ props.title }
    columns={ props.columns }
    action={ props.action }
    drawer={ props.drawer }
    isCatalog={ props.isCatalog }
    checked={ props.checked }
    getChecked={ props.getChecked }
    footer={ props.footer }
    delete={ props.delete }
    appBar={props.appBar}
  />;

}
