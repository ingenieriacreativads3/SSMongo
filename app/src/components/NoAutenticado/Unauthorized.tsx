import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import logo from "./../Login/img/logo.png";
import Typography from '@material-ui/core/Typography'
import { ListSubheader } from '@material-ui/core';

class Unauthorized extends React.Component<{
  classes: any,
  
}, {}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  

  render(){

    const classes = this.props.classes

    return(
      <Container component="main" maxWidth="lg">
       
        <div className={classes.paper}>
        <Typography className={classes.codeError} variant="button" display="block" gutterBottom>
        401
      </Typography>
      <ListSubheader >
          <Typography className={classes.message} display="block" gutterBottom >
              Su empresa no ha sido autenticada
              </Typography>
              </ListSubheader>
              <ListSubheader >
          <Typography className={classes.message} display="block" gutterBottom >
               Se detectaron irregularides en el proceso de validación
              </Typography>
              </ListSubheader>
          <Avatar   src={logo} className={classes.avatar}  />
          
        </div>    
      </Container>
    );
  }
}

export default Unauthorized