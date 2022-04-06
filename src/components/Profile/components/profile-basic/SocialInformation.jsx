import Box from "@mui/material/Box";
import styles from "../profile.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CustomTextfield from "../../../UI/textfield";
// import { login, loginSelector } from "../../../../store/slices/auth/login";
// import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  website: Yup.string("Enter your website name")
    .required("Website name is required is required"),
  facebook: Yup.string("Enter your facebook profile URL")
    .required("Facebook profile is required"),
  instagram: Yup.string("Enter your instagram profile URL")
    .required("Instagram profile is required"),
  twitter: Yup.string("Enter your twitter profile URL")
    .required("Twitter profile is required")
});

export default function SocialInformation(){
  // const dispatch = useDispatch();
  // const { loading, failure, error } = useSelector(loginSelector).login;

  const formik = useFormik({
    initialValues: {
      website: "",
      facebook: "",
      instagram: "",
      twitter: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  function handleChangePassword() {
    alert("Change Password");
  }

  function handleSubmit(values) {
    console.log(values);
    // dispatch(login(data));
  }

  return (
    <Box className={styles.profileCardContainerGrey}>
      <Typography className={styles.profileCardTitle}>Social Information</Typography>
      <Grid container>
        <Grid item xs={12}>
          <Box className={styles.textFieldContainer}>
            <Typography variant="body2">Website</Typography>
            <CustomTextfield
              placeholder="www.yourwebsite.com"
              margin="dense"
              name="website"
              type="text"
              value={formik.values.website}
              onChange={formik.handleChange}
              error={formik.touched.website && Boolean(formik.errors.website)}
              helperText={formik.touched.website && formik.errors.website}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={styles.textFieldContainerFlex}>
            <Typography variant="body2">Facebook</Typography>
            <CustomTextfield
              placeholder="www.facebook.com"
              margin="dense"
              name="facebook"
              type="text"
              value={formik.values.facebook}
              onChange={formik.handleChange}
              error={formik.touched.facebook && Boolean(formik.errors.facebook)}
              helperText={formik.touched.facebook && formik.errors.facebook}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={styles.textFieldContainerFlex}>
            <Typography variant="body2">Instagram</Typography>
            <CustomTextfield
              placeholder="www.instagram.com"
              margin="dense"
              name="instagram"
              type="text"
              value={formik.values.instagram}
              onChange={formik.handleChange}
              error={formik.touched.instagram && Boolean(formik.errors.instagram)}
              helperText={formik.touched.instagram && formik.errors.instagram}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={styles.textFieldContainerFlex}>
            <Typography variant="body2">Twitter</Typography>
            <CustomTextfield
              placeholder="www.twitter.com"
              margin="dense"
              name="twitter"
              type="text"
              value={formik.values.twitter}
              onChange={formik.handleChange}
              error={formik.touched.twitter && Boolean(formik.errors.twitter)}
              helperText={formik.touched.twitter && formik.errors.twitter}
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
