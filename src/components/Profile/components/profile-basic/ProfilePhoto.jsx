import Box from "@mui/material/Box";
import styles from "../profile.module.scss";
import Typography from "@mui/material/Typography";
import Avatar from '@mui/material/Avatar';
import AddIcon from '@material-ui/icons/Add';

export default function ProfilePhoto(){

    function handleChangeProfilePhoto() {
        alert("Change Profile Photo");
    }
  return (
    <Box className={styles.profileCardContainerGrey}>
      <Typography className={styles.profileCardTitle}>Profile Photo</Typography>
      <Box ml={2} className={styles.teamMembersListContainer}>
        <Avatar className={styles.avatarAddIcon} onClick={handleChangeProfilePhoto}>
            <AddIcon fontSize="small" />
        </Avatar>
      </Box>
    </Box>
  )
}
