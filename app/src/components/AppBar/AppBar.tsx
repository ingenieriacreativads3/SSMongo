import React from 'react';
import { connect } from 'react-redux'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { IconButton, Badge, Button, ListItem, ListItemAvatar, Avatar,ListItemText, Divider, Typography, Box } from '@material-ui/core';
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
import logo from './../Login/img/logoSoloLetras.png';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PersonIcon from '@material-ui/icons/Person'

import * as drawerAction from './../../store/actions/drawer'
import * as itemActions from './../../store/actions/item'

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

class AppBare extends React.Component<{}, {
	anchorEl: null | HTMLElement,
	mobileMoreAnchorEl: null | HTMLElement
	mensajes: null | HTMLElement,
	search: string
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
			anchorEl: null,
			mobileMoreAnchorEl: null,
			mensajes: null,
			search: ''
		};
	}

	renderRow = (props: any) => {

		const { index } = props
		let mensajesLista: {
			comentario: string,
			created_at: string,
			empresa: {
				nombre: string,
				logo: string
			}
		}[] = []

		let apiUrl: string = 'http://localhost:8000/'
		let foto: string = ''
		let mensaje: string = ''
		let hora: string = ''
		let nombre: string = ''
		let logo: string = ''

		if(
			this.props.mensajesLista !== undefined &&
			Array.isArray(this.props.mensajesLista) &&
			this.props.mensajesLista.length > 0
		) {
			mensajesLista = this.props.mensajesLista
		}

		if(mensajesLista[index] !== undefined) {
			if(mensajesLista[index].comentario !== undefined) mensaje = mensajesLista[index].comentario
			if(mensajesLista[index].created_at !== undefined) hora = mensajesLista[index].created_at
			if(mensajesLista[index].empresa !== undefined) {
				if(mensajesLista[index].empresa.nombre !== undefined) nombre = mensajesLista[index].empresa.nombre
				if(mensajesLista[index].empresa.logo !== undefined) {
					logo = mensajesLista[index].empresa.logo
					foto = apiUrl + logo
				}
			}
		}

		return <ListItem>
			<ListItemAvatar>
			
				<Avatar alt={ nombre } src={ foto } />
			
			</ListItemAvatar>
			<ListItemText
				primary={ nombre }
				secondary={ mensaje + ' - ' + hora}
			/>
		</ListItem>
	}

	handleKeyPress = (e: any) => {
		if(e.key === 'Enter'){
			if(this.props.history !== undefined) {
				this.props.dispatch(itemActions.searchByName(this.state.search))
				this.props.history.push("/home/busqueda/" + this.state.search)
			}
		}
	}

	searchGetValue = (e: any) => {
		this.setState({
			search: e.target.value
		})
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
			if(this.props.open === false)
			{
				this.props.dispatch(drawerAction.open())
			}
			else
			{
				this.props.dispatch(drawerAction.close())
			}
			
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

		const mensajes = () => {
			handleMenuClose()
			this.props.mensajes()
		};

		const volverInicio = () => {
			this.props.history.push("/home/inicio");
		}

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
							onKeyPress={ this.handleKeyPress }
							onChange={ this.searchGetValue }
						/>
					</div>
					<div>
					
					 <img onClick={volverInicio} style={{width:"260px", height: "35px"}} src={logo}></img> 
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
						<Button
						className={classes.menuButton}
						startIcon={<PersonIcon />}
						endIcon={<ArrowDropDownIcon />}
						onClick={handleProfileMenuOpen}
						>
						{ this.props.nombre }
						</Button>
						{/* <IconButton
							edge="end"
							aria-label="account of current user"
							aria-controls={menuId}
							aria-haspopup="true"
							onClick={handleProfileMenuOpen}
							color="inherit"
						>
							<AccountCircle className={classes.menuButton} />
						</IconButton> */}
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
							
							<p className={classes.subtitle}>{ this.props.nombre.toUpperCase() }</p>
					
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
						<MenuItem onClick={ miPerfil } className={classes.subtitle}>Mi perfil</MenuItem>
						<MenuItem onClick={ cerrarSesion } className={classes.subtitle}>Cerrar Sesión</MenuItem>
						<MenuItem onClick={ cambiarPassword } className={classes.subtitle}>Cambiar contraseña</MenuItem>
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
								<MenuItem onClick={ mensajes } className={classes.subtitle}>Ver Mensajes</MenuItem>
							</Typography>
						</Box>
						<Divider className={classes.divider} />
						<FixedSizeList height={200} width={370} itemSize={10} itemCount={3}>
							{ this.renderRow }
						</FixedSizeList>
					</Menu>  
				</Toolbar>
			</AppBar>
		);
	}
}

export default connect(mapStateToProps)(AppBare)