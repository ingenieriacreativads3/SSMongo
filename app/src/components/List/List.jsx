import React from 'react'
import AppBar from '../AppBar'
import { AntSwitch } from './index'

import MaterialTable from 'material-table'
import { Container, Grid, CssBaseline, Box, Typography } from '@material-ui/core';
import MaterialLink from '@material-ui/core/Link';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import VisibilityIcon from '@material-ui/icons/Visibility';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  VisibilityIcon: forwardRef((props, ref) => <VisibilityIcon {...props} ref={ref} />),
};

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

class List extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getIcons = this.getIcons.bind(this);
    this.layout = this.layout.bind(this);
    this.state = {
		};

  }

  handleChange = (event) => {
    this.props.getChecked(event.target.checked)
  };
  
  layout() {

    if(this.props.isCatalog !== undefined) {
      if(this.props.isCatalog) {
        return <div className={this.props.classes.search} >
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Tarjetas</Grid>
              <Grid item>
                <AntSwitch checked={this.props.checked} onChange={this.handleChange} name="checked" />
              </Grid>
              <Grid item>Tabla</Grid>
            </Grid>
          </Typography>
        </div>
      } else {
        return <div></div>
      }
    } else {
      return <div></div>
    }
    
  }

  getIcons() {

    let icons = [{
      icon: Edit,
      tooltip: 'Editar',
      onClick: (event, rowData) => this.props.action(rowData)
    }]

    if(this.props.title === 'Catálogo') {
      icons.push({
        icon: DeleteOutline,
        tooltip: 'Eliminar',
        onClick: (event, rowData) => this.props.delete(rowData)
      })
    }

    return icons
  }

  render(){

    const classes = this.props.classes

    // console.log(this.props.data)

    return(
      <div>
        <div className={classes.root} >

          <CssBaseline />
         {this.props.appBar}
          {this.props.drawer}
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />

            {this.layout()}

            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item lg={12}>
                  <MaterialTable
                    icons={tableIcons}
                    title={this.props.title}
                    columns={this.props.columns}
                    data={this.props.data}
                    actions={this.getIcons()}
                  />
                </Grid>
              </Grid>
              {/* <Box pt={4}>
                <Copyright />
              </Box> */}
            
            </Container>
            {this.props.footer}
          </main>
          
        </div>

      </div>
    );
  }
}

export default List