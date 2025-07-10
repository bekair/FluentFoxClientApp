import { Switch, SwitchProps } from '@mui/material';

export default function AppSwitch(props: SwitchProps) {
  return <Switch color={props.color || 'primary'} {...props} />;
} 