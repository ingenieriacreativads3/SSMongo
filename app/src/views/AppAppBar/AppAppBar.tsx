import React from 'react'
import { connect } from 'react-redux'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import AppBar from '../../components/AppBarHome'
import Toolbar  from '../../components/Toolbar'
import styles from './styles'

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
						<div className={classes.right}>
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
						</div>
					</Toolbar>
				</AppBar>
				<div className={classes.placeholder} />
			</div>
    )
  }
}

export default connect(mapStateToProps)(withStyles(styles)(AppAppBar))
