import { Grid } from "@material-ui/core";
import React from "react";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import styles from "./page-header.module.scss";

export default function PageHeader({ title, subTitle }) {
  return (
    <Box mb={2}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography align="center" className={styles.titleText}>{title}</Typography>
          {subTitle &&
            <Box display="flex" mt={2} justifyContent="center">
              <Typography variant="caption">{subTitle}</Typography>
            </Box>
          }
        </Grid>
      </Grid>
    </Box>
  );
}
