import React  from 'react';
import { connect } from 'react-redux'
import clsx from 'clsx'
import {Typography,Collapse, List } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add'
import AttachMoney from '@material-ui/icons/AttachMoney';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import PersonAdd from '@material-ui/icons/PersonAdd';
import PostAdd from '@material-ui/icons/PostAdd';
import Link from '@material-ui/core/Link';
import StarIcon from '@material-ui/icons/Star';
import BarChartIcon from '@material-ui/icons/BarChart';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import * as drawerAction from './../../store/actions/drawer';
import logo from './../Login/img/logoSoloLetras.png';


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
	openItemMenuEstadisticasPlataforma: boolean,
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
		this.handleClickEstadisticasPlataforma = this.handleClickEstadisticasPlataforma.bind(this);
		this.handleClickSolicitudes = this.handleClickSolicitudes.bind(this);
		this.handleClickCatalogo = this.handleClickCatalogo.bind(this);
		this.state = {
			anchorEl: null,
			mobileMoreAnchorEl: null,
			openItemMenuCompras:false,
			openItemMenuVentas: false,
			openItemMenuEstadisticas: false,
			openItemMenuEstadisticasPlataforma: false,
			openItemMenuSolicitudes: false,
			openItemMenuCatalogo: false,
		};
	}

	 volverInicio = () => {
		this.props.history.push("/home/inicio");
	}


	handleClickCompras(e: any) {
		this.setState({ openItemMenuCompras: !this.state.openItemMenuCompras })
	  }

	  handleClickVentas(e: any) {
		this.setState({ openItemMenuVentas: !this.state.openItemMenuVentas })
	  }

	  handleClickEstadisticas(e: any) {
		this.setState({ openItemMenuEstadisticas: !this.state.openItemMenuEstadisticas })
	  }

	  
	  handleClickEstadisticasPlataforma(e: any) {
		this.setState({ openItemMenuEstadisticasPlataforma: !this.state.openItemMenuEstadisticasPlataforma })
	  }

	  handleClickSolicitudes(e: any) {
		this.setState({ openItemMenuSolicitudes: !this.state.openItemMenuSolicitudes })
	  }

	  handleClickCatalogo(e: any) {
		this.setState({ openItemMenuCatalogo: !this.state.openItemMenuCatalogo })
	  }

	

	render(){

		const classes = this.props.classes

		

		return(
			
				
				<Drawer
					variant="permanent"
					classes={{
						paper: clsx(classes.drawerPaper, !this.props.open && classes.drawerPaperClose),
					}}
					open={this.props.open}
				>
					 <div className={classes.toolbar} >
					 <img onClick={this.volverInicio} style={{width:"250px", height: "30px", marginTop:"20px"}} src={logo}></img> 
						{/* <Avatar src={logoLetras} className={classes.avatar} ></Avatar> */}
					</div> 
					{/* <div className={classes.toolbarIcon}>
						<IconButton onClick={handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div> */}
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
							<Link href={ '/home/reputacion' } className={classes.link} style={{textDecoration: 'none'}}>
								<ListItem button className={classes.nested}>
								<ListItemIcon>
								<StarIcon className={classes.icon}/>
								</ListItemIcon>
									<ListItemText primary="Reputacion" />
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

					<ListItem  className={classes.subtitle}  button onClick={this.handleClickEstadisticasPlataforma}>
						<ListItemText style={{paddingLeft:'60px'}} className={classes.subtitle} primary="Estadisticas" />
						{this.state.openItemMenuEstadisticasPlataforma ? <ExpandLess /> : <ExpandMore />}
					</ListItem>
					<Collapse in={this.state.openItemMenuEstadisticasPlataforma} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<Link href={ '/home/reputacionPlataforma' } className={classes.link} style={{textDecoration: 'none'}}>
								<ListItem button className={classes.nested}>
								<ListItemIcon>
								<StarIcon className={classes.icon}/>
								</ListItemIcon>
									<ListItemText primary="Reputacion Plataforma" />
								</ListItem>
							</Link>
						</List>
					</Collapse> 

				</Drawer>
						
		);
	}
}

export default connect(mapStateToProps)(MenuLateral)