import Box from "@mui/material/Box";
import styles from "../profile.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import {format} from "date-fns";
import { useState } from "react";

export default function Exhibition(){
  const [exhibitions] = useState([
    { asset: "Doodle #443", price: "0.123 ETH", date: new Date()},
    { asset: "Bored Ape", price: "0.223 ETH", date: new Date()},
    { asset: "Golden Ape", price: "0.423 ETH", date: new Date()},
  ])

  return (
    <Box className={styles.profileCardContainer}>
      <Typography className={styles.profileCardTitleSecond}>Exhibition</Typography>
      <TableHead />
      <Box className={styles.overflowDiv}>
        {exhibitions.map((item, index) => <TableContent content={item} key={index} />)}
      </Box>
    </Box>
  )
}

function TableHead(){
  return (
    <Grid container className={styles.exhibitionTableSpacing}>
      <Grid item xs={4}>
        <Typography variant="body2" color="textSecondary">Asset</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body2" color="textSecondary">Price</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="body2" color="textSecondary">Date</Typography>
      </Grid>
    </Grid>
  )
}

function TableContent({content}) {
  return (
    <Grid container alignItems="center" className={styles.exhibitionTableBodyRow}>
      <Grid xs={4}>
        <Box display="flex" alignItems="center">
          <Avatar alt={content.asset} src="/static/images/avatar/3.jpg" /> &nbsp; &nbsp;
          <Typography variant="body1">{content.asset}</Typography>
        </Box>
      </Grid>
      <Grid xs={4}>
        <Typography variant="body1">{content.price}</Typography>
      </Grid>
      <Grid xs={4}>
        <Typography variant="body1">{format(content.date, "MMM dd, yyyy hh:mm O")}</Typography>
      </Grid>
    </Grid>
  )
}