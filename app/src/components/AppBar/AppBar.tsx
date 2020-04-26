import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
import { IconButton, Typography, Badge } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';

class AppBare extends React.Component {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {};
	}

	render(){

		const classes = this.props.classes

		return(
			
			<div className={classes.root}>
				<CssBaseline />
				<AppBar  position="fixed" color="default" className={classes.appBar}>
					<Toolbar className={classes.toolbar}>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							className={clsx(classes.menuButton, classes.menuButtonHidden)}
						>
							<MenuIcon />
						</IconButton>
						<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
							Dashboard
						</Typography>
						<IconButton color="inherit">
							<Badge badgeContent={4} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
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

AppBare.defaultProps = {
	classes: {
		root: 'root',
		apprBar: 'appBar',
		link: 'link',
		drawer: 'drawer',
		drawerPaper: 'drawerPaper',
		toolbar: 'toolbar',
		content: 'content'
	}
}


export default AppBare