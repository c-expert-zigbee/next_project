import {useState} from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styles from "./profile.module.scss";
import Image from "next/image";
import CreateIcon from '@material-ui/icons/Create';
import Profile from "src/components/UI/PopUps/Profile";

export default function ProfileDetails(){
  const [displayName, setDisplayName] = useState({
    isEditing: false,
    value: "Display Name"
  });
  const [bioText, setBioText] = useState({
    isEditing: false,
    value: `Architects of Taste: Feeding Minds and Stomachs. \nAn experience design and creative studio of artists, architects, chefs, designers and strategists.`
  })
  const [profile, setProfilePopUp] = useState(false);

  function handleEditDisplayNameChange(e) {
    setDisplayName({...displayName, value: e.target.value});
  }
  function handleEditBioTextChange(e) {
    setBioText({...bioText, value: e.target.value});
  }

  function handleEditDisplayName() {
    setDisplayName(prev => ({...displayName, isEditing: !prev.isEditing}));
  }
  function handleEditBioText() {
    setBioText(prev => ({...bioText, isEditing: !prev.isEditing}));
  }

  return (
    <Grid container className={styles.profileDetailsContainer}>
      <Grid item xs={3} sm={3}>
        <Box display="flex" justifyContent="flex-end" className={styles.displayImageContainer}>
          <Image src="/images/curators/pierre.svg" layout="fill" className={styles.displayImage} alt="profile-avatar" />
        </Box>
      </Grid>
      <Grid item xs={9} sm={9} className={styles.profileDetailsSection}>
        <Grid container alignItems="center">
       

          <Grid item xs={12} sm={7}>   
          <Typography className={styles.curatorName} onClick={()=>setProfilePopUp(true)}>Curator</Typography>
           
            <Box className={styles.displayNameContainer}>
              {!displayName.isEditing && <Typography className={styles.displayName} onClick={()=>setProfilePopUp(true)}>{displayName.value.slice(0, 30)}</Typography>}
              {displayName.isEditing &&
                <Box component="form" onSubmit={handleEditDisplayName}>
                  <input className={styles.editDisplayBox} style={{width: `${displayName.value.length}ch`}} autoFocus value={displayName.value} onChange={handleEditDisplayNameChange} />
                </Box>
              }
              <Box>
                <IconButton onClick={handleEditDisplayName}><CreateIcon className={styles.pencilIcon} fontSize="small" /></IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box display="flex" justifyContent="flex-end" mr={1}>
              <Typography variant="caption">37.5k Followers</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box className={styles.walletAddressContainer}>
          <Typography variant="caption">37.5k Followers {"   "}Wallet Address: XX5550...RStu8900x</Typography>
        </Box>
        <Box className={styles.bioContainer}>
          {!bioText.isEditing && 
            <Typography component="pre" variant="body1" className={styles.bio}>{bioText.value}</Typography>
          }
          {bioText.isEditing &&
            <textarea className={styles.editBioText} maxLength="300" style={{width: `${bioText.value.length}ch`}} autoFocus value={bioText.value} onChange={handleEditBioTextChange} />
          }
          <Box ml={2}>
            <IconButton onClick={handleEditBioText}><CreateIcon className={styles.pencilIcon} fontSize="small" /></IconButton>
          </Box>
        </Box>
        <Profile name={displayName.value} open={profile} setOpen={setProfilePopUp} />
      </Grid>
    </Grid>
  )
}
