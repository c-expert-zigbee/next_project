import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";

export default function AlertWarning({message}){
  return <Box my={1}><Alert severity="warning">{message}</Alert></Box>
}
