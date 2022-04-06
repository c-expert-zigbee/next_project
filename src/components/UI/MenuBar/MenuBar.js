import {
  Analytics,
  CloudUpload,
  Collections,
  DynamicFeed,
  Feed,
  Message,
  Monitor,
  Person,
  ShoppingCart,
} from "@mui/icons-material";
import React, { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Fab, List, ListItemIcon, Tooltip } from "@mui/material";
import cn from "classnames";
import styles from "./MenuBar.module.css";
import { styled } from "@mui/system";
// import profile from "../../../../../public/images/creator/profile.png";

import cloudIcon from "src/../public/images/collectionPage/upload.svg";
const data = [
  { name: "profile page", icon: "profile" },
  { name: "events - drops and exhibitions", icon: "events" },
  { name: "cart", icon: "cart" },
  { name: "IP monitor", icon: "ip" },
  { name: "Messaging and Notification", icon: "messaging" },
  { name: "Analytics", icon: "analytics" },
  { name: "Feed", icon: "feed" },
  { name: "Collection Page", icon: "collection" },
  { name: "Upload", icon: "upload" },
];

function MenuBar({ setUploadOpen }) {
  const [selected, setSelected] = useState(null);

  const MenuFabBar = styled(Fab)(
    ({ theme }) => `
    
    border-radius: 0;
    width: 53px;
    height: 43px;
    margin: 8px 0;
    box-shadow: none;
    `
  );
  return (
    <div className={cn(styles.mainCont)}>
      {data.map((ele, i) => (
        <Tooltip key={i} title={ele.name} placement="left" arrow>
          <MenuFabBar
            eleva
            style={{
              background: selected === i ? "#2B6DAB" : "#E9F4F8",
              color: selected === i ? "white" : "#6F6F6F",
            }}
            onClick={() => {
              setSelected(i);
              if (ele.name === "Upload") setUploadOpen(true);
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                margin: `auto 16px`,
                justifyContent: "center",
              }}
            >
              <img
                src={`/images/collectionPage/${ele.icon}.svg`}
                style={{
                  color: selected === i ? "white" : "#6F6F6F",
                }}
              />
            </ListItemIcon>
          </MenuFabBar>
        </Tooltip>
      ))}
    </div>
  );
}
export default MenuBar;
