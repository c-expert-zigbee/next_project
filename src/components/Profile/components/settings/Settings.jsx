import styles from "../profile.module.scss";
import Grid from "@mui/material/Grid";
import Billings from "./Billings";
import Notifications from "./Notifications";

export default function Settings(){
  return (
    <Grid container className={styles.profileBasicContainer} spacing={3}>
      <Grid item xs={12}>
        <Billings />
      </Grid>
      <Grid item xs={12}>
        <Notifications />
      </Grid>
    </Grid>
  )
}
