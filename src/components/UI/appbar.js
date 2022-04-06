import React from "react";
import DropBox from "src/styles/images/login/dripbox 5.png";

import { Grid } from "@material-ui/core";

import styles from "src/styles/ui.module.css";

export default function Appbar() {
  return (
    <Grid container style={{ paddingTop: 10 }}>
      <Grid item xs={9}>
        <div className={styles["mainAppabr"]}>
          <img
            src={DropBox.src}
            alt="drop-box"
            className={styles["imageArtcryption"]}
          />
          <div className={styles["artcyprion"]}>artcryption</div>
        </div>
      </Grid>
    </Grid>
  );
}
