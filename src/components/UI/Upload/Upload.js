import { IconButton, Modal, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import cn from "classnames";
import styles from "./Upload.module.css";
import Image from "next/image";

import { FileDrop } from "react-file-drop";
import { InsertLink, Monitor, Search } from "@mui/icons-material";
import SharePopUp from "../ShareMenu/ShareMenu";
import IpRightsPopUp from "../IPRights/IpRIghts";

function Upload({ setOpen }) {
  const fileInputRef = useRef(null);

  const [uploadedFile, setUploadedFile] = useState([]);
  const [sharePopUp, setSharePopUp] = useState(false);
  const [ipRightsPopUp, setIpRightsPopUp] = useState(false);

  const onFileInputChange = (e) => {
    const { files } = e.target;
    setIpRightsPopUp(true);
    setSharePopUp(true);
    setUploadedFile(Object.values(files));
  };

  return (
    <React.Fragment>
      <div className={cn(styles.UploadContainer)}>
        <div className={cn(styles.UploadLeft)}>
          <IconButton className={cn(styles.iconButFirst)}>
            <Monitor className={cn(styles.icons)} />
          </IconButton>
          <IconButton className={cn(styles.iconBut)}>
            <InsertLink className={cn(styles.icons)} />
          </IconButton>
          <IconButton className={cn(styles.iconBut)}>
            <Search className={cn(styles.icons)} />
          </IconButton>
          <Image
            className={cn(styles.icons)}
            src="/images/login/facebook.svg"
            alt={"facebook"}
            width={45}
            height={45}
          />
          <Image
            className={cn(styles.icons)}
            src="/images/login/instagram.svg"
            alt={"insta"}
            width={45}
            height={45}
          />
          <Image
            className={cn(styles.icons)}
            src="/images/curators/drive.png"
            alt={"drive"}
            width={45}
            height={45}
          />
          <Image
            className={cn(styles.icons)}
            src="/images/curators/dropbox.png"
            alt={"dropbbox"}
            width={45}
            height={45}
          />
        </div>

        <div className={cn(styles.UploadRight)}>
          <div>
            <IconButton className={cn(styles.iconButFirst)}>
              <Monitor className={cn(styles.icons)} />
            </IconButton>
          </div>
          <FileDrop
            onDrop={(files, event) => {
              setIpRightsPopUp(true);
              setSharePopUp(true);

              setUploadedFile((state) => [...state, ...files]);
            }}
            onTargetClick={() => {
              fileInputRef.current.click();
            }}
          >
            <div className={cn(styles.UploadRightSub)}>
              {uploadedFile.length > 0 ? (
                <Typography className={cn(styles.selected)}>
                  <span className={cn(styles.selected_span)}>
                    {uploadedFile
                      .slice(0, 10)
                      .map((ele) => ele.name)
                      .join(", ")}
                  </span>
                  has been selected to upload !
                </Typography>
              ) : (
                <React.Fragment>
                  <p className={cn(styles.UploadRightSubTypo1)}>
                    Select Files to Upload
                  </p>
                  <p className={cn(styles.UploadRightSubTypo2)}>
                    or Drag and Drop, Copy and Paste a File
                  </p>
                </React.Fragment>
              )}
            </div>{" "}
          </FileDrop>
        </div>
      </div>
      <input
        ref={fileInputRef}
        onChange={onFileInputChange}
        style={{
          filter: "alpha(opacity=0)",
          opacity: 0,
          visibility: "hidden",
        }}
        multiple
        type="file"
      />
      <SharePopUp open={sharePopUp} setOpen={setSharePopUp} />
      <IpRightsPopUp open={ipRightsPopUp} setOpen={setIpRightsPopUp} />
    </React.Fragment>
  );
}

const UploadPopUp = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.UploadPopUp}>
        <Upload setOpen={setOpen} />
      </div>
    </Modal>
  );
};

export default UploadPopUp;
