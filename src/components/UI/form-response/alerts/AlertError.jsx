import Alert from "@material-ui/lab/Alert";

export default function AlertError({message}){
  return <Alert severity="error">{message}</Alert>
}
