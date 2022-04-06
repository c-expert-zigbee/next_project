import { useState } from "react";
import Box from "@mui/material/Box";
import styles from "../profile.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';

const notifications = [
    {id: 1, title: "Items Sold", subtitle: "When someone bids on one of your items" },
    {id: 2, title: "Bid Activity", subtitle: "When someone bids on one of your items" },
    {id: 3, title: "Price Change", subtitle: "When an item you made an offer on changes in price" },
    {id: 4, title: "Auction Expiration", subtitle: "When a timed auction you create ends" },
    {id: 5, title: "Outbid", subtitle: "When an offer you placed is exceeded by another user" },
    {id: 6, title: "Owned item Updates", subtitle: "When a significant update occurs for one of the items you have purchased" },
    {id: 7, title: "Successful Purchase", subtitle: "When you successfully buy an item" },
    {id: 8, title: "Newsletter", subtitle: "Occasional updates from our team" },
    {id: 9, title: "Referral Successful", subtitle: "When you successfully referred another user" },
    {id: 10, title: "Funds Added/Removed", subtitle: "When funds are added or removed from your artcryption app" },
    {id: 11, title: "Drop Reminder", subtitle: "When ever there is a new listing" },
    {id: 12, title: "Event Reminder", subtitle: "When ever there is a new event" },
    {id: 13, title: "Followers / Following", subtitle: "When ever you follow an account or an account follows you" },
    {id: 14, title: "Digital Identity Verification", subtitle: "When your digital identity has been successfully verified" },
    {id: 15, title: "Asset Liked", subtitle: "When your asset is liked" },
]

export default function Notifications(){
    const [checked, setChecked] = useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Box className={styles.profileCardContainer}>
      <Typography className={styles.profileCardTitleSecond}>Notifications</Typography>
      <Grid container>
        <Grid item xs={12}>
            <List>
                {notifications.map((item, index) => (
                    <ListItem key={index} role={undefined} dense button onClick={handleToggle(item)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(item) !== -1}
                                tabIndex={-1}
                                color="default"
                                disableRipple
                                inputProps={{ 'aria-labelledby': `checkbox-list-label-${index}` }}
                            />
                        </ListItemIcon>
                        <ListItemText primary={item.title} secondary={item.subtitle} />
                    </ListItem>
                ))}
            </List>
        </Grid>
      </Grid>
    </Box>
  )
}
