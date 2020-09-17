import React, { Component }  from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import clsx from 'clsx'
import { IconButton, Typography, Badge, Button, Collapse, List } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import StarIcon from '@material-ui/icons/Star';
import BarChartIcon from '@material-ui/icons/BarChart';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import StarBorder from '@material-ui/icons/StarBorder';
import * as drawerAction from './../../store/actions/drawer';

function mapStateToProps(store: {
  drawerReducer: {
    open: boolean
  }
}) {
  return {
    open: store.drawerReducer.open
  };
}

class MenuLateral extends React.Component<{
	link?: any,
}, {
	anchorEl: null | HTMLElement,
	mobileMoreAnchorEl: null | HTMLElement,
	openItemMenuCompras: boolean,
	openItemMenuVentas: boolean,
	openItemMenuEstadisticas: boolean,
	openItemMenuSolicitudes: boolean,
	openItemMenuCatalogo: boolean,
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.handleClickCompras = this.handleClickCompras.bind(this);
		this.handleClickVentas = this.handleClickVentas.bind(this);
		this.handleClickEstadisticas = this.handleClickEstadisticas.bind(this);
		this.handleClickSolicitudes = this.handleClickSolicitudes.bind(this);
		this.handleClickCatalogo = this.handleClickCatalogo.bind(this);
		this.state = {
			anchorEl: null,
			mobileMoreAnchorEl: null,
			openItemMenuCompras:false,
			openItemMenuVentas: false,
			openItemMenuEstadisticas: false,
			openItemMenuSolicitudes: false,
			openItemMenuCatalogo: false,
		};
	}

	handleClickCompras(e: any) {
		debugger;
		this.setState({ openItemMenuCompras: !this.state.openItemMenuCompras })
	  }

	  handleClickVentas(e: any) {
		debugger;
		this.setState({ openItemMenuVentas: !this.state.openItemMenuVentas })
	  }

	  handleClickEstadisticas(e: any) {
		debugger;
		this.setState({ openItemMenuEstadisticas: !this.state.openItemMenuEstadisticas })
	  }

	  handleClickSolicitudes(e: any) {
		debugger;
		this.setState({ openItemMenuSolicitudes: !this.state.openItemMenuSolicitudes })
	  }

	  handleClickCatalogo(e: any) {
		debugger;
		this.setState({ openItemMenuCatalogo: !this.state.openItemMenuCatalogo })
	  }

	

	render(){

		const classes = this.props.classes

		const handleDrawerClose = () => {
			this.props.dispatch(drawerAction.close())
		};

		return(
			
				
				<Drawer
					variant="permanent"
					classes={{
						paper: clsx(classes.drawerPaper, !this.props.open && classes.drawerPaperClose),
					}}
					open={this.props.open}
				>
					{/* <div className={classes.toolbar} >
						<Avatar src={logo} className={classes.avatar} ></Avatar>
					</div> */}
					<div className={classes.toolbarIcon}>
						<IconButton onClick={handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />

					<ListItem  className={classes.subtitle}  button onClick={this.handleClickCatalogo}>
						<ListItemText style={{paddingLeft:'60px'}} className={classes.subtitle} primary="Mi Catalogo" />
						{this.state.openItemMenuCatalogo ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.openItemMenuCatalogo} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<Link href="/home/catalogo" className={classes.link} style={{textDecoration: 'none'}}>
								<ListItem button className={classes.nested}>
								<ListItemIcon>
								<DashboardIcon className={classes.icon}/>
								</ListItemIcon>
									<ListItemText primary="Mi Catalogo" />
								</ListItem>
							</Link>
							<Link href="/item/nuevo" className={classes.link} style={{textDecoration: 'none'}}>
								<ListItem button className={classes.nested}>
								<ListItemIcon>
								<AddIcon className={classes.icon}/>
								</ListItemIcon>
									<ListItemText primary="Agregar Item" />
								</ListItem>
							</Link>
						</List>
					</Collapse> 

					

					<ListItem  className={classes.subtitle}  button onClick={this.handleClickCompras}>
						<ListItemText style={{paddingLeft:'60px'}} className={classes.subtitle} primary="Mis compras" />
						{this.state.openItemMenuCompras ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.openItemMenuCompras} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<Link href="/compras/presupuestos/lista" className={classes.link} style={{textDecoration: 'none'}}>
								<ListItem button className={classes.nested}>
								<ListItemIcon>
									<AttachMoney className={classes.icon}/>
								</ListItemIcon>
									<ListItemText primary="Presupuestos" />
								</ListItem>
							</Link>
							<Link href="/compras/pedidos/lista" className={classes.link} style={{textDecoration: 'none'}}>
								<ListItem button className={classes.nested}>
								<ListItemIcon>
									<ShoppingCart className={classes.icon} />
								</ListItemIcon>
									<ListItemText primary="Pedidos" />
								</ListItem>
							</Link>
						</List>
					</Collapse> 


					<ListItem  className={classes.subtitle}  button onClick={this.handleClickVentas}>
						<ListItemText style={{paddingLeft:'60px'}} className={classes.subtitle} primary="Mis ventas" />
						{this.state.openItemMenuVentas ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.openItemMenuVentas} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<Link href="/ventas/presupuestos/lista" className={classes.link} style={{textDecoration: 'none'}}>
								<ListItem button className={classes.nested}>
								<ListItemIcon>
									<AttachMoney className={classes.icon}/>
								</ListItemIcon>
									<ListItemText primary="Presupuestos" />
								</ListItem>
							</Link>
							<Link href="/ventas/pedidos/lista" className={classes.link} style={{textDecoration: 'none'}}>
								<ListItem button className={classes.nested}>
								<ListItemIcon>
									<ShoppingCart className={classes.icon} />
								</ListItemIcon>
									<ListItemText primary="Pedidos" />
								</ListItem>
							</Link>
						</List>
					</Collapse> 

					
					<ListItem  className={classes.subtitle}  button onClick={this.handleClickEstadisticas}>
						<ListItemText style={{paddingLeft:'60px'}} className={classes.subtitle} primary="Estadisticas" />
						{this.state.openItemMenuEstadisticas ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.openItemMenuEstadisticas} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<Link href="/home/resumen" className={classes.link} style={{textDecoration: 'none'}}>
								<ListItem button className={classes.nested}>
								<ListItemIcon>
								<BarChartIcon className={classes.icon} />
								</ListItemIcon>
									<ListItemText primary="Mi resumen" />
								</ListItem>
							</Link>
							<Link href="/ventas/pedidos/lista" className={classes.link} style={{textDecoration: 'none'}}>
								<ListItem button className={classes.nested}>
								<ListItemIcon>
								<StarIcon className={classes.icon}/>
								</ListItemIcon>
									<ListItemText primary="Pedidos" />
								</ListItem>
							</Link>
						</List>
					</Collapse> 

					<ListItem  className={classes.subtitle}  button onClick={this.handleClickSolicitudes}>
						<ListItemText style={{paddingLeft:'60px'}} className={classes.subtitle} primary="Solicitudes" />
						{this.state.openItemMenuSolicitudes ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.openItemMenuSolicitudes} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<Link href="/solicitud/validacion" className={classes.link} style={{textDecoration: 'none'}}>
								<ListItem button className={classes.nested}>
								<ListItemIcon>
								<PersonAdd className={classes.icon} />
								</ListItemIcon>
									<ListItemText primary="Validacion" />
								</ListItem>
							</Link>
							<Link href="/solicitud/unidadMedida" className={classes.link} style={{textDecoration: 'none'}}>
								<ListItem button className={classes.nested}>
								<ListItemIcon>
								<PostAdd className={classes.icon}/>
								</ListItemIcon>
									<ListItemText primary="Unidad de Medida" />
								</ListItem>
							</Link>
						</List>
					</Collapse> 

				</Drawer>
						
		);
	}
}

export default connect(mapStateToProps)(MenuLateral)