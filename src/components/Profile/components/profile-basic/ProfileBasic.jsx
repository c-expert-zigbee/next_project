import Box from "@mui/material/Box";
import styles from "../profile.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import NameOrganization from "./NameOrganization";
import DigitalIdentity from "./DigitalIdentity";
import Roles from "./Roles";
import TeamMembers from "./TeamMembers";
import SocialInformation from "./SocialInformation";
import ProfilePhoto from "./ProfilePhoto";

export default function ProfileBasic(){
  return (
    <Grid container className={styles.profileBasicContainer} spacing={3}>
      <Grid item xs={12} sm={12} md={7} lg={8}>
        <NameOrganization />
      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={4}>
        <DigitalIdentity />
        <Roles />
      </Grid>
      <Grid item xs={12}>
        <SocialInformation />
      </Grid>
      <Grid item xs={12} md={2} lg={3}>
        <ProfilePhoto />
      </Grid>
      <Grid item xs={12} md={10} lg={9}>
        <TeamMembers />
      </Grid>
      {/* <Grid item xs={12}>
      Billing Information
      </Grid> */}
    </Grid>
  )
}
