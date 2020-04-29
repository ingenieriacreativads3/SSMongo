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

//import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'




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
    idEmpresa: store.login.data.empresa._id
  };
}

class Login extends React.Component {

	props: any
	static propTypes: any
	static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
/*     this.onSubmit = this.onSubmit.bind(this);
    this.getNombre = this.getNombre.bind(this);
    this.getPrecio = this.getPrecio.bind(this);
    this.getFoto = this.getFoto.bind(this);
    this.getDescripcion = this.getDescripcion.bind(this);
    this.getCaracteristicas = this.getCaracteristicas.bind(this);
    this.getUnidadDeMedida = this.getUnidadDeMedida.bind(this);
    this.getMostrarPrecio = this.getMostrarPrecio.bind(this); */
    this.state = {
      Item: {
        nombre: '',
        precio: '',
        foto: '',
        descripcion: '',
        caracteristicas: '',
        unidadDeMedida: '',
        mostrarPrecio: false
      }
    };
  }
/* 
  onSubmit() {
    this.props.dispatch(ItemAction.nuevo(this.props.idEmpresa, this.state.Item));
  }

  getNombre(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        nombre: e.target.value
      }
    });

  }

  getPrecio(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        precio: e.target.value
      }
    });

  }

  getFoto(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        foto: e.target.value
      }
    });

  }

  getDescripcion(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        descripcion: e.target.value
      }
    });

  }

  getCaracteristicas(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        caracteristicas: e.target.value
      }
    });

  }

  getUnidadDeMedida(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        unidadDeMedida: e.target.value
      }
    });

  }

  getMostrarPrecio(e) {

    this.setState({
      Item: {
        ...this.state.Item,
        mostrarPrecio: e.target.value
      }
    });

  } */

  

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
             
            }}
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
             
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" style ={{
                color: "#d93211",
              }} />}
            label="Recordarme"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
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
              <Link href="/registrar" variant="body2" className={classes.Link}>
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
