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
  firstName: Yup.string("Enter your firstName")
    .required("First Name is required"),
  lastName: Yup.string("Enter your lastName")
    .required("Last Name is required"),
  pseudonym: Yup.string("Enter your pseudonym")
    .required("Pseudonym is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  address: Yup.string("Enter your address")
    .required("Address is required"),
  city: Yup.string("Enter your city")
    .required("City is required"),
  country: Yup.string("Enter your country")
    .required("Country is required"),
  postalCode: Yup.string("Enter your postalCode")
    .required("Postal Code is required"),
});

export default function NameOrganization(){
  // const dispatch = useDispatch();
  // const { loading, failure, error } = useSelector(loginSelector).login;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      pseudonym: "",
      email: "",
      password: "",
      address: "",
      city: "",
      country: "",
      postalCode: "",
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
      <Typography className={styles.profileCardTitle}>Name/Organization</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Box className={styles.textFieldContainer}>
            <Typography variant="body2">First Name</Typography>
            <CustomTextfield
              placeholder="Your first name"
              margin="dense"
              name="firstName"
              type="text"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={styles.textFieldContainer}>
            <Typography variant="body2">Last Name</Typography>
            <CustomTextfield
              placeholder="Your last name"
              margin="dense"
              name="lastName"
              type="text"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={styles.textFieldContainer}>
            <Typography variant="body2">Pseudonym</Typography>
            <CustomTextfield
              placeholder="Your pseudonym"
              margin="dense"
              name="pseudonym"
              type="text"
              value={formik.values.pseudonym}
              onChange={formik.handleChange}
              error={formik.touched.pseudonym && Boolean(formik.errors.pseudonym)}
              helperText={formik.touched.pseudonym && formik.errors.pseudonym}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={styles.textFieldContainer}>
            <Typography variant="body2">Email</Typography>
            <CustomTextfield
              placeholder="Your email"
              margin="dense"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={styles.textFieldContainer}>
            <Typography variant="body2">Password</Typography>
            <CustomTextfield
              placeholder="Your password"
              margin="dense"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              fullWidth
            />
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" disableElevation className={styles.profileCardButton} onClick={handleChangePassword}>Change Your Password</Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={styles.textFieldContainer}>
            <Typography variant="body2">Address</Typography>
            <CustomTextfield
              placeholder="Street name"
              margin="dense"
              name="address"
              type="text"
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={styles.textFieldContainer}>
            <Typography variant="body2">City</Typography>
            <CustomTextfield
              placeholder="City"
              margin="dense"
              name="city"
              type="text"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={styles.textFieldContainer}>
            <Typography variant="body2">Country</Typography>
            <CustomTextfield
              placeholder="Country"
              margin="dense"
              name="country"
              type="text"
              value={formik.values.country}
              onChange={formik.handleChange}
              error={formik.touched.country && Boolean(formik.errors.country)}
              helperText={formik.touched.country && formik.errors.country}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box className={styles.textFieldContainer}>
            <Typography variant="body2">Postal Code</Typography>
            <CustomTextfield
              placeholder="Postal Code"
              margin="dense"
              name="postalCode"
              type="text"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
              helperText={formik.touched.postalCode && formik.errors.postalCode}
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
