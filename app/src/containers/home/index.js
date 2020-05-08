import withRoot from '../withRoot'
import React from 'react'

import Asd from './asd'
import AppBar from './../../components/AppBar'

class Index extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)
    this.state = {
			open: false
    }
	}

	render(){

		return (
			<React.Fragment>
				<AppBar />
				<Asd />
			</React.Fragment>
		)
	}

}

export default withRoot(Index)