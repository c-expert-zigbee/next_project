import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Checkbox from '../../Checkbox';
import Input from '../../Input';
import ProfileCard from './ProfileCard';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'block',
    marginTop: theme.spacing(3.5),
    textAlign: 'right',
    textDecoration: 'underline',
  },
  checkbox: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function ProfileCardDigitalIdenity() {
  const s = useStyles();

  return (
    <ProfileCard title="Digital Identity">
      <div>
        <Input
          disabled
          label="Uploaded document"
          placeholder="Driver license"
        />

        <FormControlLabel
          className={s.checkbox}
          control={<Checkbox defaultChecked />}
          label="Status: Confirmed"
        />

        <Typography className={s.link}>Upload a new document</Typography>
      </div>
    </ProfileCard>
  );
}
