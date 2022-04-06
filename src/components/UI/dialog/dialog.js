/** @format */

import React from "react";
import { Dialog, DialogContent, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  paper: { maxWidth: "1100px", height: "1230px" },
  dialogContent: {
    backgroundColor: "white",
    background: "F4F4F6",
    boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
    maxWidth: 972,
    minHeight: 1700,
    width: "100%",
    paddingLeft: 64,
    paddingRight: 64,
  },
});

const CustomDialog = ({ open, children, closeDialog, size }) => {
  const classes = useStyles();

  return (
    <Dialog
      fullScreen={size}
      open={open}
      maxWidth="false"
      scroll={"body"}
      onClose={closeDialog}
    >
      <DialogContent className={classes.dialogContent}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
export default CustomDialog;
