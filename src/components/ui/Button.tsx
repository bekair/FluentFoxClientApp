import { Button, ButtonProps } from '@mui/material';

export default function AppButton(props: ButtonProps) {
  return (
    <Button
      variant={props.variant || 'contained'}
      color={props.color || 'primary'}
      disableElevation={props.disableElevation !== undefined ? props.disableElevation : true}
      {...props}
    />
  );
} 