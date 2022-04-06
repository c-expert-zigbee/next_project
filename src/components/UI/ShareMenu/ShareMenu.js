import React, { useState } from "react";
import styles from "./ShareMenu.module.css";
import cn from "classnames";
import { Paper, Tab, Tabs, Box, Modal } from "@mui/material";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import ShareWeb from "./ShareWeb";
import Social from "./Social";
import Embed from "./Embed";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={4}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
  flexContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  indicator: {
    background: "black",
  },
}));

function ShareMenu() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper className={cn(styles.container)}>
      <Tabs
        value={value}
        classes={classes}
        onChange={handleChange}
        className={cn(styles.tabsCon)}
        aria-label="basic tabs example"
      >
        <Tab
          style={{
            color: value === 0 && "black",
            fontWeight: value === 0 && "bold",
          }}
          label="Share to web"
          {...a11yProps(0)}
        />
        <Tab
          style={{
            color: value === 1 && "black",
            fontWeight: value === 1 && "bold",
          }}
          label="Embed COde"
          {...a11yProps(1)}
        />
        <Tab
          style={{
            color: value === 2 && "black",
            fontWeight: value === 2 && "bold",
          }}
          label="Social"
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ShareWeb />
      </TabPanel>{" "}
      <TabPanel value={value} index={1}>
        <Embed />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Social />
      </TabPanel>
    </Paper>
  );
}

const SharePopUp = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={styles.UploadPopUp}>
        <ShareMenu />
      </div>
    </Modal>
  );
};

export default SharePopUp;
