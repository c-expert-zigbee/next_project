import {
  Avatar,
  AvatarGroup,
  Button,
  Divider,
  Paper,
  Typography,
  Modal,
} from "@mui/material";
import React from "react";
import styles from "./Popup.module.css";
import cn from "classnames";
import Image from "next/image";

const settings = [
  "Profile Settings",
  "Billings",
  "Wallet",
  "Certificates",
  "Collectors",
  "Curators",
];
function SeeCreator({ name }) {
  return (
    <Paper elevation={3} className={cn(styles.collection)}>
      <div className={cn(styles.Cprofileheader)}>
        <Avatar
          className={cn(styles.CPavatar)}
          alt="Remy Sharp"
          src="/images/dripbox26.png"
        />
        <p className={cn(styles.Cuser)}>{name}</p>
      </div>
      <div className={cn(styles.CSettings)}>
        {settings.map((set, i) => (
          <Typography
            style={{ fontSize: ".8rem" }}
            key={i}
            className={cn(styles.creatorTypo)}
          >
            {set}
          </Typography>
        ))}
      </div>
      <Divider />
      <div className={cn(styles.CLog)}>LOG OUT</div>
    </Paper>
  );
}

const CreatorPopUp = ({ name, open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.UploadPopUp}>
        <SeeCreator name={name} />
      </div>
    </Modal>
  );
};

export default CreatorPopUp;
