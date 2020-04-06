import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add'
import ListSubheader from '@material-ui/core/ListSubheader';
import AttachMoney from '@material-ui/icons/AttachMoney';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import PersonAdd from '@material-ui/icons/PersonAdd';
import PostAdd from '@material-ui/icons/PostAdd';
import Link from '@material-ui/core/Link';

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
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
						{/* <Typography variant="h3" noWrap>
						
						</Typography> */}
						<nav>
						<Link variant="button" color="textPrimary" href="#"  className={classes.link}>
							INICIO
						</Link>
						<Link variant="button" color="textPrimary" href="#" className={classes.link}>
						MI PERFIL 
						</Link>
						<Link variant="button" color="textPrimary" href="#" className={classes.link}>
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
					{/* <List>
						{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
							<ListItem button key={text}>
								 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} /> 
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
							<ListItem button key={text}>
								 <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
								<ListItemText primary={text} /> 
							</ListItem>
						))}
					</List> */}
				</Drawer>
				<main className={classes.content}>
					<div className={classes.toolbar} />
					<Typography paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
						ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
						facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
						gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
						donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
						adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
						Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
						imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
						arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
						donec massa sapien faucibus et molestie ac.
					</Typography>
					<Typography paragraph>
						Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
						facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
						tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
						consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
						vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
						hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
						tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
						nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
						accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
					</Typography>
				</main>
			</div>

			
		);
	}
}


export default AppBare