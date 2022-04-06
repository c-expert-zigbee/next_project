import React, { useState } from "react";
import {
  Grid,
  // Avatar,
  // Icon,
  IconButton,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import { styled } from "@mui/system";

// import logOut from "../../../styles/images/home/logout.png";
import ui from "./ui.module.css";
// import image from "../../../styles/images/home/Image.png";
// import Cart from "src/components/Cart/Cart";
import Link from "next/link";
// import WhiteButton from "../../landingPageNew/components/whiteButton";

import Drawer from "@material-ui/core/Drawer";

import AppBar from "@material-ui/core/AppBar";
import list from "../../../styles/images/landingPage/list.png";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import CustomButton from "../Button";
import Image from "next/image";
// import WaitListSubscriptionCont from "../../../containers/waitListSubscription/waitListSubscriptionCont";
const drawerWidth = 220;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  gridBigScreen: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    display: "flex",
    paddingTop: "30px",
    paddingBottom: "24px",
    maxHeight: "112px",
  },
  appBar: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "unset",
    },
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "white",
    color: "black",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    // marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(8) + 1,
    },
  },
  toolbar: {
    marginTop: 8,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconStyle: {
    position: "relative",
    left: 8,
    top: 3,
    fontSize: 18,
    marginRight: 5,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuArrow: {
    fontSize: 20,
  },
});

function AppbarHome({ classes }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [size, setSize] = useState(false);
  const [showWaitList, setShowWaitList] = useState(false);

  const handleDrawer = () => {
    setOpenDrawer((openDrawer) => !openDrawer);
  };
  const GridContainer = styled(Grid)`
    margin: "0px";
    width: "100%";
  `;
  return (
    <div>
      {/* {waitListDialog?.showDialogSubscripiton && (
          <WaitListSubscriptionCont
            open={waitListDialog?.showDialogSubscripiton}
            fullWidth
            maxWidth="md"
            closeDialog={openHideDialogSubsciription}
          />
        )} */}
      <Grid container>
        <Grid item xs={12}>
          <AppBar elevation={0} position="fixed" className={classes.appBar}>
            <Toolbar style={{ paddingTop: 5, paddingBottom: 10 }}>
              <IconButton
                aria-label="Open drawer"
                onClick={handleDrawer}
                edge="start"
                className={classes.toolbar}
              >
                <img src={list.src} alt="hamburger" />
              </IconButton>
              {/* <div className="logoholder">
                  <img alt="no-img" src={mainLogo} className="imageIconGuy" />
                </div> */}
              <Link href="/" passHref>
                <div className={ui.artCryptionHeadSmallDrawer}>artcryption</div>
              </Link>
              <div className={classes.grow} />
              {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: 13,
                  }}
                  >
                  <div>
                    <img src={search} alt="no" className="imgProfile" />
                  </div>
                  <div>
                    <img src={heart} alt="no" className="imgProfile" />
                  </div>
                  <div
                    onClick={() => {
                      setOpenCart(true)
                    }}
                  >
                    <img src={shopping} alt="no" className="imgProfile" />
                  </div>
                  <div>
                    <img src={bell} alt="no" className="imgProfile" />
                  </div>
                  <Avatar src={image} />
                </div> */}
            </Toolbar>
            <Drawer
              anchor={"left"}
              open={openDrawer}
              onClose={() => {
                setOpenDrawer(false);
              }}
            >
              <List>
                <ListItem>
                  <div className={ui.logoholder}>
                    <img
                      alt="no-img"
                      src={mainLogo.src}
                      style={{ width: 40 }}
                      className={ui.imageIconGuy}
                    />
                    <div className={ui.artCryptionHead}>artcryption</div>
                  </div>
                </ListItem>
                <Divider />
                <Link href="/how-it-works" passHref>
                  <ListItem button>
                    <div className={ui.artCryptionHeadDrawer}>how it works</div>
                  </ListItem>
                </Link>
                <Divider />
                <Link href="/feed" passHref>
                  <ListItem button>
                    <div className={ui.artCryptionHeadDrawer}>feed</div>
                  </ListItem>
                </Link>
                <Divider />
                <Link href="/curators" passHref>
                  <ListItem button>
                    <div className={ui.artCryptionHeadDrawer}>curators</div>
                  </ListItem>
                </Link>
                <Divider />
                <Link href="/blog" passHref>
                  <ListItem button>
                    <div className={ui.artCryptionHeadDrawer}>blog</div>
                  </ListItem>
                </Link>
                <Divider />
                <Link href="/drops" passHref>
                  <ListItem button>
                    <div className={ui.artCryptionHeadDrawer}>drops</div>
                  </ListItem>
                </Link>
                <Divider />
              </List>
            </Drawer>
          </AppBar>
          <div className={classes.appBar}>
            <br />
            <br />
            <br />
            <br />
          </div>
        </Grid>
      </Grid>

      {/* <Cart
          dialog={openCart}
          size={size}
          onClose={() => {
            setOpenCart(false);
          }}
        /> */}
      <GridContainer className={classes.gridBigScreen} container>
        <Grid item xs={12} md={3}>
          <Link href="/">
            <div className={ui.logoholder}>
              <Image
                alt="no-img"
                width="40.09px"
                height="57.12px"
                src={mainLogo.src}
                className={ui.imageIconGuy}
              />
              <div className={ui.artCryptionHead}>artcryption</div>
            </div>
          </Link>
        </Grid>
        <Grid item xs={12} md={7} className={ui.grid_options}>
          <div className={ui.appBarHomeFlexBox}>
            <div className={ui.pointer}>
              <Link href="/how-it-works" passHref>
                <span> how it works</span>
              </Link>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className={ui.pointer}>
              <Link
                style={{ textDecoration: "none", color: "unset" }}
                href="/feed"
                passHref
              >
                <span> feed</span>
              </Link>
              &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            </div>
            {/* <div className="pointer">creators &nbsp;&nbsp;</div> */}
            <div className={ui.pointer}>
              <Link href="/curators" passHref>
                <span> curators &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</span>
              </Link>
            </div>
            <div className={ui.pointer}>
              <Link href="/blog" passHref>
                <span>blog</span>
              </Link>
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            </div>
            <div className={ui.pointer}>
              <Link href="/drops" passHref>
                <span>drops</span>
              </Link>
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
            </div>
            {/* <div className={ui.pointer}>
                <Link href="/press">
                  <span>press release </span>
                </Link>
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              </div> */}
          </div>
          {/* <div>
              <img src={search} alt="no" className="imgProfile" />
            </div>
            <div>
              <img src={heart} alt="no" className="imgProfile" />
            </div>
            <div
              onClick={() => {
                setOpenCart(true)
              }}
            >
              <img src={shopping} alt="no" className="imgProfile" />
            </div>
            <div>
              <img src={bell} alt="no" className="imgProfile" />
            </div> */}
          {/* <div>
              <img src={bell} alt="no" className="imgProfile" />
            </div> */}
          {/* <Avatar src={image} /> */}
          {/* <div>
              <img src={logOut} alt="no" className="imgProfile" />
            </div> */}
        </Grid>
        <Grid item md={1}>
          <Link href="/subscribe">
            <button
              className={ui.blackButtonAppbarHome}
              // onClick={openHideDialogSubsciription}
            >
              JOIN WAITLIST
            </button>
          </Link>
        </Grid>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(AppbarHome);
