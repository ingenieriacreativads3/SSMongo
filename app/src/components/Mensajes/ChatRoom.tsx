import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Container, Grid,ListItem, ListItemIcon, ListItemText, Paper, List, Divider, TextField, CssBaseline, Avatar} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';
import { FixedSizeList } from 'react-window';



//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'



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
 
  

  renderRow(props:any) {
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