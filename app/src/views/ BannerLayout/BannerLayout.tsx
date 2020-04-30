import React from 'react';
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles'
import PropTypes from 'prop-types';


function mapStateToProps(store: {
    login: any
  }) {
    return {
      login: store.login
    }
  }

class BannerLayout extends React.Component<{
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
        const { backgroundClassName, children } = this.props;
    return(
        <section className={classes.root}>
        <Container className={classes.container}>
          <img
            src="/static/themes/onepirate/productHeroWonder.png"
            alt="wonder"
            width="147"
            height="80"
          />
          {children}
          <div className={classes.backdrop} />
          <div className={clsx(classes.background, backgroundClassName)} />
          <img
            className={classes.arrowDown}
            src="/static/themes/onepirate/productHeroArrowDown.png"
            height="16"
            width="12"
            alt="arrow down"
          />
        </Container>
      </section>
    )
  }
}

export default connect(mapStateToProps)(withStyles(styles)(BannerLayout))
