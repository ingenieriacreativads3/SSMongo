import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import MuiAppBar from '@material-ui/core/AppBar'
import styles from './styles'

function mapStateToProps(store: {
  login: any
}) {
  return {
    login: store.login
  }
}

class Index extends React.Component<{
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
    return <div>
			<MuiAppBar elevation={0} position="static" {...this.props} />
		</div>
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Index))