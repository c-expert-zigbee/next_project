import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { ReactComponent as Join } from "../../../styles/images/landingPage/join.svg";

const useStyles = makeStyles({
  root: {
    background: "black",
    color: "white",
    fontSize: 32,
    fontFamily: "Gilroy",
    textTransform: "capitalize",
    borderRadius: "45px",
    padding: "15px 50px 15px 50px",
    "&:hover": {
      background: "black",
      color: "white",
    },
  },
});

export default function JoinNowButton() {
  const classes = useStyles();
  return (
    <Button endIcon={<Join />} className={classes.root}>
      Join Now
    </Button>
  );
}
