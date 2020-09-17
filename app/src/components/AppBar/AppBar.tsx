import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { IconButton, Badge, ListItem, ListItemAvatar, Avatar,ListItemText, Divider, Typography, Box, List, Popover } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputBase from '@material-ui/core/InputBase';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/MoreVert';
import { FixedSizeList } from 'react-window';

import * as drawerAction from './../../store/actions/drawer'

function mapStateToProps(store: {
  drawerReducer: {
		open: boolean,
		visibleDrawer: boolean
  }
}) {
  return {
		open: store.drawerReducer.open,
		visibleDrawer: store.drawerReducer.visibleDrawer
  };
}

class AppBare extends React.Component<{
	cerrarSesion: any,
	miPerfil: any,
	cambiarPassword: any
}, {
	anchorEl: null | HTMLElement,
	mobileMoreAnchorEl: null | HTMLElement
	mensajes: null | HTMLElement,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
			anchorEl: null,
			mobileMoreAnchorEl: null,
			mensajes:null,
		};
	}

	renderRow(){
		return <ListItem>
		<ListItemAvatar>
		
			<Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
		
		</ListItemAvatar>
		<ListItemText
		primary={"Este es un nuevo mensaje"}
		secondary={"15:00 PM"}
		/>
	</ListItem>
	}


	render(){

		const classes = this.props.classes
		
		const isMenuOpen = Boolean(this.state.anchorEl);
		const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);
		const isMessageOpen = Boolean(this.state.mensajes);

		const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
			this.setState({
				anchorEl: event.currentTarget
			})
		};

		const handleMessageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
			this.setState({
				mensajes: event.currentTarget
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

		const handleMessageMenuClose = () => {
			this.setState({
				mensajes: null
			})
			//handleMobileMenuClose();
			
		};

		const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
			this.setState({
				mobileMoreAnchorEl: event.currentTarget
			})
		};

		const handleDrawerOpen = () => {
			this.props.dispatch(drawerAction.open())
		};

		const cerrarSesion = () => {
			handleMenuClose()
			this.props.cerrarSesion()
		};

		const miPerfil = () => {
			handleMenuClose()
			this.props.miPerfil()
		};

		const cambiarPassword = () => {
			handleMenuClose()
			this.props.cambiarPassword()
		};

		const menuId = 'primary-search-account-menu';
	
		const mobileMenuId = 'primary-search-account-menu-mobile';

		const visibleDrawer = () => {
			let visible: {} = {
				display: 'none'
			}
	
			if(this.props.visibleDrawer) {
				visible = {}
			}
	
			return visible
		}

		return(
			
			<AppBar position="absolute" className={clsx(classes.appBar, this.props.open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<div style={visibleDrawer()}>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							className={clsx(classes.menuButton, this.props.open && classes.menuButtonHidden)}
						>
							<MenuIcon />
						</IconButton>
					</div>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Buscar"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						<IconButton aria-label="show 4 new mails" color="inherit"
						onClick={handleMessageMenuOpen} >
							<Badge badgeContent={4}  color="secondary">
								<MailIcon className={classes.menuButton}/>
							</Badge>
						</IconButton>
						<IconButton aria-label="show 17 new notifications" color="inherit">
							<Badge badgeContent={17} color="secondary">
								<NotificationsIcon className={classes.menuButton}/>
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
							<AccountCircle className={classes.menuButton} />
						</IconButton>
					</div>
					<div className={classes.sectionMobile}>
						<IconButton
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
						
						>
							<MoreIcon className={classes.menuButton}/>
						</IconButton>
					</div>
					
					<Menu
						anchorEl={this.state.mobileMoreAnchorEl}
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
						id={mobileMenuId}
						keepMounted
						transformOrigin={{ vertical: 'top', horizontal: 'right' }}
						open={isMobileMenuOpen}
						onClose={handleMobileMenuClose}
					>
						<MenuItem onClick={handleMessageMenuOpen}>
							<IconButton aria-label="show 4 new mails" color="inherit">
								<Badge badgeContent={4} color="secondary">
									<MailIcon />
								</Badge>
							</IconButton>
							<p className={classes.subtitle} >Mensajes </p>
						</MenuItem>
						<MenuItem>
							<IconButton aria-label="show 11 new notifications" color="inherit">
								<Badge badgeContent={11} color="secondary">
									<NotificationsIcon />
								</Badge>
							</IconButton>
							<p className={classes.subtitle} >Notificaciones</p>
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
							
							<p className={classes.subtitle} >Mi Perfil</p>
					
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
						<MenuItem onClick={miPerfil} className={classes.subtitle}>Mi perfil</MenuItem>
						<MenuItem onClick={cerrarSesion} className={classes.subtitle}>Cerrar Sesión</MenuItem>
						<MenuItem onClick={cambiarPassword} className={classes.subtitle}>Cambiar contraseña</MenuItem>
					</Menu>

					  <Menu
						anchorEl={this.state.mensajes}
						anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
						id={menuId}
						keepMounted
						transformOrigin={{ vertical: 'top', horizontal: 'right' }}
						open={isMessageOpen}
						onClose={handleMessageMenuClose}
					>
						
						<Box pt={1} pl={2} pb={1} pr={1}>
							<Typography >
								<Link href={'/mensajes'} variant="subtitle1" className={classes.link}>
								{ 'Ver mensajes ' }
								</Link>
							</Typography>
							
							</Box>
							<Divider className={classes.divider} />
							
						<FixedSizeList height={200} width={370} itemSize={10} itemCount={3}>
						
							 {this.renderRow} 
						</FixedSizeList>

					</Menu>  
					 
					
				</Toolbar>
			</AppBar>
			
		);
	}
}

export default connect(mapStateToProps)(AppBare)