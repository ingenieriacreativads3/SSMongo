import React from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core/styles';

import { Divider, Paper, Grid, Box, Typography, CssBaseline,  TextField, IconButton, Button, FormHelperText,  FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import * as errorActions from './../../store/actions/error'
import * as itemActions from './../../store/actions/item'
import * as dialogActions from './../../store/actions/dialog'

import store from './../../store/index'


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
  errorReducer: any,
  itemReducer: any,
}) {
  return {
    errorReducer: store.errorReducer,
    itemReducer: store.itemReducer,
  };
}

class Editar extends React.Component <{}, {
  formValid:boolean,
  unidadSeleccionada: boolean,
  item: {
    _id: string,
    nombre: string,
    precio: string,
    descripcion: string,
    unidad_de_medida: {
      _id: string,
      nombre: string,
    },
    foto: string[],
    mostrarPrecio: boolean
   
  }
}> {

	props: any
	static propTypes: any
  static defaultProps: any
  
  private editItemRef: React.RefObject<HTMLFormElement>;

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.editItemRef = React.createRef();
    this.changeNombre = this.changeNombre.bind(this);
    this.changePrecio = this.changePrecio.bind(this);
    this.changeDescripcion = this.changeDescripcion.bind(this);
    this.changeUnidadDeMedida = this.changeUnidadDeMedida.bind(this);
    this.changeMostrarPrecio = this.changeMostrarPrecio.bind(this);
    this.update = this.update.bind(this);
    this.state = {
      formValid:true,
      unidadSeleccionada:true,
      item: {
        _id: '',
        nombre: '',
        precio: '',
        descripcion: '',
        unidad_de_medida: {
          _id: '',
          nombre: ''
        },
        foto: [],
        mostrarPrecio: false,
        
      }
      
    };
  }

  componentWillMount() {
    this.props.dispatch(itemActions.getItem(this.props.match.params.id))
  }

  componentDidUpdate() {

    console.log(this.props.itemReducer.data)
    if(
      this.props.itemReducer.fetched &&
      !this.props.itemReducer.fetching &&
      this.state.item._id === ''
      ) {
      console.log('entra')
      this.setState({
        item: this.props.itemReducer?.data?.item || {}
      })
    }

  }

  // componentWillReceiveProps() {

  //   if(this.props.item !== undefined && this.state.item._id === ''){
  //      this.setState({ item: this.props.item})
  //   }
  //   console.log(this.props.item)

  // }

  changeNombre(e: any) {
    console.log(e.target.value);
    this.setState({ item: { ...this.state.item, nombre: e.target.value } })
    

    if(!(e.target.value === undefined && e.target.value === null && e.target.value === '')) {
      this.props.dispatch(errorActions.editErrors(e.target.id))
    }
    //this.props.getNombre(e.target.value)
  }

  changePrecio(e: any) {
    this.setState({ item: { ...this.state.item, precio: e.target.value } })
   
    
    if(!(e.target.value === undefined && e.target.value === null && e.target.value === '')) {
      this.props.dispatch(errorActions.editErrors(e.target.id))
    }

    // this.props.getPrecio(e.target.value)
  }

  changeDescripcion(e: any) {
    this.setState({ item: { ...this.state.item, descripcion: e.target.value } })
    
   
  }

  changeUnidadDeMedida(e: any) {

    this.props.unidadesDeMedida.map((unidadDeMedida: {
      _id: string,
      nombre: string
    }) => {
      if(e.target.value === unidadDeMedida._id) {
        this.setState({ 
          item: { 
            ...this.state.item, 
            unidad_de_medida: {
              _id: unidadDeMedida._id,
              nombre: unidadDeMedida.nombre
            }
          }
        })
         this.setState({unidadSeleccionada:true});
         
         this.setState({formValid:true});
        // this.props.getMagnitud(unidadDeMedida._id)
      }

    
     
    })

  }

  changeMostrarPrecio() {

    let mostrarPrecio: boolean = false

    if(!this.state.item.mostrarPrecio) mostrarPrecio = true

    this.setState({ item: { ...this.state.item, mostrarPrecio: mostrarPrecio } })

  }

  validacion=() => {
    let formIsValid = true;
    let errores=[];
    let ref: any = this.editItemRef.current
    //let elements:any = document.getElementById("formEditItem");
    console.log(ref);
    for (let i = 0, element; element = ref[i]; i++) {

       if(!element.checkValidity())
      {

        errores[element.id]=element.validationMessage;
        errores.length = errores.length + 1;
        formIsValid = false;
      
        this.setState({formValid:formIsValid})
        
      }
      
    }

    if(this.state.item.unidad_de_medida._id === "" || this.state.item.unidad_de_medida._id === undefined)
    {
      this.setState({unidadSeleccionada:false});
      formIsValid = false;
      
      this.setState({formValid:formIsValid})
    }

     this.props.dispatch(errorActions.setError(errores)); 
     return formIsValid;
  }

  update(
    _id: string,
    nombre: string,
    precio: string,
    idMagnitud: string,
    descripcion: string,
    mostrarPrecio: boolean,
    foto: string[]
  ) {

    if(this.validacion()){

   
    this.props.dispatch(itemActions.updateItem(
      _id,
      nombre,
      precio,
      descripcion,
      idMagnitud,
      mostrarPrecio,
      foto
    ))

    this.props.dispatch(dialogActions.openOneButton())

    }
 }

  render(){

    const classes = this.props.classes
    
    let url: string = ''

    if (this.state?.item?.foto !== undefined) {
      url = 'http://localhost:8000/' + this.state?.item?.foto[0] || ''
    }
  

    return(

      <div className={classes.root}>
        <CssBaseline />
        {this.props.appBar}
        {this.props.drawer}
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"

        >
        <Paper style={{ padding: 20, margin:50}}>
        <Typography component="div" >
                <Box pt={1} pb={1} paddingLeft='10px' color="#ffba00"  fontStyle='italic'  fontWeight="fontWeightBold" fontSize={22}>
                {this.props.title}</Box>
              </Typography>
<Divider className={classes.divider} />
          <FormControl>
          <form id="formEditItem" ref={ this.editItemRef }>
        <Grid container spacing={3} alignContent="center">
          <Grid item xs={12} sm={6}>
          <CssTextField 
            className={classes.margin}
            id="Nombre"
            label="Nombre"
            value={ this.state?.item?.nombre || '' }
            onChange={ this.changeNombre }
            required={true}
            error={this.props.errorReducer.errors.Nombre != null ? true : false}
            helperText={this.props.errorReducer.errors.Nombre != null ? this.props.errorReducer.errors.Nombre : ""}
            fullWidth
          
          />
          </Grid>

          <Grid item xs={12} sm={6}>
          <CssTextField
            className={classes.margin}
            id="Precio"
            label="Precio"
            type="number"
            value={ this.state?.item?.precio || '' }
            onChange={ this.changePrecio }
            required={true}
            error={this.props.errorReducer.errors.Precio != null ? true : false}
            helperText={this.props.errorReducer.errors.Precio != null ? this.props.errorReducer.errors.Precio : ""}
            inputProps={{min:1}}
            fullWidth

          />
          </Grid>
          <Grid item xs={12} sm={4}>
          <FormControl fullWidth className={classes.formControl}  error={!this.state.unidadSeleccionada} >
            <InputLabel id="demo-simple-select-label" className={classes.inputLabel}>Unidad</InputLabel>
              <Select
            
                labelId="demo-simple-select-label"
                id="Unidad"
                value={ this.state?.item?.unidad_de_medida?._id || '' }
                onChange={ this.changeUnidadDeMedida }
              >
                {this.props.unidadesDeMedida.map((unidadDeMedida: {
                  _id: string,
                  nombre: string
                }) => {
                  return <MenuItem value={unidadDeMedida._id}>{unidadDeMedida.nombre}</MenuItem>
                })}
              </Select>
               {!this.state.unidadSeleccionada && <FormHelperText error={true} >Selecciona una unidad</FormHelperText>} 
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={4}>
          <Link href="/unidadMedida/nuevo" style={{textDecoration: 'none'}} >
            <Button variant="outlined" className={classes.Boton}>
              Solicitar Nueva Unidad
            </Button>
          </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
          <FormControlLabel className={classes.Checkbox}
            control={
              <Checkbox
                checked={ this.state?.item?.mostrarPrecio || false }
                onChange={ this.changeMostrarPrecio }
                style ={{
                  color: "#d93211",
                }}
              />
            }
            label="Mostrar Precio"
          />
          </Grid>

          <Grid item xs={12} sm={12}>
            <CssTextField 
                className={classes.margin}
                id="Descripcion"
                label="Descripcion"
                onChange={ this.changeDescripcion }
                multiline
                rows={4}
                fullWidth

              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <input accept="image/*" className={classes.input} id="icon-button-file" type="file" multiple   onChange = { this.props.getFoto } />
            <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton}>
              <PhotoCamera />
            </IconButton>
          </label>
            </Grid>
            <Grid item xs={12} sm={12}>
              <img src={ url } className={classes.previsualizacion} ></img>
            </Grid>
           
          
        </Grid>
        </form>
            <div style={{ width: "100%",  marginTop:"1rem" }}>
              <Box display="flex" flexDirection="row-reverse" p={1} m={1} >
              <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                disabled={ !this.state.formValid && !this.state.unidadSeleccionada }
                onClick={() => this.update(
                  this.state.item._id,
                  this.state.item.nombre,
                  this.state.item.precio,
                  this.state.item.unidad_de_medida._id,
                  this.state.item.descripcion,
                  this.state.item.mostrarPrecio,
                  this.state.item.foto
                )} 
              >
                Actualizar
              </Button>
              </Box>
              
            
            </div>
          </FormControl>
        </Paper>
        </Grid>
          {this.props.footer}
        </main>
		  </div>

    );
  }
}

export default connect(mapStateToProps)(Editar)
