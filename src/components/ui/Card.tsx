import { Card, CardProps } from '@mui/material';

export default function AppCard(props: CardProps) {
  return (
    <Card
      elevation={props.elevation !== undefined ? props.elevation : 2}
      square={props.square !== undefined ? props.square : false}
      {...props}
    />
  );
} 