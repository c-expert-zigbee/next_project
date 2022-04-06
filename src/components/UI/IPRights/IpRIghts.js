import React, { useState } from "react";
import styles from "./IpRights.module.css";
import cn from "classnames";
import { Checkbox, Modal, Paper, Typography } from "@mui/material";
import CuratorPopUp from "../Curator/Curator";

function IpRIghts() {
  const [curatorPopUp, setCuratorPopUp] = useState(false);
  return (
    <Paper className={cn(styles.container)}>
      <div>
        <Typography variant="h1">IP RIGHTS CONFIRMATION</Typography>
      </div>
      <div className={cn(styles.bottomIP)}>
        <Typography variant="h3" className={cn(styles.wait)}>
          Wait! Read Before you can upload
        </Typography>
        <div className={cn(styles.bottomCenter)}>
          <Checkbox />
          <Typography>
            Aliqua consectetur nisi labore exercitation. Incididunt anim qui
            elit ea dolore quis dolor nisi ut tempor est Lorem in ea.
            Exercitation exercitation consectetur exercitation commodo deserunt
            enim adipisicing quis. Ut et enim id proident esse exercitation eu
            et esse tempor cupidatat sunt dolor.
          </Typography>
        </div>
        <div className={cn(styles.bottom)}>
          <div className={cn(styles.card)}>I am creator of the asset</div>{" "}
          <div
            className={cn(styles.card)}
            onClick={() => setCuratorPopUp(true)}
          >
            I am curator of the asset
          </div>
        </div>
      </div>
      <CuratorPopUp open={curatorPopUp} setOpen={setCuratorPopUp} />
    </Paper>
  );
}

const IpRightsPopUp = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.UploadPopUp}>
        <IpRIghts />
      </div>
    </Modal>
  );
};

export default IpRightsPopUp;
