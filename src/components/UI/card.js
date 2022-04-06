import React, {useState} from "react";
import styles from "../auth/login/components/login.module.scss";

export default function CustomCard({ title, height, selected, setSelectedCard }) {

  function handleClick(s){
    setSelectedCard(s);
  }


  return (
    <div
      onClick={() => handleClick(title)}
      className={height ? styles["cardCustomTwo"] : styles["cardCustom"]}
      style={{ height: height, border: selected === title ? "1px solid black" : "" }}
    >
      {height ? <div className={styles["newNav"]}>{title}</div> : title}
    </div>
  );
}
