import Box from "@mui/material/Box";
import styles from "../profile.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
// import { login, loginSelector } from "../../../../store/slices/auth/login";
// import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  primaryRoles: Yup.string("Please upload a document")
    .required("Upload a document")
});



export default function Roles(){
  // const dispatch = useDispatch();
  // const { loading, failure, error } = useSelector(loginSelector).login;

  const formik = useFormik({
    initialValues: {
        primaryRoles: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  function handleChangePassword() {
    alert("Upload Document");
  }

  function handleSubmit(values) {
    console.log(values);
    // dispatch(login(data));
  }

  return (
    <Box className={styles.profileCardContainerGrey}>
      <Typography className={styles.profileCardTitle}>Roles</Typography>
      <Grid container>
        <Grid item xs={12}>
          <Box className={styles.textFieldContainer}>
            <Typography variant="body2">Primary Roles</Typography>
            <FormControl fullWidth variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="primaryRoles"
                    value={formik.values.primaryRoles}
                    onChange={formik.handleChange}
                    error={formik.touched.primaryRoles && Boolean(formik.errors.primaryRoles)}
                >
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                {formik.touched.primaryRoles && <FormHelperText>{formik.errors.primaryRoles}</FormHelperText>}
            </FormControl>
          </Box>
          <Box ml={2}>
            <Typography variant="subtitle2">Additonal Roles</Typography>
          </Box>
          <Box ml={2} mt={1}>
            <Chip size="small" label="Creator" className={styles.blueChip} />
            <Chip size="small" label="Curators" className={styles.purpleChip} /> <br />
            <Chip size="small" label="Collectors" className={styles.greenChip} />
            <Chip size="small" label="Other" className={styles.redChip} />
          </Box>
            {/* <Box display="flex" justifyContent="flex-end" mt={2}></Box>
                <Button variant="contained" disableElevation className={styles.profileCardButton} onClick={handleChangePassword}>Upload a new document</Button>
            </Box> */}
        </Grid>
      </Grid>
    </Box>
  )
}
