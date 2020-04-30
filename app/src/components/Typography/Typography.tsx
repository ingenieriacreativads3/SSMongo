import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils';
import MuiTypography from '@material-ui/core/Typography';
import styles from './styles'
import { connect } from 'react-redux'

function mapStateToProps(store: {
  login: any
}) {
  return {
    login: store.login
  }
}

class Typography extends React.Component<{
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
    const variantMapping = {
        h1: 'h1',
        h2: 'h1',
        h3: 'h1',
        h4: 'h1',
        h5: 'h3',
        h6: 'h2',
        subtitle1: 'h3',
      };
    const { children, classes, marked = false, variant, ...other } = this.props;

    return <div>
        <MuiTypography variantMapping={variantMapping} variant={variant} {...other}>
        {children}
        {marked ? (
            <span className={classes[`marked${capitalize(variant) + capitalize(marked)}`]} />
        ) : null}
        </MuiTypography>
      </div>
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Typography))