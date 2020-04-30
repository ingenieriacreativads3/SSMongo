import withRoot from '../withRoot'
import React from 'react'

// import ProductCategories from './modules/views/ProductCategories'
// import ProductSmokingHero from './modules/views/ProductSmokingHero'
// import AppFooter from './modules/views/AppFooter'
// import ProductValues from './modules/views/ProductValues'
// import ProductHowItWorks from './modules/views/ProductHowItWorks'
// import ProductCTA from './modules/views/ProductCTA'
import { AppAppBar } from '../../views/AppAppBar'
import { Banner } from '../../views/Banner'
import Footer from '../../views/Footer'
import * as AutoRotatingCarousel from 'material-auto-rotating-carousel';
import Asd from './asd'

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
				<AppAppBar />
				{/* <Banner />
				<Footer /> */}
				<Asd />
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