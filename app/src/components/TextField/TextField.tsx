import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';
import { capitalize } from '@material-ui/core/utils';
import styles from './style'
import { connect } from 'react-redux'

function mapStateToProps(store: {
  login: any
}) {
  return {
    login: store.login
  }
}

class TextField extends React.Component<{
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
    const {
      classes,
      InputProps = {},
      InputLabelProps,
      noBorder = false,
      size = 'medium',
      SelectProps,
      ...other
    } = this.props;

      const {
        classes: { 
          // input: InputPropsClassesInput, 
          ...InputPropsClassesOther 
        } = {},
      ...InputPropsOther
    } = InputProps;
  

    return <MuiTextField
    InputProps={{
      disableUnderline: true,
      classes: {
        root: classes.root,
        input: clsx(
          classes.input,
          classes[`inputSize${capitalize(size)}`],
          {
            [classes.inputBorder]: !noBorder,
          },
          //InputPropsClassesInput,
        ),
        disabled: classes.disabled,
        ...InputPropsClassesOther,
      },
      ...InputPropsOther,
    }}
    InputLabelProps={{
      ...InputLabelProps,
      shrink: true,
      className: classes.formLabel,
    }}
    SelectProps={{
      ...SelectProps,
      classes: {
        select: classes.select,
        icon: classes.selectIcon,
      },
    }}
    {...other}
  />
    
  }
}

export default connect(mapStateToProps)(withStyles(styles)(TextField))