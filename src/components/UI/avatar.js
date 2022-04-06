import { Avatar } from "@material-ui/core";
import React from "react";

export default function AvatarCustom(props) {
  return (
    <Avatar
      style={{ width: 24, height: 24, marginRight: 5, padding: 1 }}
      {...props}
    />
  );
}
