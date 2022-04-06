import Box from "@mui/material/Box";
import styles from "../profile.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CustomTextfield from "../../../UI/textfield";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  bio: Yup.string("Enter your bio")
    .required("Your bio is required"),
});

export default function MyBio(){

  const formik = useFormik({
    initialValues: {
      bio: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Box className={styles.profileCardContainer}>
      <Typography className={styles.profileCardTitleSecond}>Detailed Bio</Typography>
      <Grid container>
        <Grid item xs={12}>
          <Box className={styles.textFieldContainerSecond}>
            <Typography variant="body2">My Bio</Typography>
            <CustomTextfield
              placeholder="Enter description"
              margin="dense"
              name="bio"
              multiline
              value={formik.values.bio}
              onChange={formik.handleChange}
              error={formik.touched.bio && Boolean(formik.errors.bio)}
              helperText={formik.touched.bio && formik.errors.bio}
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
