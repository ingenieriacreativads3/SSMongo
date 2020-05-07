import React from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import {withStyles} from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import AppBar from '../../components/AppBarHome'
import Toolbar  from '../../components/Toolbar'
import styles from './styles'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

function mapStateToProps(store: {
  login: any
}) {
  return {
    login: store.login
  }
}

class AppAppBar extends React.Component<{
	classes: any
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props)
    this.state = {
    }
  }

  

  render(){

		const { classes } = this.props;
		const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
		
    return(
      <div>
				<AppBar position="fixed">
					<Toolbar className={classes.toolbar}>
						<div className={classes.left} />
						<Link
							variant="h6"
							underline="none"
							color="inherit"
							className={classes.title}
							href="/premium-themes/onepirate/"
						>
							{/* {'SupliersStore ahre'} */}
						</Link>
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
						{/* {auth && ( */}
						<div className={classes.right}>
							<Link
								color="inherit"
								variant="h6"
								underline="none"
								className={classes.rightLink}
								// href="/registrar"
							>
								{'INICIO'}
								</Link>
							 <IconButton
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								// onClick={handleMenu}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
							{/* <Menu
								id="menu-appbar"
								// anchorEl={anchorEl}
								// anchorOrigin={{
								// vertical: 'top',
								// horizontal: 'right',
								// }}
								// keepMounted
								// transformOrigin={{
								// vertical: 'top',
								// horizontal: 'right',
								// }}
								// open={open}
								// onClose={handleClose}
							>
								<MenuItem>Mi perfil</MenuItem>
								<MenuItem>Cerrar Sesion</MenuItem>
							</Menu> */}
						</div>
						{/* )} */}
						
						{/* <div className={classes.right}>
							<Link
								color="inherit"
								variant="h6"
								underline="none"
								className={classes.rightLink}
								href="/registrar"
							>
								{'Ingresar'}
							</Link>
							<Link
								variant="h6"
								underline="none"
								className={clsx(classes.rightLink, classes.linkSecondary)}
								href="/ingresar"
							>
								{'Registrarme'}
							</Link>
						</div> */}
					</Toolbar>
				</AppBar>
				<div className={classes.placeholder} />
			</div>
    )
  }
}

export default connect(mapStateToProps)(withStyles(styles)(AppAppBar))
