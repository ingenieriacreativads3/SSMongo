import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import logo from "./img/logo.png";
import * as loginAction from './../../store/actions/login'

//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'

function mapStateToProps(store: {}) {
  return {
    store: store
  };
}

class Login extends React.Component<{}, {
  user: string,
  pass: string
}> {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.ingresar = this.ingresar.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getPass = this.getPass.bind(this);
    this.state = {
      user: '',
      pass: ''
    };
  }

  getUser(e: any) {

    this.setState({
      user: e.target.value
    })

  }

  getPass(e: any) {

    this.setState({
      pass: e.target.value
    })

  }

  ingresar() {
    this.props.dispatch(loginAction.ingresar(this.state.user, this.state.pass))
    console.log(this.props.store)
  }

  render(){

		const classes = this.props.classes
		

    return(
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar   src={logo} className={classes.avatar}  >
            
          </Avatar>
        
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.getUser}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.getPass}
            />
            <FormControlLabel
              control={<Checkbox value="remember" style ={{
                  color: "#ff6c00",
                }} />}
              label="Recordarme"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={this.ingresar}
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"className={classes.Link}>
                  Olvidé mi contraseña
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" className={classes.Link}>
                  {"No soy miembro. Registrarme"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      
      </Container>
     
    );
  }
}



export default connect(mapStateToProps)(Login)
