import { IconButton, Paper, Typography, Dialog } from "@mui/material";
import React, { useState } from "react";
import styles from "./Popup.module.css";
import cn from "classnames";
import Image from "next/image";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { styled } from "@mui/system";

const settings = [
  "Certify/Sell/Protect",
  "Move to Collection",
  "View Curators(s)",
  "View Certificate",
  "Share",
  "Send Curator Request",
];
const EntryTypography = styled(Typography)(
  ({ theme }) => `&&{
    font-family: 'KernRegular';
font-style: normal;
font-weight: 400;
font-size: 14.8125px;
line-height: 18px;
text-align:left;
opacity:1;
color: #000000;
padding-left:2rem;
}
  `
);
const StyledPaper = styled(Paper)({
  width: "16.125rem",
  height: " min-content",
  padding: "1rem",
  display: "grid",
  rowGap: "0.5rem",
  border: " 0.9875px solid #9060eb",
  boxShadow: "0px 0px 19.75px rgba(0, 0, 0, 0.25)",
  borderRadius: "9.875px",

  "& div .MuiPaper-rounded": {
    borderRadius: "10px",
  },
});
const CertifyDiv = styled("div")({
  display: "grid",
  rowGap: "1rem",
  marginTop: "1rem",
  borderRadius: "10px",
  "& div .MuiPaper-rounded": {
    borderRadius: "10px",
  },
});
function Certify({ open }) {
  const [visible, setVisible] = useState(true);
  return (
    <StyledPaper elevation={3} className={cn(styles.collection)}>
      <CertifyDiv className={cn(styles.CreateSettings)}>
        {settings.map((set, i) => (
          <EntryTypography key={i} className={cn(styles.creatorTypo)}>
            {set}
          </EntryTypography>
        ))}
      </CertifyDiv>
      <div className={cn(styles.CreateLog)}>
        <EntryTypography>Privacy</EntryTypography>
        <IconButton
          font-size="small"
          onClick={() => setVisible((state) => !state)}
        >
          {visible ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </div>
    </StyledPaper>
  );
}

const CertifyPopUp = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Certify />
    </Dialog>
  );
};

export default CertifyPopUp;
