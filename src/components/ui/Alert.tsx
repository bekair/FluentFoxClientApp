import { Alert as MuiAlert, AlertProps } from '@mui/material';

export default function Alert(props: AlertProps) {
  return <MuiAlert {...props}>{props.children}</MuiAlert>;
} 