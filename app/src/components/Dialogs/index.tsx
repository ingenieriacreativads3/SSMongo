import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

import DialogOneButton from './OneButton'

const theme = createMuiTheme({
	palette: {
		primary: orange,
		secondary: {
			main: '#ffba00',
		},
	},
});

const useStyles = makeStyles((theme) => ({
  buttonDialog:{
    color:'#ff6c00',
  },
}));

export function OneButton(props: {
	title: string,
	text: string,
	labelButtonRight: string,
	functionRight: any
}) {

  const classes = useStyles(theme);
  
  return <div>
    <DialogOneButton 
			classes={ classes }
			title={ props.title }
			text={ props.text }
			labelButtonRight={ props.labelButtonRight }
			functionRight={ props.functionRight }
		/>
  </div>;

}