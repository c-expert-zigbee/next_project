import {
  MenuItem,
  ListItemText,
  Checkbox,
  Paper,
  Switch,
  TextField,
  Typography,
  Modal,
  Dialog,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./Popup.module.css";
import cn from "classnames";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const OPTIONS = {
  CATEGORIES: ["Art/images", "Film", "Music", "Documents", "Sports", "Fashion"],
  ARTWORK: [
    "Painting,Print",
    "Sculpture",
    "Photography",
    "Work on paper",
    "Drawing",
  ],
  TRAITS: ["Brand Color", "Light", "Eyes", "Trait 4", "Trait 5", "Trait 6"],
};
function SeeAsset({ name }) {
  const [category, setCategory] = useState([]);
  const [artwork, setArtwork] = useState([]);
  const [trait, setTrait] = useState([]);

  return (
    <Paper elevation={3} className={cn(styles.collection)}>
      <Typography>Asset Status</Typography>
      <div className={cn(styles.asset)}>
        <p>Buy Now</p>
        <Switch />
      </div>
      <div className={cn(styles.assetMinMax)}>
        <TextField label="Min" variant="standard" />
        <span />
        <TextField label="Max" variant="standard" />
      </div>
      <div className={cn(styles.assetTextSelect)}>
        <TextField
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Categories"
          select
          SelectProps={{
            multiple: true,
            MenuProps,
            renderValue: (selected) => selected.join(", "),
          }}
        >
          {OPTIONS.CATEGORIES.map((cat, i) => (
            <MenuItem value={cat} key={i} className={cn(styles.menu)}>
              <ListItemText primary={cat} />{" "}
              <Checkbox checked={category.indexOf(cat) > -1} />
            </MenuItem>
          ))}
        </TextField>{" "}
        <TextField
          value={artwork}
          onChange={(e) => setArtwork(e.target.value)}
          label="Artwork Type"
          select
          SelectProps={{
            multiple: true,
            MenuProps,
            renderValue: (selected) => selected.join(", "),
          }}
        >
          {OPTIONS.ARTWORK.map((cat, i) => (
            <MenuItem value={cat} key={i} className={cn(styles.menu)}>
              <ListItemText primary={cat} />{" "}
              <Checkbox checked={artwork.indexOf(cat) > -1} />
            </MenuItem>
          ))}
        </TextField>{" "}
        <TextField
          value={trait}
          onChange={(e) => setTrait(e.target.value)}
          label="Traits"
          select
          SelectProps={{
            multiple: true,
            MenuProps,
            renderValue: (selected) => selected.join(", "),
          }}
        >
          {OPTIONS.TRAITS.map((cat, i) => (
            <MenuItem value={cat} key={i} className={cn(styles.menu)}>
              <ListItemText primary={cat} />{" "}
              <Checkbox checked={trait.indexOf(cat) > -1} />
            </MenuItem>
          ))}
        </TextField>
      </div>

      <div className={cn(styles.assetRestore)}>Restore default</div>
    </Paper>
  );
}

const AssetPopUp = ({ name, open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.UploadPopUp}>
        <SeeAsset name={name} />
      </div>
    </Dialog>
  );
};

export default AssetPopUp;
