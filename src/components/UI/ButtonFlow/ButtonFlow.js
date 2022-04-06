import { Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./ButonFlowStyle.module.css";
import cn from "classnames";
import { styled } from "@mui/system";

function ButtonFlow({ num, category, setCategory }) {
  let data = [
    { i: 1, category: "Curators" },
    { i: 2, category: "Collectors" },
    { i: 3, category: "Categories" },
    { i: 4, category: "On Sale" },
    { i: 5, category: "Live Auctions" },
    { i: 6, category: "Current Drops" },
    { i: 7, category: "Highest Sales" },
    { i: 8, category: "Collections" },
    { i: 19, category: "New Listings" },
  ];
  const [selected, setSelected] = useState(false);
  const [click, setClicked] = useState(null);
  const MenuButton = styled(Button)(
    ({ theme }) => `&&{
    font-family: Kern;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.022em;
    text-align: center;
   
    background: #e7e7e7;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border-radius: 50%;
    width: 75px;
    color: black;
    text-transform: none;}

    `
  );
  return (
    <div className={cn(styles.ButtonContainer)}>
      <div
        className={cn(styles.selected)}
        onClick={() => setSelected((state) => !state)}
      >
        Customize feed
      </div>
      {selected &&
        data.map((ele, i) => (
          <MenuButton
            key={ele.i}
            onClick={() => {
              setClicked(i);
              setCategory(ele.category);
            }}
            className={cn(styles.unselected)}
            style={{
              background: click === i ? "#E3C6C9" : "#E5E5E5",
            }}
          >
            {ele.category}
          </MenuButton>
        ))}
    </div>
  );
}

export default ButtonFlow;
