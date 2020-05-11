import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer';;
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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import * as drawerAction from './../../store/actions/drawer'

function mapStateToProps(store: {
  drawerReducer: {
    open: boolean
  }
}) {
  return {
    open: store.drawerReducer.open
  };
}

class MenuLateral extends React.Component<{}, {
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
						
		);
	}
}

export default connect(mapStateToProps)(MenuLateral)