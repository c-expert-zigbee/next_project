import React from "react";
import styles from "src/styles/ui.module.css";

export default function Footer() {
  return (
    <div className={styles["footerContainer"]}>
      <div className={styles["liteVersion"]}>Send us a message</div>
      <div className={styles["liteVersion"]}>
        Artcryption, 2021. All Rights Reserved.
      </div>
      <div className={styles["liteVersion"]}> Privacy &nbsp; &nbsp; Terms</div>
    </div>
  );
}
