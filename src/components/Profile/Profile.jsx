import { useState } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProfileHero from "./components/ProfileHero";
import ProfileDetails from "./components/ProfileDetails";
import Container from '@mui/material/Container';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CustomButton from "../UI/Button";
import styles from "./components/profile.module.scss";
import ProfileBasic from "./components/profile-basic/ProfileBasic";
import DetailedBio from "./components/detailed-bio/DetailedBio";
import Settings from "./components/settings/Settings";
import HelpAndSupport from "./components/help-and-support/HelpAndSupport";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
//added code by Novak
import {styled}  from '@mui/material/styles';

const ProfileTabs = withStyles({
  root: {
    minHeight: "0px !important",
  },
  indicator: {
    display: "none",
    backgroundColor: '#000000',
    color: "#000",
    height: 1
  },
})(Tabs);


const ProfileTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    minHeight: 0,
    padding: 0,
    color: 'rgba(0,0,0,0.5)',
    '&:hover': {
      color: '#000000',
      opacity: 1,
    },
    '&.MuiButtonBase-root':{
      color: '#6F6F6F',
      fontSize: 18,
      marginRight: theme.spacing(3)
    },
    '&.Mui-selected': {
      color: '#000000',
      textDecoration: "underline",
      fontWeight: 'bold',
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
}));
export default function Profile(props){
  const [isActive] = useState(true);
  const [value, setValue] = useState(0);

  let condTabOrientation;
  if (isWidthUp("sm", props.width)) {
    condTabOrientation = "vertical";
  } else {
    condTabOrientation = "horizontal";
  }

  console.log(condTabOrientation);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ProfileHero />
      <ProfileDetails />
      <Container>
        <Box mb={5}>
          <Grid container>
            <Grid item xs={12} md={9} lg={9}>
              <ProfileTabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" indicatorColor="primary" aria-label="profile tabs">
                <ProfileTab label="Profile" {...a11yProps(0)} />
                <ProfileTab label="Detailed Bio" {...a11yProps(1)} />
                <ProfileTab label="Settings" {...a11yProps(2)} />
                <ProfileTab label="Help" {...a11yProps(3)} />
                <ProfileTab label="Certificate" {...a11yProps(4)} />
                <ProfileTab label="Mornitor" {...a11yProps(5)} />
              </ProfileTabs>
            </Grid>
            <Grid item xs={12} md={3} lg={2}>
              <Box display="flex" alignItems="center" justifyContent="flex-end" mt={1}>
                <Typography variant="body2" className={styles.fontBold}>Status:</Typography>
                <FiberManualRecordIcon fontSize="small" className={isActive ? styles.activeStatus : styles.inActiveStatus} />
                <Typography variant="body2">Active</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <TabPanel value={value} index={0}>
          <ProfileBasic />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <DetailedBio />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Settings />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <HelpAndSupport />
        </TabPanel>
      </Container>
      <Box px={3} mt={3} mb={5}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle2">Help &amp; support</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" justifyContent="flex-end">
              <CustomButton variant="contained" disableElevation>
                <Typography className={styles.textLowercase} variant="subtitle2">Delete Account</Typography>
              </CustomButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};