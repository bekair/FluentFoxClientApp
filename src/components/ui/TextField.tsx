import { TextField, TextFieldProps } from '@mui/material';

export default function AppTextField(props: TextFieldProps) {
  return (
    <TextField
      variant={props.variant || 'outlined'}
      fullWidth={props.fullWidth !== undefined ? props.fullWidth : true}
      margin={props.margin || 'normal'}
      {...props}
    />
  );
} 