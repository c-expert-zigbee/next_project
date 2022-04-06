import styles from "../profile.module.scss";
import Grid from "@mui/material/Grid";
import SupportArticles from "./SupportArticles";

export default function HelpAndSupport(){
  return (
    <Grid container className={styles.profileBasicContainer} spacing={3}>
      <Grid item xs={12}>
        <SupportArticles />
      </Grid>
    </Grid>
  )
}
