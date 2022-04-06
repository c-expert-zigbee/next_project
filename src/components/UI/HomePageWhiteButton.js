import React from "react";

import styles from "src/containers/landingPage/landingPage.module.css";

export default function WhiteButton({ title, land }) {
  return (
    <button className={land ? styles.whiteButtonCustom : styles.whiteButton}>
      {title}
    </button>
  );
}
