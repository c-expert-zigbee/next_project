/** @format */

import React from "react";
import { Grid, makeStyles, Box } from "@material-ui/core";
// import Upload from "../../assets/icons/upload.svg";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const useStyles = makeStyles({
	artWorkWrapper: {
		border: "0.546485px dashed #9A9A9A",
		width: "220px",

		background: "#FFFFFF",
		box: "border-box",
		borderRadius: "4.37188px",
		textAlign: "center",
	},
	headingWrapper: {
		marginTop: "10px",
		marginBottom: "10px",
		color: "#060606",
	},
	heading: {
		fontSize: 9,
	},
	subHeading: {
		fontFamily: "Gilroy-Regular",
		fontSize: 7,
		textAlign: "center",
		color: "#9A9A9A",
		lineHeight: "9px",
	},
	submitIcon: {
		color: "#6097B8",
		marginTop: "10px",
		marginBottom: "10px",
	},
	br: {
		padding: "0px",
		margin: "0px",
	},
});

const FileUploader = () => {
	const classes = useStyles();
	return (
		<Grid
			container
			item
			className={classes.artWorkWrapper}
			alignItems='center'
			justifyContent='center'>
			<Grid xs={12} item className={classes.headingWrapper}>
				<span className={classes.heading}>Upload Additional Documents</span>
			</Grid>
			<Grid item>
				<div className={classes.subHeading}>
					add license agreements, appraisal reports condition reports,
					insurance, copyright registration etc.
				</div>
			</Grid>
			<Grid item xs={12}>
				<CloudUploadOutlinedIcon className={classes.submitIcon} />
			</Grid>
		</Grid>
	);
};

export default FileUploader;

{
	/* <span className={classes.subHeading}>
					add license agreements, appraisal reports condition reports,
					insurance, copyright registration etc.
				</span> */
}
