import React from 'react';
import clsx from 'clsx'
import { Container, Grid, Card, Box, ListItem, ListItemIcon, Typography, CssBaseline,  CardContent, IconButton, CardMedia} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import MenuLateral from './../Drawer';
import Radio from '@material-ui/core/Radio';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import * as Login from './../../store/actions/login'
import * as drawerActions from './../../store/actions/drawer'
import AppBar from './../AppBar'

//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function mapStateToProps(store: {
	Item: {},
	login: {
		data: {
			empresa: {
				_id: string
			}
		}
	}
}) {
  return {
    Item: store.Item,
    // idEmpresa: store.login.data.empresa._id
  };
}

class EstadisticasActividad extends React.Component <{}, {

}> {

	props: any
	static propTypes: any
	static defaultProps: any


  
  componentWillMount() {
    this.props.dispatch(drawerActions.invisibleDrawer())
  }

  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);

   
    return(

      <div className={classes.root}>
        <CssBaseline />
        <AppBar></AppBar>
        <MenuLateral></MenuLateral>
					<main className={classes.content}>
						<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							
            <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
           Pedidos
          </Typography>
         
        </CardContent>
        <div className={classes.controls}>
          
        </div>
      </div>
      <CardMedia
        className={classes.cover}
       
      />
       <ListItem button>
						<ListItemIcon>
							<ShoppingCart className={classes.icon} />
						</ListItemIcon>
					
					</ListItem>
    </Card>
                    


							<Box pt={4}>
								<Copyright />
							</Box>
						</Container>
					</main>

         
		 </div>

    );
  }
}


export default connect(mapStateToProps)(EstadisticasActividad)