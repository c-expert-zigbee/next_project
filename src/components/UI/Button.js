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
        color: "#ffffff"
      },
      containedSecondary: {
        fontFamily: "KernRegular",
        borderRadius: 10,
        color: "black",
        backgroundColor: "#D8E0E9",
        boxShadow: "none",
        textTransform: "none",
        border: "none",
        "&:hover": {
          color: "black",
          // backgroundColor: "rgba(77, 160, 248, 0.3)",
          boxShadow: "none",
        },
      },
      containedPrimary: {
        fontFamily: "KernRegular",
        color: "#000000",
        borderRadius: 10,
        backgroundColor: "#D8D8D8",
        boxShadow: "none",
        textTransform: "none",
        border: "1px solid #D8D8D8",
        "&:hover": {
          // color: "#fff",
          backgroundColor: "#D8D8D8",
          boxShadow: "none",
        },
      },
      outlinedPrimary: {
        color: "black",
        textTransform: "none",
        borderRadius: 10,
        border: "none",
        backgroundColor: "#E9D8D8",
        "&:hover": {
          color: "black",
          backgroundColor: "#E9D8D8",
          boxShadow: "none",
        },
      },
      outlinedSecondary: {
        color: "#222222",
        textTransform: "none",
        backgroundColor: "#FFFFFF",
        border: "1px solid #DFDFDF",
        // backgroundColor: "rgba(77, 160, 248, 0.1)",
        // boxShadow: "0px 1px 2px rgba(15, 15, 15, 0.1)",
        borderRadius: 10,
        "&:hover": {
          color: "#222222",
          backgroundColor: "#dfdfdf",
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
