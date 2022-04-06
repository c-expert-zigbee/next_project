import React from "react";
import { Typography, makeStyles, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles({
  root: (props) => ({
    backgroundColor: props.backgroundColor,
    backgroundImage: `url(${props.backgroundURL})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "320px",
    color: props.textColor,
    paddingLeft: "20px",
    paddingTop: "30px",
    position: "relative",
  }),
  title: (props) => ({
    paddingTop: "20px",
    fontWeight: "bold",
    color: props.headerColor,
  }),
  pos: {
    marginBottom: 12,
  },
  learn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    textAlign: "right",
    paddingRight: "30px",
    paddingTop: "30px",
  },
  link: (props) => ({
    textDecoration: "none",
    color: props.linkColor,
  }),
});

export default function CardItem(props) {
  const classes = useStyles(props);
  const { showDescription } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {showDescription ? (
            <div>
              Register your assets on Artcyption and learn how it works.
              Benefits include:
              <ul>
                <li>verified secure data</li>
                <li>monetizing digital art (NFTs) </li>
                <li> alternative copyright protection</li>
                <li>faster and secure payments using crypto or fiat</li>
                <li> digital identity verifications</li>
                <li> IP monitor</li>
              </ul>
            </div>
          ) : (
            props.desc
          )}
        </Typography>
        <div className={classes.learn}>
          <a href="#" className={classes.link}>
            <p>Learn more</p>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
