import React from 'react'
import AppBar from '../AppBar'
import MenuLateral from '../Drawer'
import { connect } from 'react-redux'


import MaterialTable from 'material-table'
import { CssBaseline, Container, Grid } from '@material-ui/core';

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
    Item: store.Item,
    //idEmpresa: store.login.data.empresa._id
  };
}

class ListaCompras extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
			
    };
  }

  render(){

		const classes = this.props.classes

    return(
			<div className={classes.root}>

        <CssBaseline />
        <AppBar></AppBar>
		<MenuLateral></MenuLateral>
		<main className={classes.content}>
          <div className={classes.appBarSpacer} />
		  <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item lg={12}>
					<MaterialTable
						icons={tableIcons}
						title={this.props.title}
						columns={this.state.columns}
						data={this.state.data}
						actions={[
							{
							  icon: VisibilityIcon,
							  tooltip: 'Ver más',
							  onClick: (event, rowData) => this.props.action(rowData)
							}
						  ]}
					/>
					</Grid>
				</Grid>
				</Container>
				</main>
			</div>
    );
  }
}



export default connect(mapStateToProps)(ListaCompras)
