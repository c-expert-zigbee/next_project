import React, { useState } from "react";
import styles from "./ShareMenu.module.css";
import cn from "classnames";
import {
  CopyAll,
  Facebook,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Button, TextField } from "@mui/material";

function Social() {
  const [value, setValue] = useState("demo");
  return (
    <div className={cn(styles.socialCont)}>
      <div className={cn(styles.socialtop)}>
        <Google className={cn(styles.icon)} />
        <Facebook className={cn(styles.icon)} />
        <Twitter className={cn(styles.icon)} />
        <Instagram className={cn(styles.icon)} />
        <LinkedIn className={cn(styles.icon)} />
        <WhatsApp className={cn(styles.icon)} />
      </div>
      <div className={cn(styles.topBottom)}>
        <TextField value={value} />
        <Button
          variant="outlined"
          onClick={() => navigator.clipboard.writeText(value)}
          className={cn(styles.topBut)}
        >
          <CopyAll />
          Copy Link
        </Button>
      </div>
    </div>
  );
}

export default Social;
