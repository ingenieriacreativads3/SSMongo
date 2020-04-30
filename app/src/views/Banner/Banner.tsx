import React from 'react';
import { Typography } from '../../components/Typography';
import { BannerLayout } from './../BannerLayout'
import styles from './styles'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Button from '../../components/Button'

function mapStateToProps(store: {
  login: any
}) {
  return {
    login: store.login
  }
}

class Banner extends React.Component<{
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
		const backgroundImage = 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

    return(
        <BannerLayout backgroundClassName={classes.background}>
        {/* Increase the network loading priority of the background image. */}
        <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
        <Typography color="inherit" align="center" variant="h2" marked="center">
          Upgrade your Sundays
        </Typography>
        <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
          Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
        </Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          className={classes.button}
          // component="a"
          href="/premium-themes/onepirate/sign-up/"
        >
          Register
        </Button>
        <Typography variant="body2" color="inherit" className={classes.more}>
          Discover the experience
        </Typography>
      </BannerLayout>
    )
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Banner))
