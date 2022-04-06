/** @format */

import React from "react";
import {
	Accordion,
	Grid,
	Switch,
	Typography,
	AccordionSummary,
	AccordionDetails,
	makeStyles,
	styled,
	alpha,
	ToggleButtonGroup,
	ToggleButton,
} from "@material-ui/core";
import { blue } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
	selected: {},
}));

const ToggleSwitch = () => {
	const classes = useStyles();
	const label = { inputProps: { "aria-label": "Switch demo" } };
	const ToggleSwitch = styled(Switch)(({ theme }) => ({
		"& .MuiSwitch-switchBase.Mui-checked": {
			color: blue[200],
			"&:hover": {
				backgroundColor: alpha(blue[200], theme.palette.action.hoverOpacity),
			},
		},
		"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
			backgroundColor: blue[200],
		},
	}));
	return (
		<>
			<ToggleSwitch className={classes.selected} {...label} size='small' />
		</>
	);
};

export default ToggleSwitch;
