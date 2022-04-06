import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Input from '../../Input';
import ProfileCard from './ProfileCard';

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: 'center',

    '& > *:first-child': {
      marginBottom: theme.spacing(3),
    },
  },
}));

export default function ProfileCardSocialInfo(props) {
  const s = useStyles();

  return (
    <ProfileCard title="Social information">
      <Grid container spacing={2} className={s.container}>
        <Grid item xs={12}>
          <Input label="Website" placeholder="www.yourwebsite.com" />
        </Grid>

        <Grid item xs={12}>
          <Input inline label="Facebook" placeholder="www.yourwebsite.com" />
        </Grid>

        <Grid item xs={12}>
          <Input inline label="Instagram" placeholder="www.yourwebsite.com" />
        </Grid>

        <Grid item xs={12}>
          <Input inline label="Twitter" placeholder="www.yourwebsite.com" />
        </Grid>
      </Grid>
    </ProfileCard>
  );
}
