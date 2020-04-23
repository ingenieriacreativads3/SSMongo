import React from 'react';
import { Link } from "react-router-dom";
import { Input } from '@material-ui/core';
import AppBar from './../../components/AppBar'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


import '../../components/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '../../components/bower_components/font-awesome/css/font-awesome.min.css';
import '../../components/bower_components/Ionicons/css/ionicons.min.css';
import '../../components/dist/css/AdminLTE.min.css';
import '../../components/dist/css/skins/skin-blue.min.css';
import '../../components/dist/css/skins/_all-skins.min.css';

import '../Home/shop/css/linearicons.css'
import '../Home/shop/css/owl.carousel.css';
import '../Home/shop/css/font-awesome.min.css';
import '../Home/shop/css/themify-icons.css';
import '../Home/shop/css/nice-select.css';
import '../Home/shop/css/nouislider.min.css';
import '../Home/shop/css/bootstrap.css';
import '../Home/shop/css/main.css'; 

import * as ItemAction from "../../store/actions/ItemAction";
import { connect } from 'react-redux'


import { createMuiTheme } from '@material-ui/core/styles';


import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: {
      main: '#ffba00',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function mapStateToProps(store) {
  return {
    Item: store.Item,
    idEmpresa: store.Login.data.empresa._id
  };
}

class EditarItem extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.getNombre = this.getNombre.bind(this);
    this.getPrecio = this.getPrecio.bind(this);
    this.getFoto = this.getFoto.bind(this);
    this.getDescripcion = this.getDescripcion.bind(this);
    this.getCaracteristicas = this.getCaracteristicas.bind(this);
    this.getUnidadDeMedida = this.getUnidadDeMedida.bind(this);
    this.getMostrarPrecio = this.getMostrarPrecio.bind(this);
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

  }

  render(){

    return( 

        <div>
          
          <AppBar></AppBar>

          <div class="content-wrapper">


          
                <div class="col-md-5">
                  <div class="box box-warning">
                    <div class="blog_right_sidebar">
                        <aside class="single_sidebar_widget search_widget">
                           
                            
                            <div class="br"></div>
                        </aside>
                        <aside class="single_sidebar_widget author_widget">

                        <div class="box-header with-border">
                        <img class="author_img rounded-circle" src="img/blog/author.png" alt=""></img>

                      <h3 class="box-title">Imagen</h3>
                      <p>Selecciona la foto del item</p>
                        </div>
                           
                         
                            
                            <div class="br"></div>
                            <input type="file" id="exampleInputFile"></input>
                        </aside>
                        <aside class="single_sidebar_widget popular_post_widget">
                          
                        <div class="box-footer"> 
                          <div class="col-md-12 text-right">
                              <a class="primary-btn submit_btn" href="#">Actualizar</a>
                            </div>
                            </div>
                        </aside>
                       </div>
                    </div>
                </div>


                <div class="col-md-7">
                <div class="box box-warning">
                <div class="box-header with-border">

                <h3 class="box-title">Editar Item</h3>

                </div>
                     
                        <form>
                        <div class="form-group form-inline">
                                <div class="form-group col-lg-6 col-md-6 name">
                                <Input placeholder="Nombre item" inputProps={{ 'aria-label': 'description' }} color='primary' onChange={ this.getNombre }/>
                                    
                                </div>
                                <div class="form-group col-lg-6 col-md-6 name">
                                <Input type="number" placeholder="Precio" inputProps={{ 'aria-label': 'description' }} color='primary' onChange={ this.getPrecio }/>
                                </div>
                            </div>

                            <div class="form-group form-inline">
                                <div class="col-md-6 form-group p_star">
                                <FormControl>
                                  <InputLabel id="demo-simple-select-label">Unidad</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={unidadDeMedida}
                                    onChange={this.getUnidadDeMedida}
                                  >
                                    <MenuItem value={1}>Kilogramos</MenuItem>
                                    <MenuItem value={2}>Metros</MenuItem>
                                    <MenuItem value={3}>Litros</MenuItem>
                                    <MenuItem value={4}>Horas</MenuItem>
                                  </Select>
                                </FormControl>
                                          
                                </div>
                                <div class="col-md-6 form-group">
                          
                                <FormControlLabel
                                control={
                                  <Checkbox
                                    checked = "false"
                                    onChange={this.getMostrarPrecio}
                                    color="primary"
                                  />
                                }
                                label="Mostrar Precio"
                              />
                                
                                 </div>

                                
                            </div>

                            <div class="form-group">
                            <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Caracteristicas" onChange={ this.getCaracteristicas} />
                            </div>

                            <div class="form-group">
                            <TextareaAutosize aria-label="minimum height" rowsMin={5} placeholder="Descripcion" onChange={ this.getDescripcion} />
                            </div>

                            <div class="box-footer">
                            <div class="col-md-12 text-right">
                            <a href="#" class="primary-btn submit_btn">Actualizar Item</a>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>



            </div>
       
        </div>


    );

  }
}

export default connect(mapStateToProps)(EditarItem)

