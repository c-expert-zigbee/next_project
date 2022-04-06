import React from 'react';
import { TextField, Icon } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import InputAdornment from '@material-ui/core/InputAdornment';
const colorTheme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        backgroundColor: '#EDF1F2',
        '& $notchedOutline': {
          borderColor: '#EDF1F2',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: '#EDF1F2',
        },
        '&$focused $notchedOutline': {
          borderColor: 'white',
          borderWidth: 1,
        },
      },
    },
  },
});

export default function CustomTextfieldpassword(props) {
  const { IconName, adornment } = props;
  const [type, setType] = React.useState(true);
  return (
    <MuiThemeProvider theme={colorTheme}>
      <TextField
        type={type ? 'password' : 'text'}
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
                    <Icon
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setType(!type);
                      }}
                    >
                      {type ? 'visibility' : 'visibility_off'}
                    </Icon>
                  </InputAdornment>
                ),
              }
        }
        {...props}
      />
    </MuiThemeProvider>
  );
}
