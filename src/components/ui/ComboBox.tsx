import { Autocomplete, AutocompleteProps, TextField } from '@mui/material';

type AppComboBoxProps<T> = AutocompleteProps<T, boolean, boolean, boolean> & {
  label?: string;
};

export default function AppComboBox<T>(props: AppComboBoxProps<T>) {
  const { label = '', renderInput, ...rest } = props;
  return (
    <Autocomplete
      {...rest}
      renderInput={renderInput || ((params) => (
        <TextField {...params} label={label} variant="outlined" fullWidth margin="normal" />
      ))}
    />
  );
} 