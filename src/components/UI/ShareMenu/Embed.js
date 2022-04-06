import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import styles from "./ShareMenu.module.css";
import cn from "classnames";
import { Button, Typography } from "@mui/material";
import { CopyAll } from "@mui/icons-material";

const DemoComponent = () => {
  return <div>hello world</div>;
};

function Embed() {
  const [value, setValue] = useState(
    ReactDOMServer.renderToString(<DemoComponent />)
  );
  return (
    <div className={cn(styles.EmbedContainer)}>
      <div className={cn(styles.EmbedTop)}>
        <Typography>
          <b>Embeded Code</b>
        </Typography>
        <Button
          className={cn(styles.topBut)}
          onClick={() => navigator.clipboard.writeText(value)}
        >
          <CopyAll />
          Copy Link
        </Button>
      </div>
      <div className={cn(styles.embedBottom)}>
        <div className={cn(styles.embedInner)}>{value}</div>
      </div>
    </div>
  );
}

export default Embed;
