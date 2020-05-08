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
import { IconButton, Typography, Badge, Button } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './../Login/img/logo.png'
import Avatar from '@material-ui/core/Avatar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { fade, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';

class AppBare extends React.Component<{}, {
	anchorEl: null | HTMLElement,
	mobileMoreAnchorEl: null | HTMLElement
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
			anchorEl: null,
			mobileMoreAnchorEl: null
		};
	}

	render(){

		const classes = this.props.classes
		
		const isMenuOpen = Boolean(this.state.anchorEl);
		const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);

		const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
			this.setState({
				anchorEl: event.currentTarget
			})
		};
		
		const handleMobileMenuClose = () => {
			this.setState({
				mobileMoreAnchorEl: null
			})
		};

		const handleMenuClose = () => {
			this.setState({
				anchorEl: null
			})
			handleMobileMenuClose();
		};

		const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
			this.setState({
				mobileMoreAnchorEl: event.currentTarget
			})
		};

		const menuId = 'primary-search-account-menu';
	
		const mobileMenuId = 'primary-search-account-menu-mobile';

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
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
								}}
								inputProps={{ 'aria-label': 'search' }}
							/>
						</div>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
							<IconButton aria-label="show 4 new mails" color="inherit">
								<Badge badgeContent={4} color="secondary">
									<MailIcon />
								</Badge>
							</IconButton>
							<IconButton aria-label="show 17 new notifications" color="inherit">
								<Badge badgeContent={17} color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
							<IconButton
								edge="end"
								aria-label="account of current user"
								aria-controls={menuId}
								aria-haspopup="true"
								onClick={handleProfileMenuOpen}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton
								aria-label="show more"
								aria-controls={mobileMenuId}
								aria-haspopup="true"
								onClick={handleMobileMenuOpen}
								color="inherit"
							>
								<MoreIcon />
							</IconButton>
						</div>
						
						{/* <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
							Dashboard
						</Typography>
						<IconButton color="inherit" >
							<Badge badgeContent={4} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton> */}
					</Toolbar>
				</AppBar>
				<Menu
					anchorEl={this.state.mobileMoreAnchorEl}
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					id={mobileMenuId}
					keepMounted
					transformOrigin={{ vertical: 'top', horizontal: 'right' }}
					open={isMobileMenuOpen}
					onClose={handleMobileMenuClose}
				>
					<MenuItem>
						<IconButton aria-label="show 4 new mails" color="inherit">
							<Badge badgeContent={4} color="secondary">
								<MailIcon />
							</Badge>
						</IconButton>
						<p>Messages</p>
					</MenuItem>
					<MenuItem>
						<IconButton aria-label="show 11 new notifications" color="inherit">
							<Badge badgeContent={11} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
						<p>Notifications</p>
					</MenuItem>
					<MenuItem onClick={handleProfileMenuOpen}>
						<IconButton
							aria-label="account of current user"
							aria-controls="primary-search-account-menu"
							aria-haspopup="true"
							color="inherit"
						>
							<AccountCircle />
						</IconButton>
						<p>Profile</p>
					</MenuItem>
				</Menu>
      	<Menu
					anchorEl={this.state.anchorEl}
					anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
					id={menuId}
					keepMounted
					transformOrigin={{ vertical: 'top', horizontal: 'right' }}
					open={isMenuOpen}
					onClose={handleMenuClose}
				>
					<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
					<MenuItem onClick={handleMenuClose}>My account</MenuItem>
				</Menu>
				<Drawer
					className={classes.drawer}
					variant="permanent"
					classes={{
						paper: classes.drawerPaper,
					}}
					anchor="left"
				>
					<div className={classes.toolbar} >
					<Avatar   src={logo} className={classes.avatar}  >
          
		  			</Avatar>
					</div>
					<Divider />
					
					<Link href="/home/catalogo" className={classes.link}>
					<ListItem button>
						<ListItemIcon >
							<DashboardIcon className={classes.icon}/>
						</ListItemIcon>
						<ListItemText primary="Mi catálogo" />
					</ListItem>
					</Link>
					
					<Link href="/item/nuevo"className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<AddIcon className={classes.icon}/>
						</ListItemIcon>
						<ListItemText primary="Nuevo Item" />
					</ListItem>
					</Link>

					<Divider/>
					<ListSubheader inset className={classes.subtitle}>Mis compras</ListSubheader>
					<Link href="#"className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<AttachMoney className={classes.icon}/>
						</ListItemIcon>
						<ListItemText primary="Presupuestos" />
					</ListItem>
					</Link>
					
					<Link href="/compras/pedidos/lista" className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<ShoppingCart className={classes.icon} />
						</ListItemIcon>
						<ListItemText primary="Pedidos" />
					</ListItem>
					</Link>
					<Divider/>
					<ListSubheader inset className={classes.subtitle}>Mis ventas</ListSubheader>
					<Link href="#"className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<AttachMoney className={classes.icon} />
						</ListItemIcon>
						<ListItemText primary="Presupuestos" />
					</ListItem>
					</Link>
					<Link href="/ventas/pedidos/lista"className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<ShoppingCart className={classes.icon}/>
						</ListItemIcon>
						<ListItemText primary="Pedidos" />
					</ListItem>
					</Link>
					<Divider/>
					<ListSubheader inset className={classes.subtitle}>Solicitudes</ListSubheader>
					<Link href="/item/nuevo"className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<PersonAdd className={classes.icon} />
						</ListItemIcon>
						<ListItemText primary="Validación" />
					</ListItem>
					</Link>
					<Link href="/solicitud/unidadMedida"className={classes.link}>
					<ListItem button>
						<ListItemIcon>
							<PostAdd className={classes.icon}/>
						</ListItemIcon>
						<ListItemText primary="Unidad de Medida" />
					</ListItem>
					</Link>
					
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