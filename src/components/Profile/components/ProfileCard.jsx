import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(4),
    backgroundColor: '#FFFFFF',
    border: '1px solid #DCDCE0',
    borderRadius: 17,
    boxShadow: 'none',
  },
  cardTitle: {
    fontSize: 20,
    lineHeight: '24px',
    marginBottom: theme.spacing(3.75),
  },
}));

export default function ProfileCard({ title, children }) {
  const s = useStyles();

  return (
    <Card className={s.card}>
      <Typography className={s.cardTitle} variant="h5">
        {title}
      </Typography>

      {children}
    </Card>
  );
}
