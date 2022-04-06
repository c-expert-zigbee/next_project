import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const font = "'Poppins', sans-serif";

const useStyles = makeStyles({
  root: {
    background: "white",
    borderRadius: "10px",
    border: "1px solid #EB4B87",
    color: "black",
    height: "22.5px",
    padding: "5 4px",
    fontSize: 8.4,
    fontFamily: font,
    textTransform: "lowercase",
  },
});

export default function NavButton({ title, icon, radius }) {
  const classes = useStyles();
  return (
    <Button
      startIcon={icon}
      className={classes.root}
      style={{ borderRadius: `${radius}` }}
    >
      {title}
    </Button>
  );
}
