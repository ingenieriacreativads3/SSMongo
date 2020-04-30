import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

export default function withRoot(Component: any) {
  function WithRoot(props: any) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  }

  return WithRoot;
}
