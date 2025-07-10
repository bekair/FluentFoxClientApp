import { Radio, RadioProps } from '@mui/material';

export default function AppRadio(props: RadioProps) {
  return <Radio color={props.color || 'primary'} {...props} />;
} 