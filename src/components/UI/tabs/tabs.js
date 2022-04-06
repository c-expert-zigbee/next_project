import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 80,
      width: "100%",
      backgroundColor: "black",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTabsTwo = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "black",
    marginTop: -10,

    // paddingTop: 18,
    fontFamily: "KernRegular",
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: 20,
    marginLeft: theme.spacing(0),
    "&:focus": {
      opacity: 1,
      color: "rgba(0, 0, 0, 0.5)",
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "black",
    // paddingTop: 18,
    fontFamily: "KernRegular",
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: 10,
    marginLeft: 8,
    "&:focus": {
      opacity: 1,
      color: "rgba(0, 0, 0, 0.5)",
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "KernRegular",
    fontSize: 18,
    color: "black",
  },

  demo2: {
    backgroundColor: "white",
    fontFamily: "KernRegular",
  },
  demo3: {
    marginLeft: -160,
    backgroundColor: "white",
    fontFamily: "KernRegular",
    [theme.breakpoints.down("xs")]: {
      marginLeft: -70,
    },
  },
  demoFive: {
    backgroundColor: "white",
    fontFamily: "KernRegular",
    height: 48,
  },
}));

export default function CustomizedTabs({ value, onChange }) {
  const classes = useStyles();
  const [valueSecond, setValueSecond] = React.useState(0);

  const handleChange = (event, newValue) => {
    onChange(newValue);
  };
  const handleChangeSecond = (event, newValue) => {
    setValueSecond(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          centered
        >
          <StyledTab label={<span className="tabCustom"> collections</span>} />
          <StyledTab label={<span className="tabCustom"> sale</span>} />
          <StyledTab label={<span className="tabCustom"> curated</span>} />
          <StyledTab label={<span className="tabCustom"> purchased</span>} />
        </StyledTabs>
      </div>
      {value === 1 ? (
        <div className={classes.demo3}>
          <StyledTabs
            value={valueSecond}
            onChange={handleChangeSecond}
            aria-label="styled tabs example"
            centered
          >
            <StyledTabsTwo
              label={<span className="tabCustomTwo"> sale</span>}
            />
            <StyledTabsTwo
              label={<span className="tabCustomTwo"> auction</span>}
            />
            <StyledTabsTwo
              label={<span className="tabCustomTwo">license </span>}
            />
          </StyledTabs>
        </div>
      ) : (
        <div className={classes.demoFive}></div>
      )}
    </div>
  );
}
