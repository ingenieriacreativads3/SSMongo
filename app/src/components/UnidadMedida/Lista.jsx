import React from 'react'
import AppBar from '../AppBar'
import { connect } from 'react-redux'

import MenuLateral from '../Drawer'
import MaterialTable from 'material-table'
import {Container, Grid, Box, Typography, CssBaseline } from '@material-ui/core';
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
import TableContainer from '@material-ui/core/TableContainer';


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
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

function mapStateToProps(store) {
  return {
    // Item: store.Item,
    // idEmpresa: store.login.data.empresa._id
  };
}


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

class Lista extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
			columns: [
				{ title: 'Nº', field: 'nro' , type: 'numeric'},
				{ title: 'Fecha', field: 'fecha', type: 'date' },
				{ title: 'Empresa', field: 'empresa' },
				{ title: 'Unidad', field: 'unidad' },
				{
					title: 'Estado',
					field: 'estado',
					lookup: { 1: 'No resuelta', 2: 'Resuelta' },
				},
			],
			data: [
				{ nro: '1', fecha: '02/03/2020', empresa: 'Symsa',  unidad:'Metro cuadrado', estado: 1 },
				{ nro: '2', fecha: '07/04/2020', empresa: 'CorpuSoft',unidad:'Metro cubico', estado: 2},
			],
    };
  }

  render(){

		const classes = this.props.classes

    return(
			<div className={classes.root}>

        <CssBaseline />
       {this.props.appBar}
		<MenuLateral />
		<main className={classes.content}>
          <div className={classes.appBarSpacer} />
		<Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item lg={12}>
				<MaterialTable
					icons={tableIcons}
					title="Solicitudes Unidad de Medida"
					columns={this.state.columns}
					data={this.state.data}
					editable={{
						onRowAdd: (newData) =>
							new Promise((resolve) => {
								setTimeout(() => {
									resolve();
									this.setState((prevState) => {
										const data = [...prevState.data];
										data.push(newData);
										return { ...prevState, data };
									});
								}, 800);
							}),
						onRowUpdate: (newData, oldData) =>
							new Promise((resolve) => {
								setTimeout(() => {
									resolve();
									if (oldData) {
										this.setState((prevState) => {
											const data = [...prevState.data];
											data[data.indexOf(oldData)] = newData;
											return { ...prevState, data };
										});
									}
								}, 600);
							}),
						onRowDelete: (oldData) =>
							new Promise((resolve) => {
								setTimeout(() => {
									resolve();
									this.setState((prevState) => {
										const data = [...prevState.data];
										data.splice(data.indexOf(oldData), 1);
										return { ...prevState, data };
									});
								}, 600);
							}),
					}}
				/>
				</Grid>
            </Grid>
           {/*  <Box pt={4}>
              <Copyright />
            </Box> */}
		  </Container>
		  {this.props.footer}
		  </main>
				
			</div>
	);
				
  }
}



export default connect(mapStateToProps)(Lista)
