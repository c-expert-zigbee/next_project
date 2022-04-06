import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/AddSharp';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ProfileCard from './ProfileCard';

const useStyles = makeStyles((theme) => ({
  avatar: {
    '& > .MuiAvatar-root': {
      width: 100,
      height: 100,
      boxShadow: '3px 9px 18px -10px rgba(0, 0, 0, 0.5)',
    },

    '& > .MuiTypography-root': {
      marginTop: theme.spacing(2),
      textAlign: 'center',
      color: '#6F6F6F',
    },
  },
  add: {
    width: 100,
    height: 100,
    backgroundColor: '#F5F5F5',
    boxShadow: '3px 9px 18px -10px rgba(0, 0, 0, 0.5)',
  },
}));

export default function ProfileCardTeamMembers({ members }) {
  const s = useStyles();

  return (
    <ProfileCard title="Team Members">
      <Grid container spacing={4}>
        {members.map((m, index) => (
          <Grid item key={index}>
            <div className={s.avatar}>
              <Avatar src={m.link} />
              <Typography>{m.name}</Typography>
            </div>
          </Grid>
        ))}

        <Grid item>
          <IconButton size="medium" className={s.add}>
            <AddIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </ProfileCard>
  );
}
