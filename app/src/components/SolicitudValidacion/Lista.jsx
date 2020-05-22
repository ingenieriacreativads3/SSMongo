import React from 'react'
import AppBar from '../AppBar'
import MenuLateral from '../Drawer'

import MaterialTable from 'material-table'
import { CssBaseline } from '@material-ui/core';

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

class Lista extends React.Component {

  constructor(props) {
		super(props);
|    this.state = {
			columns: [
				{ title: '_id', field: '_id', type: 'string' },
				{ title: 'empresa_id', field: 'empresa_id', type: 'string' },
				{ title: 'updated_at', field: 'updated_at', type: 'string' },
				{ title: 'created_at', field: 'created_at', type: 'string' },
				
				{
					title: 'estado',
					field: 'estado',
					lookup: { 'Resuelta': 'Resuelta', 'No resuelta': 'No Resuelta' },
				},
				
			]
		};

	}

  render(){

		const classes = this.props.classes

    return(
			<div className={classes.root} style={{marginTop: '10%'}}>

        <CssBaseline />
        <AppBar></AppBar>
				<MenuLateral></MenuLateral>
				<TableContainer className={classes.container}>

					<MaterialTable
						icons={tableIcons}
						title="Solicitudes de Validación"
						columns={this.state.columns}
						data={this.props.data}
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
								}, 600);
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
				</TableContainer>
			</div>
    );
  }
}

export default Lista
