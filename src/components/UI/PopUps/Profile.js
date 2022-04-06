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

function SeeProfile({ name }) {
  return (
    <Paper elevation={3} className={cn(styles.collection)}>
      <div className={cn(styles.profileheader)}>
        <Avatar
          className={cn(styles.Pavatar)}
          alt="Remy Sharp"
          src="/images/dripbox26.png"
        />
        <Button className={cn(styles.collectionButton)} variant="outlined">
          Follow
        </Button>
      </div>
      <Typography
        variant="h3"
        style={{ fontSize: "2.3rem" }}
        className={cn(styles.collectionHead)}
      >
        {name}
      </Typography>
      <p className={cn(styles.profileHead)}>
        Incididunt sint qui irure incididunt proident. Officia eu laboris in
        culpa excepteur sint esse eu nulla voluptate proident. Lorem consectetur
        fugiat tempor consequat quis proident irure nostrud cupidatat et. Lorem
        esse amet ea Lorem elit commodo nulla cillum. Id tempor non excepteur
        dolore officia id occaecat. Ipsum consequat sint consectetur ad
        voluptate deserunt labore mollit eiusmod aliqua. Tempor eu dolor enim
        sunt non.
      </p>

      <div className={cn(styles.Pcreators)}>
        <Typography
          style={{ fontSize: ".8rem" }}
          className={cn(styles.creatorTypo)}
        >
          Creators
        </Typography>
        <AvatarGroup max={6}>
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
      <div className={cn(styles.Pcreators)}>
        <Typography
          style={{ fontSize: ".8rem" }}
          className={cn(styles.creatorTypo)}
        >
          Curators
        </Typography>
        <AvatarGroup max={6}>
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
      <div className={cn(styles.Pcreators)}>
        <Typography
          style={{ fontSize: ".8rem" }}
          className={cn(styles.creatorTypo)}
        >
          Followers
        </Typography>
        <AvatarGroup max={6}>
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

      <div className={cn(styles.Ptotalassets)}>
        <div className={cn(styles.assets)}>
          <p className={cn(styles.passet)}>Followers</p>
          <p className={cn(styles.passet)}>
            <b>12k</b>{" "}
          </p>
        </div>
        <div className={cn(styles.assets)}>
          <p className={cn(styles.passet)}>Number of Assets</p>
          <p className={cn(styles.passet)}>
            <b>234</b>{" "}
          </p>
        </div>{" "}
        <div className={cn(styles.assets)}>
          <p className={cn(styles.passet)}>Number of Collections</p>
          <p className={cn(styles.passet)}>
            <b>34</b>{" "}
          </p>
        </div>{" "}
      </div>
    </Paper>
  );
}

const ProfilePopUp = ({ name, open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.UploadPopUp}>
        <SeeProfile name={name} />
      </div>
    </Modal>
  );
};

export default ProfilePopUp;
