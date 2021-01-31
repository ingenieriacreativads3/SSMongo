import React from 'react';
import clsx from 'clsx'

import { Container, Avatar, Link,  Button, Grid, ListSubheader, Typography, CssBaseline} from '@material-ui/core';

import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import  slide1  from './img/slide1.jpeg';
import  slide2  from './img/slide2.jpeg';
import  slide3  from './img/slide3.jpeg';
import logo from "./../Login/img/logo.png";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Empresas extends React.Component <{
  clasess: any,
  theme: any
}, {

  valueFilter: number | null,
  hoverFilter: any,
  activeStep: number
  
}> {

	props: any
	static propTypes: any
	static defaultProps: any

	constructor(props: any) {
		super(props);
		this.state = {
			valueFilter: 2,
	  	hoverFilter: -1,
	  	activeStep: 0
		};
  }

  render(){
	
		let empresas: any[] = []

		if(
			this.props.empresas !== undefined && 
			Array.isArray(this.props.empresas) &&
			this.props.empresas.length > 0
		) {
			empresas = this.props.empresas
		}

		const classes = this.props.classes
		const theme = this.props.theme
		const fixedHeightCardCatalog = clsx(classes.CardCatalog, classes.fixedHeightCAtalog);
	
		const tutorialSteps = [
			{
			
			imgPath:slide1,
			},
			{
			
			imgPath:slide2,
			},
			{
			
			imgPath:slide3,
			},
		];

		const maxSteps = tutorialSteps.length;

		const handleNext = () => {
			this.setState({
			activeStep: this.state.activeStep + 1
			});
		};
		
		const handleBack = () => {
			this.setState({
			activeStep: this.state.activeStep - 1
			});
		};
		
		const handleStepChange = (step: number) => {
			this.setState({
			activeStep: step
			});
		};

		const viewProfile = () =>{
			this.props.history.push('/home/perfil/:id');
		}

		return(
	  	<div className={ classes.root }>
				<CssBaseline />
				{ this.props.appBar }
					<main className={ classes.content }>
						<div className={classes.rootCarousel}>
							<AutoPlaySwipeableViews
								axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
								index={this.state.activeStep}
								onChangeIndex={handleStepChange}
								enableMouseEvents
							>
								{
									tutorialSteps.map((step, index) => (
										<div>
											{
												Math.abs(this.state.activeStep - index) <= 2 ? ( <img className={classes.img} src={step.imgPath}  /> ) : null
											}
										</div>
									))
								}
							</AutoPlaySwipeableViews>
							<MobileStepper
								steps={maxSteps}
								position="static"
								variant="dots"
								activeStep={this.state.activeStep}
								nextButton={
									<Button size="small" onClick={handleNext} disabled={this.state.activeStep === maxSteps - 1} >
										{ theme.direction === 'rtl' }
									</Button>
								}
								backButton={
									<Button size="small" onClick={handleBack} disabled={this.state.activeStep === 0}>
										{ theme.direction === 'rtl' }
									</Button>
								}
							/>
		  			</div>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" >
							<Grid container >
								<Breadcrumbs aria-label="breadcrumb">
									<Link color="inherit">
										Suppliers Store
									</Link>
									<Link color="inherit" >
										Rubros
									</Link>
									<Link style={{color:'#000000'}}>{ this.props.rubro }</Link>
								</Breadcrumbs>
							<div style={{ display: empresas.length === 0? 'block': 'none' }} >
								<Grid
									container
									direction="row"
									justify="center"
									alignItems="center"
								>
									<ListSubheader component="div" id="nested-list-subheader">
										<Typography  variant="h4" component="h3" gutterBottom>
											No hay empresas para este rubro
										</Typography>
								  </ListSubheader>
									<Grid
										container
										direction="row"
										justify="center"
										alignItems="center"
									>

									  <Avatar   src={logo} className={classes.avatar}  />
			  					</Grid>
									<Grid
										container
										direction="row"
										justify="center"
										alignItems="center"
									>
										<Link href="/home/inicio" style={{textDecoration: 'none'}} >
											<Button
												type="button"
												className={classes.Boton}
											>
												Ver categorías
											</Button>
										</Link>
								  </Grid>
								</Grid>
							</div>
							<Paper style={{ width: "100%", marginTop: "1.5rem", display: empresas.length === 0? 'none': 'block' }} >
								<List component="nav" aria-label="main mailbox folders">
									{
										empresas.map((empresa)=>{
											return <div>
												<ListItem button>
													<ListItemText primary={empresa.nombre} />
													<ListItemSecondaryAction>
														<Button
															variant="outlined"
															className={classes.ButtonVerPerfil}
															onClick={viewProfile}
															>
															Ver Perfil
														</Button>
													</ListItemSecondaryAction>
												</ListItem>
												<Divider/>
											</div>
										})
									}
								</List>
							</Paper>
						</Grid>
					</Container>
					{ this.props.footer }
				</main>
			</div>
		);
  }
}

export default Empresas