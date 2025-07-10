import { Select, SelectProps } from '@mui/material';

export default function AppSelect(props: SelectProps) {
  return (
    <Select
      fullWidth={props.fullWidth !== undefined ? props.fullWidth : true}
      variant={props.variant || 'outlined'}
      {...props}
    />
  );
} 