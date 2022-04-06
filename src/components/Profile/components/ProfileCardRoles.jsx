import makeStyles from '@material-ui/core/styles/makeStyles';
import Select from '../../Select';
import ProfileCard from './ProfileCard';

const useStyles = makeStyles((theme) => ({
  container: {
    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(4),
    },
  },
}));

export default function ProfileCardRoles() {
  const s = useStyles();

  return (
    <ProfileCard title="Roles">
      <div className={s.container}>
        <Select label="Primary Role" />
        <Select label="Additional Roles" />
      </div>
    </ProfileCard>
  );
}
