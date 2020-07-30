import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import Unauthorized from './Unauthorized'

const theme = createMuiTheme({
	palette: {
		primary: orange,
		secondary: {
			main: '#ffba00',
		},
	},
});

const useStyles = makeStyles((theme) => ({
  paper: {
    //marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    // margin: theme.spacing(1),
    //fontSize: '300px',
    width: '640px',
    height: '340px',
  },
  
  
  codeError:{
    fontSize:'120px',
    color:'#d93211',
  },
  message:{
    fontSize:'30px'
  }
  
  
}));

export function NoAutorizado() {

  const classes = useStyles(theme);
  
  return <div>
    <Unauthorized 
      classes={ classes }
     
    />
  </div>;

}


