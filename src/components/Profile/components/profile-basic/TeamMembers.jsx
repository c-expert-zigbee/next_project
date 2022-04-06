import Box from "@mui/material/Box";
import styles from "../profile.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Image from "next/image";
import member1 from "public/images/profile/avatar.png";

export default function TeamMembers(){
    const [members, setMembers] = useState([member1, member1]);

  function handleAddMember() {
    setMembers([...members, member1]);
  }

  return (
    <Box className={styles.profileCardContainerGrey}>
      <Typography className={styles.profileCardTitle}>Team Members</Typography>
      <Box ml={2} className={styles.teamMembersListContainer}>
            {members.map((item, index) => (
              <Avatar className={styles.avatar} key={index}>
                <Image alt={`avatar ${index}`} src={item} width={90} height={90} />
              </Avatar>
            ))}
            <Avatar className={styles.avatarAddIcon} onClick={handleAddMember}>
                <AddIcon fontSize="small" />
            </Avatar>
      </Box>
    </Box>
  )
}
