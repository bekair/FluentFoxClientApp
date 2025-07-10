import { Checkbox, CheckboxProps } from '@mui/material';

export default function AppCheckbox(props: CheckboxProps) {
  return <Checkbox color={props.color || 'primary'} {...props} />;
} 