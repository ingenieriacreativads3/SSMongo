import React from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';
import { withStyles } from '@material-ui/core/styles';

import {  Divider, Grid,Paper,Box, Typography, CssBaseline,FormHelperText, TextField, IconButton, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox} from '@material-ui/core';
import Link from '@material-ui/core/Link';


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




class Nuevo extends React.Component <{
  classes: any,
  getNombre: any,
  getPrecio: any,
  getMagnitud: any,
  getCaracteristicas: any,
  getDescripcion: any,
  getMostrarPrecio: any,
  getFoto: any,
  save: any,
  unidadesDeMedida: any[],
  pathImage: string
}, {
  item: {
    mostrarPrecio: boolean
  }
}> {

  props: any
	static propTypes: any
  static defaultProps: any

  // eslint-disable-next-line no-useless-constructor
  constructor(props: any) {
    super(props);
    this.getMostrarPrecio = this.getMostrarPrecio.bind(this);
    this.state = {
      item: {
        mostrarPrecio: false
      }
    };
  }

  getMostrarPrecio() {

    let mostrarPrecio: boolean = false

    if(!this.state.item.mostrarPrecio) mostrarPrecio = true

    this.setState({
      item: {
        mostrarPrecio: mostrarPrecio
      }
    })

    this.props.getMostrarPrecio(mostrarPrecio)

  }

  render(){

		const classes = this.props.classes
	    console.log(this.props.unidadSeleccionada)
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
                {"Nuevo Item"}</Box>
              </Typography>
<Divider className={classes.divider} />
          <FormControl>
          <form id="formItem" ref={this.props.nuevoItemRef}>
        <Grid container spacing={3} alignContent="center">
          <Grid item xs={12} sm={6}>
          <CssTextField 
            className={classes.margin}
            id="Nombre"
            label="Nombre"
            onChange={ this.props.getNombre }
            required={true}
            error={this.props.errors.Nombre != null ? true : false}
            helperText={this.props.errors.Nombre != null ? this.props.errors.Nombre : ""}
            fullWidth
          />
          </Grid>

          <Grid item xs={12} sm={6}>
          <CssTextField
          className={classes.margin}
          id="Precio"
          label="Precio"
          type="number"
          onChange={ this.props.getPrecio }
          required={true}
          error={this.props.errors.Precio != null ? true : false}
          helperText={this.props.errors.Precio != null ? this.props.errors.Precio : ""}
          inputProps={{min:1}}
          fullWidth

        />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl className={classes.formControl}
              id="Unidad" 
              error={!this.props.unidadSeleccionada}
              fullWidth
            >
            <InputLabel id="Unidad" className={classes.inputLabel}>Unidad</InputLabel>
              <Select
            
                labelId="Unidad"
                id="Unidad"
                // value={unidadDeMedida}
                onChange={this.props.getMagnitud}
                fullWidth
                
              > 
              
                {this.props.unidadesDeMedida.map((unidadDeMedida: {
                  _id: string,
                  nombre: string
                }) => {
                  return <MenuItem value={unidadDeMedida._id}>{unidadDeMedida.nombre}</MenuItem>
                })}
              </Select>
              {!this.props.unidadSeleccionada && <FormHelperText error={true} >Selecciona una unidad</FormHelperText>}
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
                checked={ this.state.item.mostrarPrecio }
                onChange={ this.getMostrarPrecio }
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
                onChange={ this.props.getDescripcion }
                multiline
                rows={4}
                fullWidth

              />
              {/* <TextareaAutosize
                style={{borderRadius:7}}
                aria-label="minimum height"
                rowsMin={10}
                className={classes.textTarea}
                placeholder="Descripcion"
                onChange={ this.props.getDescripcion }
                id="Descripcion"
              /> */}
            </Grid>
            <Grid item xs={12} sm={12}>
            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" multiple   onChange = { this.props.getFoto } />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton}>
              <PhotoCamera />
            </IconButton>
          </label>
              {/* <label htmlFor="raised-button-file">
                <Button variant="contained" component="label" className={classes.botonIcono}>
                  Imagen
                  <IconButton color="primary" aria-label="upload picture" component="span" className={classes.iconButton}>
                    <PhotoCamera />
                    <Input
                      inputProps={{ multiple: true }} 
                      className={classes.input}
                      style={{ display: 'none' }}
                      id="Imagen"
                      type="file"
                      onChange = { this.props.getFoto }
                    />
                  </IconButton>
                </Button>
              </label>  */}
            </Grid>
            <Grid item xs={12} sm={12}>
              <img className={classes.previsualizacion} alt={this.props.pathImage}  src={this.props.pathImage} ></img>
              {/* <Avatar className={classes.previsualizacion} alt={this.props.pathImage}  src={this.props.pathImage} /> */}
            </Grid>
           
          
        </Grid>
        </form>
            <div style={{ width: "100%",  marginTop:"1rem" }}>
              <Box display="flex" flexDirection="row-reverse" p={1} m={1} >
              <Button
                variant="contained"
                color='primary'
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={ this.props.save }
                disabled={ !this.props.formValido   }
              >
                Guardar
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


export default Nuevo
