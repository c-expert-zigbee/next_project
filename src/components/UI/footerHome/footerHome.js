import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
} from "@material-ui/core";
import { styled } from "@mui/system";

import styles from "./ui.module.css";
import instagram from "../../../styles/images/landingPage/instagram.svg";
import twitter from "../../../styles/images/landingPage/twitter.svg";
import facebook from "../../../styles/images/landingPage/facebook.svg";
import art from "../../../styles/images/waitlist/artcryption.png";
import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL } from "src/config/config";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { sendMailSubscribe } from "../../../store/slices/waitlist/waitlist";
import InputAdornment from "@mui/material/InputAdornment";
import { Arrowwaitlist } from "./Arrowwaitlist";
import Image from "next/image";
import { LogoSvg } from "./LogoSvg";
import main from "../../../styles/images/waitlist/artcryption.png";
import ArrowForward from "@material-ui/icons/ArrowForward";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";

export default function FooterHome() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  function handleSubscribe() {
    dispatch(sendMailSubscribe(email));
  }
  const GridContainer = styled(Grid)(
    ({ theme }) => `&&{
      margin: "auto";
    display: grid;
    justify-items:left;
    font-family: "KernRegular";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.16px;
    
    }
      `
  );
  const MainHeadTypography = styled(Typography)(
    ({ theme }) => `&&{
      font-family: 'HafferBold';
      font-style: normal;
      font-weight: 700;
      font-size: 3rem;
      line-height: 120px;
      letter-spacing: 0.8px;
      opacity:1;
      color: #000000;
    margin-bottom:4%;}
      `
  );
  const SubText = styled(Typography)(
    ({ theme }) => `&&{
      font-family: 'KernRegular';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
max-width:25vw;
color: #000000;
 opacity:1;
      }
      `
  );

  const SubscribeTypography = styled(Typography)(
    ({ theme }) => `&&{
      font-family: 'KernMedium';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 26px;
letter-spacing: 0.16px;
color: #000000;
      opacity:1;
      }
      `
  );
  const BottomText = styled(Typography)(
    ({ theme }) => `&&{
      font-family: 'KernRegular';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
letter-spacing: 1px;
text-transform: uppercase;

color: #6F6F6F;
      opacity:1;
      }
      `
  );

  const SubscribeTextField = styled(TextField)({
    paddingBottom: "8rem",

    width: "22vw",
    "& label.MuiFormLabel-root": {
      color: "#fff",
      fontFamily: "KernRegular",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "16px",
      letterSpacing: "0.16px",
      color: " #6F6F6F",
    },
    "& .MuiInput-underline:after": {
      borderBottom: " 1px solid #000000;",
    },
    "& .MuiInputBase-root:before": {
      borderBottom: " 1px solid #000000;",
    },
    "& .MuiInputAdornment-root": {
      marginBottom: ".6rem",
      marginRight: "1rem",
    },
    "& .MuiInputBase-root:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid transparent",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
        borderBottomColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
        borderBottomColor: "black",
      },
    },
  });
  const StyledButton = styled(Button)({
    backgroundColor: "transparent !important",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04) !important"
    },
    "& span.MuiButton-label": {
      textTransform: "none",
      textAlign: "left",
      alignItems: "left",
      padding: 0,
    },
    "& span.MuiButton-root": {
      fontFamily: "KernRegular",
      fontStyle: "normal",
      fontSize: "16px",
      letterSpacing: "0.16px",
      opacity: 1,
      color: "#000000",
    },
  });

  const FooterDiv = styled("div")(
    ({ theme }) => `&&{
      background: #E7E7EA;
    
  }
    `
  );
  const BaseBox = styled(Box)(
    ({ theme }) => `&&{
      background: white;
      height:1rem
    
  }
    `
  );
  return (
    <>
      <FooterDiv>
        <Box padding="4rem" spacing={1}>
          <Grid container>
            <Grid item xs={6} md={10} flexGrow={1}>
              <MainHeadTypography variant="h2">artcryption</MainHeadTypography>
            </Grid>
            <Grid item xs={6} md={2} margin="auto">
              {/* <Image src={main} width="171.99px" height="245px" alt="main" />; */}
              <Image src={main} width="87px" height="90px" alt="main" />;
            </Grid>
            <Grid item xs={4} md={7}>
              {" "}
              <SubText variant="h2">
                Artcryption is a platfrom for creatives, artists, designers and
                IP innovators to share, protect and sell their works showcasing
                the best in creativity.{" "}
              </SubText>
            </Grid>
            <GridContainer item xs={6} md={2} justifyContent="left">
              <StyledButton href="/drops" variant="text">
                Drops
              </StyledButton>
              <StyledButton href="/drops" variant="text">
                About
              </StyledButton>
              <StyledButton href="/drops" variant="text">
                How It Works
              </StyledButton>
              <StyledButton href="/drops" variant="text">
                Curators
              </StyledButton>
              <StyledButton href="/drops" variant="text">
                Feed
              </StyledButton>
            </GridContainer>

            <Grid item xs={6} md={3} flexGrow={1}>
              <SubscribeTypography variant="h3">
                {" "}
                Subscribe to our newsletter
              </SubscribeTypography>

              <SubscribeTextField
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <ArrowForward className={styles.icon} size="small" />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                label="Enter Your email"
              />
            </Grid>
          </Grid>
        </Box>
        <Divider paddingLeft="4rem" paddingRight="4rem" variant="middle" />
        <Box
          paddingLeft="4rem"
          paddingRight="4rem"
          spacing={1}
          alignItems="center"
        >
          <Grid container>
            <Grid item xs={3} md={3}>
              <IconButton aria-label="fb" disabled size="small">
                <FacebookOutlinedIcon />
              </IconButton>
              <IconButton aria-label="twitter" disabled size="small">
                <Twitter />
              </IconButton>
              <IconButton aria-label="insta" disabled size="small">
                <Instagram />
              </IconButton>
            </Grid>

            <Grid item xs={6} md={6} flexGrow={2}>
              {" "}
              <BottomText variant="h2">
                © 2022. ARTCRYPTION INC., All Rights Reserved.{" "}
              </BottomText>
            </Grid>
            <Grid item xs={3} md={3} justifyContent="right">
              <StyledButton href="/drops" variant="text">
                PRESS
              </StyledButton>
              <StyledButton href="/drops" variant="text">
                PRIVACY
              </StyledButton>
              <StyledButton href="/drops" variant="text">
                TERMS
              </StyledButton>
            </Grid>
          </Grid>
        </Box>
      </FooterDiv>
      <Box></Box>
    </>
  );
}
