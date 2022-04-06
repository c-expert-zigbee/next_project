import React, { useState } from "react";
import styles from "./ShareMenu.module.css";
import cn from "classnames";
import {
  Button,
  Switch,
  TextField,
  MenuItem,
  ListItemText,
  Typography,
  Avatar,
} from "@mui/material";
import { CopyAll, InfoOutlined, FilterAlt } from "@mui/icons-material";
import { Box } from "@mui/system";

const label = { inputProps: { "aria-label": "Switch demo" } };

function ShareWeb() {
  const [value, setValue] = useState("demo");
  return (
    <div className={cn(styles.webContainer)}>
      <div className={cn(styles.top)}>
        <div className={cn(styles.topWeb)}>
          <div>
            <Typography className={cn(styles.webTypo)}>
              <b>Share to Web</b>{" "}
            </Typography>
            <Typography className={cn(styles.webTypo)}>
              Publish and share link with anyone{" "}
              <InfoOutlined color="primary" />
            </Typography>
          </div>
          <Switch {...label} />
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
      <div className={cn(styles.centerWeb)}>
        <Typography className={cn(styles.webTypo)}>
          <b>Invite to email</b>{" "}
        </Typography>
        <div className={cn(styles.topBottom)}>
          <TextField placeholder="Enter email here" />
          <Button variant="contained" className={cn(styles.centerBut)}>
            Invite
          </Button>
        </div>
      </div>
      <div className={cn(styles.bottom)}>
        <div className={cn(styles.bottomTop)}>
          <Typography>USERS</Typography>
          <FilterAlt />
        </div>
        <div className={cn(styles.userList)}>
          <div className={cn(styles.user)}>
            <div className={cn(styles.username)}>
              <Avatar />
              <Typography>Catherine H</Typography>
            </div>

            <Typography>Profile Owner</Typography>
          </div>{" "}
          <div className={cn(styles.user)}>
            <div className={cn(styles.username)}>
              {" "}
              <Avatar />
              <Typography>Fred</Typography>
            </div>
            <TextField
              select
              defaultValue={0}
              value={0}
              style={{ width: "12rem" }}
            >
              <MenuItem value={0}>
                <ListItemText primary="Can View" />
              </MenuItem>
            </TextField>
          </div>{" "}
          <div className={cn(styles.user)}>
            <div className={cn(styles.username)}>
              <Avatar />
              <Typography>Fred</Typography>
            </div>

            <TextField
              value={0}
              defaultValue={0}
              select
              style={{ width: "12rem" }}
            >
              <MenuItem value={0}>
                <ListItemText primary="Can View" />
              </MenuItem>
            </TextField>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareWeb;
