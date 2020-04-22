import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add'
import ListSubheader from '@material-ui/core/ListSubheader';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import PersonAdd from '@material-ui/icons/PersonAdd';
import PostAdd from '@material-ui/icons/PostAdd';
import Link from '@material-ui/core/Link';


import '../../containers/Home/shop/css/linearicons.css';
import '../../containers/Home/shop/css/owl.carousel.css';
import '../../containers/Home/shop/css/font-awesome.min.css';
import '../../containers/Home/shop/css/themify-icons.css';
import '../../containers/Home/shop/css/nice-select.css';
import '../../containers/Home/shop/css/nouislider.min.css';
import '../../containers/Home/shop/css/bootstrap.css';
import '../../containers/Home/shop/css/main.css'; 

import ItemNUevo from './../../containers/Item/Nuevo'


class AppBare extends React.Component {

	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	render(){

		const classes = this.props.classes

		return(

			
			
			<div className={classes.root}>
				<CssBaseline />
				<AppBar  position="fixed" color="default" className={classes.appBar}>
				<Toolbar>
						

						<nav>
						<Link variant="button"  href="#" className={classes.link}>
						INICIO
						</Link>
						<Link variant="button" href="#" className={classes.link}>
						MI PERFIL 
						</Link>
						<Link variant="button"  href="#" className={classes.link}>
						CERRAR SESIÓN
						</Link> 
					</nav>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
					anchor="left"
				>
					<div className={classes.toolbar} >Aca va el logo</div>
					<Divider />
					<ListItem button>
						<ListItemIcon>
							<DashboardIcon />
						</ListItemIcon>
						<ListItemText primary="Mi catálogo" />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<AddIcon />
						</ListItemIcon>
						<ListItemText primary="Nuevo Item" />
					</ListItem>
					<Divider/>
					<ListSubheader inset>Mis compras</ListSubheader>
					<ListItem button>
						<ListItemIcon>
							<AttachMoney />
						</ListItemIcon>
						<ListItemText primary="Presupuestos" />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<ShoppingCart />
						</ListItemIcon>
						<ListItemText primary="Pedidos" />
					</ListItem>
					<Divider/>
					<ListSubheader inset>Mis ventas</ListSubheader>
					<ListItem button>
						<ListItemIcon>
							<AttachMoney />
						</ListItemIcon>
						<ListItemText primary="Presupuestos" />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<ShoppingCart />
						</ListItemIcon>
						<ListItemText primary="Pedidos" />
					</ListItem>
					<Divider/>
					<ListSubheader inset>Solicitudes</ListSubheader>
					<ListItem button>
						<ListItemIcon>
							<PersonAdd />
						</ListItemIcon>
						<ListItemText primary="Validación" />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<PostAdd />
						</ListItemIcon>
						<ListItemText primary="Unidad de Medida" />
					</ListItem>
					
				</Drawer>
				<main className={classes.content}>
				
					 <div className={classes.toolbar} />
				
				</main>
			</div>

			
		);
	}
}


export default AppBare