import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DownloadIcon from '@material-ui/icons/GetApp';
import format from 'date-fns/format';
import ProfileCard from './ProfileCard';

const createData = () => ({
  date: Date.now(),
  trxId: '9999999999999',
  productName: 'Product Name',
  price: 100,
});

const rows = [];
for (let i = 0; i < 5; i++) {
  rows.push(createData());
}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,

    '& .MuiTableHead-root': {
      textTransform: 'uppercase',
    },

    '& .MuiTableCell-root': {
      fontFamily: 'KernRegular',
      fontSize: 14,
      lineHeight: '17px',
      borderBottom: '1px solid #F5F5F5',
      padding: 8,
    },
  },
  history: {
    paddingTop: theme.spacing(2.5),
    textAlign: 'right',
    textDecoration: 'underline',
  },
}));

const formatPrice = (number) =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);

export default function ProfileCardBillingInfo(props) {
  const s = useStyles();

  return (
    <ProfileCard title="Billing Information">
      <TableContainer>
        <Table className={s.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Transaction ID</TableCell>
              <TableCell>Asset</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {format(row.date, 'MMM dd, yyyy')}
                </TableCell>
                <TableCell>{row.trxId}</TableCell>
                <TableCell>{row.productName}</TableCell>
                <TableCell>{formatPrice(row.price)}</TableCell>
                <TableCell>
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton>
                    <DownloadIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography className={s.history}>View all billing history</Typography>
    </ProfileCard>
  );
}
