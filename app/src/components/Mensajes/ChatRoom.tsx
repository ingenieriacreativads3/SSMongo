import React from 'react';
import AppBar from './../AppBar'
import clsx from 'clsx'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, Box, Typography, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Paper, List, Divider, TextField, CssBaseline, CardHeader, Avatar, IconButton, Button, CardContent, Input, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, CardActions, InputAdornment} from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';
import FormHelperText from '@material-ui/core/FormHelperText';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';


import * as ubicacionActions from './../../store/actions/ubicacion'
import * as fileActions from './../../store/actions/file'


//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'
import MenuLateral from '../Drawer';


const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#d93211',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#d93211',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#d93211',
        },
        '&:hover fieldset': {
          borderColor: '#d93211',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#d93211',
        },
      },
    },
  })(TextField);
  

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
  
}) {
  return {
  
  };
}

class ChatRoom extends React.Component <{
  classes: any,
  history: any,
  location: any,
  match: any,
  staticContext?: any,
}, {
 
}>  {

	props: any
	static propTypes: any
	static defaultProps: any
 
  constructor(props: any) {
    super(props);
    this.state={
        messages:["a",'b'],
    }
  }

 
  render(){

		const classes = this.props.classes
    const fixedHeightCard = clsx(classes.Card, classes.fixedHeight);
    const theme = createMuiTheme({
      palette: {
        //primary: orange,
        secondary: {
          main: '#ffba00',
        },
      },
    });


    

    return(

      <div className={classes.root} >
        <CssBaseline />
        {this.props.appBar}
         {this.props.drawer}
        <main className={classes.content}  >
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            <Grid container component={Paper} className={classes.chatSection}>
           
           <Grid item xs={12}>
               <List className={classes.messageArea}>
                   
                   <ListItem key="1">
                       <Grid container>
                           
                      
                           <Grid item xs={12}>
                           
                               <ListItemText  primary="Hey, Iam Good! What about you ?"></ListItemText>
                           </Grid>
                           
                           <Grid item xs={12}>
                               <ListItemText  secondary="SuppliersStore"></ListItemText>
                           </Grid>
                           
                       </Grid>
                   </ListItem>
                   <ListItem key="2">
                       <Grid container>
                           <Grid item xs={12}>
                               <ListItemText  primary="Cool. i am good, let's catch up!"></ListItemText>
                           </Grid>
                           <Grid item xs={12}>
                               <ListItemText  secondary="SuppliersStore"></ListItemText>
                           </Grid>
                       </Grid>
                   </ListItem>
               </List>
               <Divider />
               <Grid container style={{padding: '20px'}}>
                   <Grid item xs={11}>
                       
                       <CssTextField id="outlined-basic-email" label="Escriba su mensaje" fullWidth />
                   </Grid>
                   <Grid xs={1} >
                       <Fab className={classes.buttonEnviar} color="primary" aria-label="add"><SendIcon /></Fab>
                   </Grid>
               </Grid>
           </Grid>
       </Grid>
						</Container>
            {this.props.footer}
					</main>

         
		 </div>

    );
  }
}


export default connect(mapStateToProps)(ChatRoom)