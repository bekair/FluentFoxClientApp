import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';

export default function AppDatePicker(props: DatePickerProps) {
  const { label = '', slotProps, ...rest } = props;
  return (
    <DatePicker
      {...rest}
      label={label}
      slotProps={{
        ...slotProps,
        textField: {
          label,
          fullWidth: true,
          margin: 'normal',
          ...slotProps?.textField,
        },
      }}
    />
  );
} 