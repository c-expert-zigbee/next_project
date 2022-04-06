import React from 'react';
import { TextField, Icon } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import InputAdornment from '@material-ui/core/InputAdornment';
const colorTheme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        marginTop: -15,
        padding: 0,
        position: 'relative',
        background: 'rgba(196, 196, 196, 0.29)',
        borderRadius: 10,
        '& $notchedOutline': {
          borderColor: 'rgba(196, 196, 196, 0.29)',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: 'rgba(196, 196, 196, 0.29)',
        },
        '&$focused $notchedOutline': {
          borderColor: 'rgba(196, 196, 196, 0.29)',
          borderWidth: 1,
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
