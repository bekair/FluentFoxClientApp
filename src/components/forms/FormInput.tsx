'use client';

import { TextFieldProps } from '@mui/material';
import AppTextField from '@/components/ui/TextField';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

interface FormInputProps<T extends FieldValues> extends Omit<TextFieldProps, 'name'> {
  name: Path<T>;
  control: Control<T>;
  rules?: object;
}

export default function FormInput<T extends FieldValues>({
  name,
  control,
  rules,
  ...textFieldProps
}: FormInputProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <AppTextField
          {...field}
          {...textFieldProps}
          error={!!error}
          helperText={error?.message}
          fullWidth
          margin="normal"
        />
      )}
    />
  );
}
