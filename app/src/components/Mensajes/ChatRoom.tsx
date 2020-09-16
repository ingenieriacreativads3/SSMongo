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
import { FixedSizeList } from 'react-window';


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
   
  }

  renderRow(props:any) {
    const { index, style } = props;
  
    return (
      <ListItem button key="Alice">
        <ListItemIcon>
            <Avatar alt="Alice" src="https://material-ui.com/static/images/avatar/3.jpg" />
        </ListItemIcon>
        <ListItemText primary="Alice">Alice</ListItemText>
    </ListItem>
    );
  }

  // renderMessage() {
  //   //const { index, style } = props;
  //  let msj = this.props.mensajes;
   
  //     return <div> <ListItem>
  //                 <Grid container>
                      
                
  //                     <Grid item xs={12}>
                      
  //                         <ListItemText  primary={msj}></ListItemText>
  //                     </Grid>
                      
  //                     <Grid item xs={12}>
  //                         <ListItemText  secondary="SuppliersStore"></ListItemText>
  //                     </Grid>
                      
  //                 </Grid>
  //             </ListItem>    
  //         <Divider></Divider></div>
    
  
  // }

 
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
            <Grid item xs={3} className={classes.borderRight500}>
               
                <Grid item xs={12} style={{padding: '10px'}}>
                    <TextField 
                    id="outlined-basic-email" 
                    label="Buscar" 
                    variant="outlined" 
                    fullWidth
                    InputLabelProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    InputProps={{
                      classes: {
                        root: classes.cssOutlinedInput,
                        focused: classes.cssFocused,
                        notchedOutline: classes.notchedOutline,
                      },
                    }} />
                </Grid>
                <Divider />
                <FixedSizeList height={525} width={310} itemSize={50} itemCount={20}>
                {this.renderRow}
                </FixedSizeList>
            </Grid>
            <Grid item xs={9}>
                <List className={classes.messageArea} > 
              
                 {/* {this.renderMessage} */}
                  {this.props.mensajes.map((msj:any)=>{
                    return <div> <ListItem>
                                <Grid container>
                                    
                              
                                    <Grid item xs={12}>
                                    
                                        <ListItemText  primary={msj}></ListItemText>
                                    </Grid>
                                    
                                    <Grid item xs={12}>
                                        <ListItemText  secondary="SuppliersStore"></ListItemText>
                                    </Grid>
                                    
                                </Grid>
                            </ListItem>    
                        <Divider></Divider></div>
                  })} 
                </List>
                
                <Grid container style={{padding: '20px', width:'960px'}}>
                <Grid item xs={11}>
                       <CssTextField id="outlined-basic-email" label="Escriba su mensaje" fullWidth value={this.props.nuevoMensaje} onChange={this.props.getMessage} />
                   </Grid>
                   <Grid xs={1} >
                       <Fab className={classes.buttonEnviar} color="primary" aria-label="add"><SendIcon onClick={this.props.sendMessage}  /></Fab>
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