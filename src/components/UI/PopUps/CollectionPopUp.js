import {
  Avatar,
  AvatarGroup,
  Button,
  Paper,
  Typography,
  Modal,
} from "@mui/material";
import React from "react";
import styles from "./Popup.module.css";
import cn from "classnames";
import Image from "next/image";

function SeeCollection({ name }) {
  return (
    <Paper elevation={3} className={cn(styles.collection)}>
      <Typography
        variant="h3"
        style={{ fontSize: "2.3rem" }}
        className={cn(styles.collectionHead)}
      >
        {name}
      </Typography>
      <Button className={cn(styles.collectionButton)} variant="outlined">
        Follow
      </Button>

      <div>
        <Image
          src={`/images/dripbox26.png`}
          alt="collection"
          width={250}
          height={175}
          unoptimized
        />
      </div>
      <div className={cn(styles.creatorGroup)}>
        <div className={cn(styles.creators)}>
          <Typography
            style={{ fontSize: ".8rem" }}
            className={cn(styles.creatorTypo)}
          >
            5 Creators
          </Typography>
          <AvatarGroup max={6}>
            <Avatar
              className={cn(styles.avatar)}
              alt="Remy Sharp"
              src="/images/dripbox26.png"
            />
            <Avatar
              className={cn(styles.avatar)}
              alt="Travis Howard"
              src="/images/dripbox26.png"
            />
            <Avatar
              className={cn(styles.avatar)}
              alt="Cindy Baker"
              src="/images/dripbox26.png"
            />
            <Avatar
              className={cn(styles.avatar)}
              alt="Agnes Walker"
              src="/images/dripbox26.png"
            />
            <Avatar
              className={cn(styles.avatar)}
              alt="Trevor Henderson"
              src="/images/dripbox26.png"
            />
          </AvatarGroup>
        </div>
        <div className={cn(styles.creators)}>
          <Typography style={{ fontSize: ".8rem" }} c>
            5 Creators
          </Typography>
          <AvatarGroup max={6}>
            <Avatar
              className={cn(styles.avatar)}
              alt="Remy Sharp"
              src="/images/dripbox26.png"
            />
            <Avatar
              className={cn(styles.avatar)}
              alt="Travis Howard"
              src="/images/dripbox26.png"
            />
            <Avatar
              className={cn(styles.avatar)}
              alt="Cindy Baker"
              src="/images/dripbox26.png"
            />
            <Avatar
              className={cn(styles.avatar)}
              alt="Agnes Walker"
              src="/images/dripbox26.png"
            />
            <Avatar
              className={cn(styles.avatar)}
              alt="Trevor Henderson"
              src="/images/dripbox26.png"
            />
          </AvatarGroup>
        </div>
      </div>
      <div className={cn(styles.totalassets)}>
        <div className={cn(styles.assets)}>
          <Typography>Number of Assets</Typography>
          <Typography>
            <b>234</b>{" "}
          </Typography>
        </div>
        <div className={cn(styles.assets)}>
          <Typography>Floor Price</Typography>
          <Typography>
            <b>.89 ETH</b>{" "}
          </Typography>
        </div>{" "}
        <div className={cn(styles.assets)}>
          <Typography>Total Volume</Typography>
          <Typography>
            <b>123.89 ETH</b>{" "}
          </Typography>
        </div>{" "}
        <div className={cn(styles.assets)}>
          <Typography>Number of Collectors</Typography>
          <Typography>
            <b>34</b>{" "}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

const CollectionPopUp = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.UploadPopUp}>
        <SeeCollection />
      </div>
    </Modal>
  );
};

export default CollectionPopUp;
