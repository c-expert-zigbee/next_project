import React from "react";
import { TextField, Icon } from "@material-ui/core";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";

import InputAdornment from "@material-ui/core/InputAdornment";
const colorTheme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        position: "relative",
        fontFamily: "KernRegular",
        backgroundColor: "#EDF1F2",
        borderRadius: 10,
        "& $notchedOutline": {
          borderColor: "#EDF1F2",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "#EDF1F2",
        },
        "& $focused $notchedOutline": {
          borderColor: "white",
          borderWidth: 1,
        },
        // '& $underline': {
        //   borderBottomColor: 'yellow !important',
        // },
      },
    },
  },
});

export default function CustomTextfield(props) {
  const { IconName, adornment, endAdornment } = props;
  return (
    <MuiThemeProvider theme={colorTheme}>
      <TextField
        InputProps={
          IconName && adornment
            ? {
                startAdornment: (
                  <InputAdornment position="start">
                    <Icon>{IconName}</Icon>
                  </InputAdornment>
                ),
              }
            : {
                endAdornment: (
                  <InputAdornment position="end">
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
