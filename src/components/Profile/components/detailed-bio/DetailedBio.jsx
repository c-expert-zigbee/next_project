import styles from "../profile.module.scss";
import Grid from "@mui/material/Grid";
import MyBio from "./MyBio";
import Exhibition from "./Exhibition";
import Press from "./Press";
import Awards from "./Awards";
import Links from "./Links";

export default function DetailedBio(){
  return (
    <Grid container className={styles.profileBasicContainer} spacing={3}>
      <Grid item xs={12}>
        <MyBio />
      </Grid>
      <Grid item xs={12}>
        <Exhibition />
      </Grid>
      <Grid item xs={12}>
        <Press />
      </Grid>
      <Grid item xs={12}>
        <Awards />
      </Grid>
      <Grid item xs={12}>
        <Links />
      </Grid>
    </Grid>
  )
}
