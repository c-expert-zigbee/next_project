import { useState } from "react";
import Box from "@mui/material/Box";
import styles from "../profile.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CustomTextfield from "../../../UI/textfield";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const validationSchema = Yup.object({
//   uploadDocument: Yup.string("Please upload a document")
//     .required("Upload a document")
// });

export default function DigitalIdentity(){
  const [values, setValues] = useState({
    images: [],
    videos: []
  })

  const [valueInfo, setValueInfo] = useState("");

  // const formik = useFormik({
  //   initialValues: {
  //     uploadDocument: ""
  //   },
  //   validationSchema: validationSchema,
  //   onSubmit: (values) => handleSubmit(values),
  // });

  function handleUploadDocument({target}) {
    const fileReader = new FileReader();
    const name = target.accept.includes('image') ? 'images' : 'videos';

    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
        setValues((prevState) => ({
            [name]: [...prevState[name], e.target.result]
        }));
    };
    setValueInfo(target.files[0])
  }

  // function handleSubmit(values) {
  //   console.log(values);
  // }

  return (
    <Box className={styles.profileCardContainerGrey}>
      <Typography className={styles.profileCardTitle}>Digital Identity</Typography>
      <Grid container>
        <Grid item xs={12}>
          <Box className={styles.textFieldContainer}>
            <Typography variant="body2">Upload Document</Typography>
            <CustomTextfield
              placeholder="Drivers license"
              margin="dense"
              name="uploadDocument"
              type="text"
              value={valueInfo.name}
              // value={formik.values.uploadDocument}
              // onChange={formik.handleChange}
              // error={formik.touched.uploadDocument && Boolean(formik.errors.uploadDocument)}
              // helperText={formik.touched.uploadDocument && formik.errors.uploadDocument}
              fullWidth
            />
          </Box>
          <Box display="flex" alignItems="center" pl={2}>
                <CheckCircleIcon fontSize="small" /> &nbsp;
              <Typography variant="body2">Status: Confirmed</Typography>
            </Box>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button variant="contained" component="label" disableElevation className={styles.profileCardButton} >
              Upload a new document
              <input accept="image/*" type="file" onChange={handleUploadDocument} hidden />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
