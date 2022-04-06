import React from 'react';
import { TextField, Icon } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import InputAdornment from '@material-ui/core/InputAdornment';
const colorTheme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        fontFamily: 'KernRegular',
        backgroundColor: '#EDF1F2',
        borderRadius: 10,
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

export default function CustomSelectBlack(props) {
  // const { IconName, adornment } = props;
  return (
    <MuiThemeProvider theme={colorTheme}>
      <FormControl {...props}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </MuiThemeProvider>
  );
}
