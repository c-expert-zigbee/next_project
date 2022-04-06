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
    title: Yup.string("Enter article title")
        .required("Article title is required"),
    date: Yup.string("Enter article date")
        .required("Article date is required"),
    link: Yup.string("Enter article URL")
        .required("Link is required"),
});

export default function Press(){
    const [articles, setArticles] = useState([
        {title: "", date: "", link: ""}
    ])
  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      link: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  function handleAddArticle() {
    setArticles([...articles, {title: "", date: "", link: ""}])
  }

  function handleSubmit(values) {
    console.log(values);
  }

  return (
    <Box className={styles.profileCardContainer}>
      <Typography className={styles.profileCardTitleSecond}>Press</Typography>
        {articles.map((item, index) => (
            <Grid container key={index}>
                <Grid item xs={6} sm={6} md={4}>
                    <Box className={styles.textFieldContainerSecond}>
                        <Typography variant="body2">Title of Article</Typography>
                        <CustomTextfield
                        placeholder="Enter title"
                        margin="dense"
                        name="title"
                        type="text"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                        fullWidth
                        />
                    </Box>
                </Grid>
                <Grid item xs={6} sm={6} md={4}>
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
                        <Typography variant="body2">Article link</Typography>
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
        <Button variant="contained" onClick={handleAddArticle} disableElevation className={styles.profileCardButtonAdd} >
            <AddIcon fontSize="medium" /> {'  '} Add Article
        </Button>
    </Box>
  )
}
