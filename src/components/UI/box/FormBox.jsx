import React from 'react';
import Box from '@material-ui/core/Box';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const colorTheme = createTheme({
  overrides: {
    MuiBox: {
      root: {
        width: "100%",
      },
    },
  },
});

export default function CustomFormBox(props) {
  return (
    <MuiThemeProvider theme={colorTheme}>
      <Box component="form" {...props} style={{width: "100%"}} />
    </MuiThemeProvider>
  );
}
