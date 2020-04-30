import withRoot from './../withRoot'
import React from 'react'

// import ProductCategories from './modules/views/ProductCategories'
// import ProductSmokingHero from './modules/views/ProductSmokingHero'
// import AppFooter from './modules/views/AppFooter'
// import ProductValues from './modules/views/ProductValues'
// import ProductHowItWorks from './modules/views/ProductHowItWorks'
// import ProductCTA from './modules/views/ProductCTA'
import { AppAppBar } from '../../views/AppAppBar'
import { Banner } from '../../views/Banner'

class Index extends React.Component<{}, {}> {

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
		return (
			<React.Fragment>
				<AppAppBar />
				 <Banner />
				{/*<ProductValues />
				<ProductCategories />
				<ProductHowItWorks />
				<ProductCTA />
				<ProductSmokingHero />
				<AppFooter /> */}
			</React.Fragment>
		)
	}

}

export default withRoot(Index)