import Box from "@mui/material/Box";
import styles from "../profile.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { makeStyles } from '@mui/styles';
import { Button, IconButton } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import GetAppIcon from '@mui/icons-material/GetApp';
import {format} from "date-fns"
import { useState } from "react";

const billingsData = [
    { date: new Date(), transactionId: 9999999999999, asset: "Product Name", price: 100, currency: "USD" },
    { date: new Date(), transactionId: 9999999999999, asset: "Product Name", price: 100, currency: "USD" },
    { date: new Date(), transactionId: 9999999999999, asset: "Product Name", price: 100, currency: "USD" },
    { date: new Date(), transactionId: 9999999999999, asset: "Product Name", price: 100, currency: "USD" },
    { date: new Date(), transactionId: 9999999999999, asset: "Product Name", price: 100, currency: "USD" },
]

const useStyles = makeStyles({
    table: {
      minWidth: 650,
      borderColor: "#e5e5e5"
    },
});

function TableRowComponent({row}) {
    return (
        <TableRow>
            <TableCell>{format(row.date, "MMM dd, yyyy")}</TableCell>
            <TableCell>{row.transactionId}</TableCell>
            <TableCell>{row.asset}</TableCell>
            <TableCell>{row.currency} ${row.price?.toFixed(2)}</TableCell>
            <TableCell>
                <Box display="flex">
                    <IconButton><VisibilityIcon fontSize="small" /></IconButton>
                    <IconButton><GetAppIcon fontSize="small" /></IconButton>
                </Box>
            </TableCell>
        </TableRow>
    )
}

export default function Billings(){
    const classes = useStyles();
    const [billings, setBillings] = useState(billingsData)

    function handleViewMore() {
        let data = { date: new Date(), transactionId: 9999999999999, asset: "Product Name", price: 100, currency: "USD" };
            
        setBillings([...billings, data])
    }

  return (
    <Box className={styles.profileCardContainer}>
      <Typography className={styles.profileCardTitleSecond}>Billings</Typography>
      <Grid container>
        <Grid xs={12}>
            <TableContainer>
                <Table className={classes.table} size="small" aria-label="billings table">
                    <TableHead>
                        <TableRow>
                            <TableCell>DATE</TableCell>
                            <TableCell>TRANSACTION ID</TableCell>
                            <TableCell>ASSET</TableCell>
                            <TableCell>PRICE</TableCell>
                            <TableCell>ACTIONS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {billings.map((row, index) => (
                        <TableRowComponent key={index} row={row} />
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display="flex" justifyContent="center" mt={2}>
                <Button className={styles.profileCardButton} onClick={handleViewMore}>View More</Button>
            </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
