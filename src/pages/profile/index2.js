import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import createTheme from "@material-ui/core/styles/createTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import StarIcon from "@material-ui/icons/Star";
import { useState } from "react";
import {
  ProfileCardBillingInfo,
  ProfileCardInfo,
  ProfileCardRoles,
  ProfileCardSocialInfo,
  ProfileCardTeamMembers,
} from "src/components/profile";
import ProfileCardDigitalIdenity from "../../components/profile/components/ProfileCardDigitalIdentity";
import ProfileSidebar from "../../components/profile/components/ProfileSidebar";
import AppBarHome from "src/components/UI/appbarHome/AppBarHome";

const AVATAR_SIZE = 300;
const AVATAR_SPACING = 3.75;

const theme = createTheme({
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "KernRegular",
      },
      body1: {
        fontFamily: "KernRegular",
        fontSize: 14,
        lineHeight: "17px",
      },
      h5: {
        fontFamily: "KernRegular",
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  header: {
    maxWidth: 1440,
    margin: "auto",
  },
  grid: {
    maxWidth: 1440,
    marginLeft: 65,
    marginRight: 50,
    justifyContent: "center",

    [theme.breakpoints.up("xl")]: {
      margin: "auto",
    },
  },
  profileContainer: {
    position: "relative",

    "& > aside": {
      position: "absolute",
      right: 0,
      top: 215,

      [theme.breakpoints.up("xl")]: {
        position: "fixed",
        top: "25%",
      },
    },
  },
  hero: {
    height: 340,
    backgroundColor: "rgb(189, 223, 235)",
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: -140,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    marginRight: theme.spacing(AVATAR_SPACING),
    boxShadow: "3px 9px 18px -10px rgba(0, 0, 0, 0.5)",
  },
  displayName: {
    position: "relative",
    fontFamily: "KernBold",
    fontSize: 48,
    lineHeight: "58px",
    display: "flex",
    alignItems: "center",

    "& > .MuiSvgIcon-root": {
      color: "#6F6F6F",
      marginLeft: 27,
      fontSize: 22,
    },
  },
  description: {
    fontFamily: "KernItalic",
    fontSize: 18,
    lineHeight: "25px",
    color: "#535151",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "& > .MuiSvgIcon-root": {
      fontSize: 22,
      color: "#6F6F6F",
      marginRight: theme.spacing(2),
    },
  },
  formContainer: {
    position: "relative",
    marginTop: 11,
    marginLeft: 335 - 65,
    maxWidth: 880,
  },
  status: {
    position: "absolute",
    right: 0,
    top: -theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "right",

    "& > span": {
      color: "#6F6F6F",
    },
  },
  statusIndicator: {
    display: "inline-block",
    height: 14,
    width: 14,
    marginRight: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
    borderRadius: "100%",
  },
  titleGrow: {
    flexGrow: 1,
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  caption: {
    textAlign: "right",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    color: "#6F6F6F",
    fontSize: 14,
    lineHeight: "24px",

    "& > .wallet": {
      color: "#949494",
    },
  },
  likes: {
    paddingTop: theme.spacing(0.5),
    color: "#616161",

    "& > .MuiSvgIcon-root": {
      fontSize: 12,
      color: "#ED9526",
    },
  },
}));

export default function ProfilePage() {
  const s = useStyles();
  const [displayName, setDisplayName] = useState("Display name");
  const [descriptions, setDescriptions] = useState([
    "Architects of Taste: Feeding Minds and Stomachs.",
    "An experience design and creative studio of artists, architects, chefs, designers and strategists.",
  ]);
  const [members, setMembers] = useState([
    { name: "Member" },
    { name: "Member 2" },
    { name: "Member 3" },
  ]);

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container className={s.header}>
        <Grid item xs={12}>
          <AppBarHome />
        </Grid>
      </Grid>

      <div className={s.hero}>
        <div className={s.grid}>
          <Typography className={s.likes} align="right">
            <StarIcon /> <strong>3,456</strong> likes
          </Typography>
        </div>
      </div>

      <div className={s.profileContainer}>
        <ProfileSidebar />
        <div className={s.grid}>
          <div className={s.avatarContainer}>
            <Avatar className={s.avatar} />

            <div className={s.titleGrow}>
              <div className={s.titleContainer}>
                <Typography className={s.displayName} variant="h3">
                  {displayName}
                  <EditIcon />
                </Typography>
                <Typography>37.5K Followers</Typography>
              </div>
              <Typography className={s.caption}>
                37.5K Following &nbsp;
                <span className="wallet">
                  wallet address XX5550...RStu8900x
                </span>
              </Typography>
              <Typography className={s.description}>
                <div>
                  {descriptions.map((desc, index) => (
                    <span key={index}>
                      {desc} <br />
                    </span>
                  ))}
                </div>

                <EditIcon />
              </Typography>
            </div>
          </div>

          <div className={s.formContainer}>
            <Typography className={s.status}>
              Status:
              <span
                className={s.statusIndicator}
                style={{ background: "#BAF8D2" }}
              />
              <span>Active</span>
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} lg={8}>
                <ProfileCardInfo />
              </Grid>

              <Grid item xs={12} lg={4}>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <ProfileCardDigitalIdenity />
                  </Grid>
                  <Grid item xs={12}>
                    <ProfileCardRoles />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <ProfileCardSocialInfo />
              </Grid>

              <Grid item xs={12}>
                <ProfileCardTeamMembers members={members} />
              </Grid>

              <Grid item xs={12}>
                <ProfileCardBillingInfo />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </MuiThemeProvider>
  );
}
