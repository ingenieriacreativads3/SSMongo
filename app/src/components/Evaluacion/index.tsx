import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import EvaluacionEmpresa from './Empresa'
import EvaluacionSuppliersStore from './SuppliersStore'


const drawerWidth = 200;
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
	  toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	  },
	  toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
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
	  menuButton: {
		marginRight: 36,
	  },
	  menuButtonHidden: {
		display: 'none',
	  },
	  title: {
		flexGrow: 1,
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
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
		  width: theme.spacing(9),
		},
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
	  formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	  },
	  selectEmpty: {
		marginTop: theme.spacing(2),
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
	 
	  buttonDialog:{
		color:'#ff6c00',
	  },
	  avatar:{
		color:"#ffffff",
		backgroundColor:'#d93211',
	  },
	  iconButton:{
		color:'#d93211',
		'&:hover': {
		  color: "#d93211",
	   },
	  },
	  Link:{
		color:'#d93211',
	  },
	  img:{
		width:300,
		display:'flex'
	  },
	  radioButton:{
		  color:"#d93211",
		'&$checked': {
			color:"#d93211",
		},
		},
		subtitle:{
			color:'#d93211',
			marginLeft:theme.spacing(5)
		},

		textTarea:{
			width:'270px',
			marginTop:theme.spacing(5),
			marginLeft:theme.spacing(5)
		},
		preguntaEncuesta:{
			marginTop:theme.spacing(5),
			marginLeft:theme.spacing(5)
		},
		respuestaEncuesta:{
			
			marginLeft:theme.spacing(5)
		}

})); 

export  function EvaluarEmpresa(props: {
	 getNumeroValoracion: any,
	getConceptoValoracion: any,
	getOpinion: any,
	footer:any,
	save: any, 
	appBar:any,
	
  }) {
	const classes = useStyles();
	
	return <EvaluacionEmpresa 
	classes={ classes } 
     getNumeroValoracion={ props.getNumeroValoracion }
    getConceptoValoracion={ props.getConceptoValoracion }
    getOpinion={ props.getOpinion }
    save={ props.save }
    footer={props.footer} 
	appBar={props.appBar}/>;
}


export  function EvaluarPlataforma(props: {
	getNumeroValoracion: any,
   getConceptoValoracion: any,
   getOpinion: any,
   footer:any,
   save: any, 
   appBar:any,
 }) {
	const classes = useStyles();
	return <EvaluacionSuppliersStore 
	classes={ classes } 
	getNumeroValoracion={ props.getNumeroValoracion }
    getConceptoValoracion={ props.getConceptoValoracion }
    getOpinion={ props.getOpinion }
    save={ props.save }
	footer={props.footer}
	appBar={props.appBar} />;
}

