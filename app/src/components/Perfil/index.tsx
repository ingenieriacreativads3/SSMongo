import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import DatosCuenta from './DatosCuenta'
import Perfil from './PerfilEmpresa'
import CambiarContraseñaExport from './CambiarContraseña'

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
		margin: theme.spacing(2),
		width:'30ch',
		//minWidth: 225,
		'& .MuiOutlinedInput-root': {
			'&.Mui-focused fieldset': {
				borderColor: '#d93211',
			},
		},
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	card: {
		minHeight: 300
	},
	textField:{
		"&:after": {
			// changes the bottom textbox border when clicked/focused.	thought it would be the same with input label
			borderColor: '#d93211 !important',
		},
		"&.Mui-focused": {
			color: '#d93211',
			
		},
		width: '30ch',
		marginLeft:'10px',
		marginTop:'15px',
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

	botonIcono:{
		
		width:'100px',
		height:'40px',
		backgroundColor: '#ffffff',
		outline:'none',
		marginTop: theme.spacing(2),
		marginLeft:theme.spacing(2),
	},

	iconButton:{
		marginLeft:theme.spacing(2),
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
		display:'flex',
		marginBottom:theme.spacing(5),
	},

	cssOutlinedInput: {
		'&$cssFocused $notchedOutline': {
			borderColor: `#d93211 !important`,
		}
	},

	input:{
		display:'none'
	},

	cssFocused: {color:`#d93211 !important`},
	notchedOutline: {
		borderWidth: '2px',
	},

 

	select:{
		color: "black",
 
		"&:before": {
			// changes the bottom textbox border when not focused
			borderColor: "red"
		},
		"&:after": {
			// changes the bottom textbox border when clicked/focused.	thought it would be the same with input label
			borderColor: '#d93211 !important',
		}
	},

	inputLabel: {
	 
		"&.Mui-focused": {
			color: '#d93211',
		},
	},
	nombreEmpresa: {
		color:'#7f7f7f'
	},

	titleProductos: {
		paddingTop:theme.spacing(10),
		fontSize:'25px',
		//fontWeight:'bold',
	},

	datos:{
		//marginBottom:theme.spacing(10),
		marginRight:theme.spacing(20),
	},
	textTarea:{
		width:'300px',
		marginRight:theme.spacing(17),
		marginTop:theme.spacing(2),
		marginLeft:theme.spacing(5),
	},
	datoContacto:{
		//margin: theme.spacing(2),
		
	 // marginRight:theme.spacing(10),
		marginTop:theme.spacing(3),
		marginLeft:theme.spacing(5),
			 

	},
	formularioContacto:{
		//marginTop:theme.spacing(10),
		//marginLeft:theme.spacing(7),
		width:'500px',
	},
	titulo:{
		marginTop:theme.spacing(2),
		marginLeft:theme.spacing(5),
	},
	buttonEnviar: {
		marginTop: theme.spacing(2),
		marginLeft:theme.spacing(47),
		marginBottom:theme.spacing(2),
		backgroundColor: '#d93211',
		color : '#ffffff',
		'&:hover': {
			background: "#d93211",
	 },
	},
	fotoLogo:{
		width:'200px',
		height:'200px',
	},
	cardProducto: {
		height: '100%',
		width:'70%',
		display: 'flex',
		flexDirection: 'column',
	},

	
}));

export	function CambiarContraseña(props: any) {

	const classes = useStyles(theme);
 
	return <CambiarContraseñaExport classes={classes} { ...props } />

}

export	function PerfilPropio(props: any) {

	const classes = useStyles(theme);
 
	return <DatosCuenta classes={classes} { ...props } />
}

export function PerfilEmpresa(props: any) {

	const classes = useStyles(theme);
 
	return <Perfil classes={classes} { ...props } />

}
