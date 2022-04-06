/** @format */

import { Button } from "@material-ui/core";
import { createTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";

const blueTheme = createTheme({
  palette: {
    primary: {
      main: "#fffff",
      fontFamily: "KernRegular",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: "#000000",
        padding: 10,
        marginTop: 50,
      },
      containedSecondary: {
        borderRadius: 8,
        fontSize: 20,
        color: "White",
        backgroundColor: "#000000",
        boxShadow: "none",
        textTransform: "none",
        border: "none",
        "&:hover": {
          color: "White",
          backgroundColor: "#000000",
          boxShadow: "none",
        },
      },
    },
  },
});

export default function CustomButton(props) {
  return (
    <>
      <MuiThemeProvider theme={blueTheme}>
        <Button disableRipple {...props} />
      </MuiThemeProvider>
    </>
  );
}
