import Box from "@mui/material/Box";
import styles from "../profile.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CustomTextfield from "../../../UI/textfield";
import AddIcon from '@material-ui/icons/Add';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const validationSchema = Yup.object({
    link: Yup.string("Enter article URL")
        .required("Link is required"),
});

export default function Links(){
    const [links, setLinks] = useState(["", ""])
  const formik = useFormik({
    initialValues: {
      link: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  function handleAddLink() {
    setLinks([...links, ""])
  }

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Box className={styles.profileCardContainer}>
      <Typography className={styles.profileCardTitleSecond}>Links &nbsp;<Typography component="span" className={styles.profileCardTitleMuted} color="textSecondary">(optional)</Typography></Typography>
        <Grid item container>
            {links.map((item, index) => (
                <Grid xs={12} sm={6} key={index}>
                    <Box className={styles.textFieldContainerSecond}>
                        <Typography variant="body2">Link {++index}</Typography>
                        <CustomTextfield
                            placeholder="www.websitelink.com"
                            margin="dense"
                            name="link"
                            type="text"
                            value={formik.values.link}
                            onChange={formik.handleChange}
                            error={formik.touched.link && Boolean(formik.errors.link)}
                            helperText={formik.touched.link && formik.errors.link}
                            fullWidth
                        />
                    </Box>
                </Grid>
            ))}
        </Grid>
        <Button variant="contained" onClick={handleAddLink} disableElevation className={styles.profileCardButtonAdd} >
            <AddIcon fontSize="medium" /> Add Link
        </Button>
    </Box>
  )
}
