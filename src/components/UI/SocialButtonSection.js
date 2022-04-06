import React from "react";
import { Grid, Typography } from "@material-ui/core";
import WhiteButton from "./HomePageWhiteButton";
import styles from "src/components/Homepage/components/homePage.module.scss";
import arrow from "src/styles/images/creator/Icon.png";

import Link from "next/link";
import Image from "next/image";
import {
  INSTAGRAM_URL,
  LINKED_IN_URL,
  DISCORD_URL,
  FACEBOOK_URL,
  TWITTER_URL,
} from "src/config/config";

export default function SocialButtonSection() {
  const socialButtons = [
    { name: "LinkedIn", link: LINKED_IN_URL },
    { name: "Instagram", link: INSTAGRAM_URL },
    { name: "Discord", link: DISCORD_URL },
    { name: "Twitter", link: TWITTER_URL },
    { name: "Facebook", link: FACEBOOK_URL },
  ];
  return (
    <div className={styles.buttonSection}>
      {socialButtons.map((s) => (
        <a href={s.link} target="_blank" rel="noreferrer" key={s}>
          <WhiteButton title={s.name} />
        </a>
      ))}
    </div>
  );
}

//UISTRUC
