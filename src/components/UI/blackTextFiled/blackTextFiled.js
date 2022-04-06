import React from 'react';
import { TextField, Icon } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import InputAdornment from '@material-ui/core/InputAdornment';
const colorTheme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        marginTop: 10,
        padding: 8,
        position: 'relative',
        background: 'black',
        borderBottom: '2px solid black',
        borderRadius: 10,
        color: 'white',

        '& $notchedOutline': {
          borderColor: 'white',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: 'white',
        },
        '&$focused $notchedOutline': {
          borderColor: 'white',
        },
      },
    },
  },
});

export default function CustomTextfield(props) {
  const { IconName, adornment } = props;
  return (
    <MuiThemeProvider theme={colorTheme}>
      <TextField
        InputProps={
          IconName && adornment
            ? {
                startAdornment: (
                  <InputAdornment>
                    <Icon>{IconName}</Icon>
                  </InputAdornment>
                ),
              }
            : {
                endAdornment: (
                  <InputAdornment>
                    <Icon>{IconName}</Icon>
                  </InputAdornment>
                ),
              }
        }
        {...props}
      />
    </MuiThemeProvider>
  );
}
