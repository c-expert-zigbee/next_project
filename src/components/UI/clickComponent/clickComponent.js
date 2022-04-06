import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CustomizedInputs from "../textfieldClick";
import styles from "src/containers/creators/creators.module.css";

export default function ClickComponent({ empty, color, name, assignValue }) {
  const [showTextfield, setShowTextfield] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Grid container>
      <Grid item xs={6} md={6}>
        {showTextfield ? (
          <ClickAwayListener
            onClickAway={() => {
              this.setState({
                showTextfield: false,
              });
              if (assignValue !== null && assignValue !== undefined) {
                this.setState({ value: assignValue });
              }
            }}
          >
            <CustomizedInputs
              variant="outlined"
              className={styles["customInput"]}
              style={{
                width: "100%",
                marginTop: -13,
                border: "1px solid black",
                backgroundColor: "#dbdbe3",
              }}
              type="text"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  this.setState({
                    showTextfield: false,
                  });
                }
                if (assignValue !== null && assignValue !== undefined) {
                  assignValue(value);
                }
              }}
              onChange={(e) => {
                this.setState({
                  value: e.target.value,
                });
              }}
              value={value}
            />
          </ClickAwayListener>
        ) : (
          <div
            className={styles["divNotionCorp"]}
            onClick={() => {
              this.setState({
                showTextfield: true,
              });
            }}
          >
            <div>
              {value === "" ? (
                empty ? (
                  <span className={styles["spanTextField"]}>Empty</span>
                ) : name ? (
                  name
                ) : (
                  "click to enter"
                )
              ) : (
                <div
                  style={{
                    display: "inline",
                    background: "#f2f6fb",
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                >
                  {value}
                </div>
              )}
            </div>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
