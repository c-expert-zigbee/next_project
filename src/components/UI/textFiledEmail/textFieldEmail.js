import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: 5,
    color: "#000000",
    backgroundColor: "transparent",
    borderRadius: "15px",
    border: "1px solid white",
  },
  rootThree: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: 5,
    color: "#000000",
    backgroundColor: "transparent",
    borderRadius: "10px",
    border: "1px solid white",
  },
  rootTwo: {
    borderRadius: 10,
    padding: 4,
    display: "flex",
    color: "black",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#dcdce0",
    border: "1px solid black",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "white",
  },
  inputTwo: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "black",
  },
  iconButton: {
    padding: 10,
  },
  iconButtonTwo: {
    color: "white",
    padding: 5,
  },
}));

export default function CustomizedInputBase(props) {
  const classes = useStyles();
  const { placeHolder, icon, white, color, sendMail, value, onChange, pade } =
    props;
  return (
    <div
      className={
        white ? (pade ? classes.rootThree : classes.root) : classes.rootTwo
      }
    >
      <InputBase
        className={white ? classes.input : classes.inputTwo}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
      {icon && (
        <IconButton
          onClick={sendMail}
          type="submit"
          className={
            color === "white" ? classes.iconButton : classes.iconButtonTwo
          }
          aria-label="search"
        >
          <Icon>arrow_forward</Icon>
        </IconButton>
      )}
    </div>
  );
}
