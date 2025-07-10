import { Typography, TypographyProps } from '@mui/material';

export default function AppTypography(props: TypographyProps) {
  return (
    <Typography
      variant={props.variant || 'body1'}
      color={props.color || 'text.primary'}
      {...props}
    />
  );
} 