import Grid from '@material-ui/core/Grid';
import MuiLink from '@material-ui/core/Link';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from 'next/link';
import Input from '../../Input';
import ProfileCard from './ProfileCard';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'block',
    color: '#000',
    marginTop: theme.spacing(3.5),
    textAlign: 'right',
    textDecoration: 'underline',
  },
}));

export default function ProfileCardInfo(props) {
  const s = useStyles();

  return (
    <ProfileCard title="Name/Organization">
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Input label="First Name" placeholder="Your first name" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Input label="Last Name" placeholder="Your last name" />
        </Grid>
        <Grid item xs={12}>
          <Input label="Pseudonym" placeholder="Your pseudonym" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Input type="email" label="Email" placeholder="email@example.com" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Input type="password" label="Password" placeholder="*********" />
          <Link passHref href="/profile">
            <MuiLink className={s.link} variant="body1">
              Change your password
            </MuiLink>
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Input label="Address" placeholder="Your address" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Input label="City" placeholder="Your city" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Input label="Country" placeholder="Your country" />
        </Grid>
      </Grid>
    </ProfileCard>
  );
}
