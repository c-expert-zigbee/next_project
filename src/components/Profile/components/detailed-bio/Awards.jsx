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
    name: Yup.string("Enter award name")
        .required("Award name is required"),
    date: Yup.string("Enter award date")
        .required("Award date is required"),
    link: Yup.string("Enter award URL")
        .required("Link is required"),
});

export default function Awards(){
    const [awards, setAwards] = useState([
        {name: "", date: "", link: ""}
    ])
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      link: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  function handleAddAward() {
    setAwards([...awards, {title: "", date: "", link: ""}])
  }

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Box className={styles.profileCardTitleSecond}>
      <Typography className={styles.textFieldContainerSecond}>Awards</Typography>
        {awards.map((item, index) => (
            <Grid container key={index}>
                <Grid item xs={12} sm={6} md={4}>
                    <Box className={styles.textFieldContainerSecond}>
                        <Typography variant="body2">Award Name</Typography>
                        <CustomTextfield
                            placeholder="Enter name"
                            margin="dense"
                            name="name"
                            type="text"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            fullWidth
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box className={styles.textFieldContainerSecond}>
                        <Typography variant="body2">Date</Typography>
                        <CustomTextfield
                            placeholder="Enter date"
                            margin="dense"
                            name="date"
                            type="text"
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            error={formik.touched.date && Boolean(formik.errors.date)}
                            helperText={formik.touched.date && formik.errors.date}
                            fullWidth
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box className={styles.textFieldContainerSecond}>
                        <Typography variant="body2">Award link <Typography variant="body2" component="span" color="textSecondary">(optional)</Typography></Typography>
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
            </Grid>
        ))}
        <Button variant="contained" onClick={handleAddAward} disableElevation className={styles.profileCardButtonAdd} >
            <AddIcon fontSize="medium" /> Add Award
        </Button>
    </Box>
  )
}
