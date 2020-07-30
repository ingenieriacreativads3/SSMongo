import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import DetailExport from './Detail'

const drawerWidth = 240;

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
    maxHeight: 440,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 800,
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
    marginTop:theme.spacing(10),
    backgroundColor: '#d93211',
    color : '#ffffff',
    '&:hover': {
      background: "#d93211",
    },
    margin:theme.spacing(2),
  },
  margin:{
    margin:theme.spacing(2),
  },
  
  avatar:{
    color:"#ffffff",
    backgroundColor:'#d93211',
  },
  input:{
    margin:theme.spacing(2),
  },
  textTarea:{
    width:'280px',
    marginTop:theme.spacing(2),
  },
  fotoItem:{
    fontSize: '70px',
    width:'150px',
    height:'150px',
    marginLeft:theme.spacing(2),
    
  },

  

}));

export function Detail(props: {
  title: string,
  subtitle1:string,
  subtitle2:string,
  drawer:any,
  appBar:any,
  footer:any,
  presupuesto: {
    _id: string,
    estado: string,
    updated_at: string,
    created_at: string,
    importe: string,
    empresa_demandante: {
      _id: string,
      nombre: string,
      cuit: string,
      usuario: string,
      email: string,
      estado: string,
      updated_at: string,
      created_at: string,
    },
    empresa_perteneciente: {
      _id: string,
      nombre: string,
      cuit: string,
      usuario: string,
      email: string,
      estado: string,
      updated_at: string,
      created_at: string
    },
    mensajes: [],
    items: [
      {
        "item": {
          "_id": string,
          "foto": string[],
          "nombre": string,
          "precio": string,
          "descrpcion": string,
          "mostrarPrecio": boolean,
          "unidad_de_medida_id": string,
          "updated_at": string,
          "created_at": string,
          "catalogo_id": string,
          "unidad_de_medida": {
            "_id": string,
            "nombre": string,
            "abreviatura": string,
            "updated_at": string,
            "created_at": string,
            }
        },
        "unidadDeMedida": {
          "_id": string,
          "nombre": string,
          "abreviatura": string,
          "updated_at": string,
          "created_at": string,
        },
        "cantidad": number
      }
    ]
  }|null,
  pedido: {
    "_id": string,
    "empresa_perteneciente_id": string,
    "empresa_demandante_id": string,
    "importe": string,
    "estado": string,
    "presupuesto_id": string,
    "updated_at": string,
    "created_at": string,
    "mensajes": [],
    "items": [
      {
        "item": {
          "_id": string,
          "foto": string[],
          "nombre": string,
          "precio": string,
          "descrpcion": string,
          "mostrarPrecio": boolean,
          "unidad_de_medida_id": string,
          "updated_at": string,
          "created_at": string,
          "catalogo_id": string,
          "unidad_de_medida": {
            "_id": string,
            "nombre": string,
            "abreviatura": string,
            "updated_at": string,
            "created_at": string,
          }
        },
        "unidadDeMedida": {
          "_id": string,
          "nombre": string,
          "abreviatura": string,
          "updated_at": string,
          "created_at": string,
        },
        "cantidad": number
      }
    ],
    "empresa_demandante": {
      "_id": string,
      "nombre": string,
      "cuit": string,
      "usuario": string,
      "clave": string,
      "email": string,
      "estado": string,
      "updated_at": string,
      "created_at": string,
    },
    "empresa_perteneciente": {
      "_id": string,
      "nombre": string,
      "cuit": string,
      "usuario": string,
      "clave": string,
      "email": string,
      "estado": string,
      "updated_at": string,
      "created_at": string,
    },
    "presupuesto": {
      "_id": string,
      "idEmpresaPerteneciente": string,
      "idEmpresaDemandante": string,
      "estado": string,
      "updated_at": string,
      "created_at": string,
      "importe": string,
      "items": [
        {
          "item": {
            "_id": string,
            "foto": string[],
            "nombre": string,
            "precio": string,
            "descrpcion": string,
            "mostrarPrecio": boolean,
            "unidad_de_medida_id": string,
            "updated_at": string,
            "created_at": string,
            "catalogo_id": string,
            "unidad_de_medida": {
              "_id": string,
              "nombre": string,
              "abreviatura": string,
              "updated_at": string,
              "created_at": string,
            }
          },
          "unidadDeMedida": {
            "_id": string,
            "nombre": string,
            "abreviatura": string,
            "updated_at": string,
            "created_at": string,
          },
          "cantidad": number
        }
      ],
      "mensajes": []
    }
  }|null,
  labelCompany: string,
  company: {
    _id: string,
    nombre: string,
    cuit: string,
    usuario: string,
    email: string,
    estado: string,
    updated_at: string,
    created_at: string,
  },
  actions: any
}) {

	const classes = useStyles(theme);
	return <DetailExport 
		classes={ classes }
    title={ props.title }
    subtitle1={ props.subtitle1 }
    subtitle2={ props.subtitle2 }
    drawer={ props.drawer }
    appBar={ props.appBar }
    footer={ props.footer }
    presupuesto={ props.presupuesto }
    pedido={ props.pedido }
    labelCompany={ props.labelCompany }
    company={ props.company }
    actions={ props.actions }
	/>;

}