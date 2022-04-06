import React, { useState } from "react";
import styles from "./Curator.module.css";
import cn from "classnames";
import {
  Checkbox,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Add, ArrowBack, CloudUpload } from "@mui/icons-material";

function Curator() {
  const [values, setValues] = useState([]);

  return (
    <Paper className={cn(styles.container)}>
      <div className={cn(styles.top)}>
        <ArrowBack className={cn(styles.icon)} />
        <Typography variant="h1">CURATOR</Typography>
      </div>
      <div className={cn(styles.bottomIP)}>
        <Typography variant="h3" className={cn(styles.wait)}>
          Wait! Read Before you can upload
        </Typography>
        <div className={cn(styles.center)}>
          <div className={cn(styles.bottomCenter)}>
            <Checkbox />
            <Typography>
              Aliqua consectetur nisi labore exercitation. Incididunt anim qui
              elit ea dolore quis dolor nisi ut tempor est Lorem in ea.
              Exercitation exercitation consectetur exercitation commodo
              deserunt enim adipisicing quis. Ut et enim id proident esse
              exercitation eu et esse tempor cupidatat sunt dolor.
            </Typography>
          </div>
          <div className={cn(styles.createBut)}>
            <div className={cn(styles.creator)}>
              <div className={cn(styles.contcreat)}>
                <Typography>Creator (s)</Typography>
                <IconButton
                  onClick={() => setValues((state) => [...state, ""])}
                >
                  <Add />
                </IconButton>
              </div>

              {values?.map((ele, i) => (
                <TextField
                  key={i}
                  value={ele.val}
                  style={{ width: "10rem" }}
                  className={cn(styles.input)}
                  onChange={(e) =>
                    setValues((state) =>
                      state.map((ele, j) => (i === j ? e.target.value : ele))
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className={cn(styles.bottom)}>
          <div className={cn(styles.card)}>
            <CloudUpload className={cn(styles.cloudIcon)} />
            upload creator representation agreement
          </div>
          <Typography >
            Ex enim et voluptate aliquip proident. Lorem reprehenderit elit qui
            ullamco aliqua culpa elit occaecat officia elit nostrud deserunt
            esse. Laborum magna cillum laboris ut ea Lorem duis enim tempor eu
            cillum occaecat dolor. 
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

const CuratorPopUp = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.UploadPopUp}>
        <Curator />
      </div>
    </Modal>
  );
};


export default CuratorPopUp;
