"use client";
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
// Import your custom UI wrappers
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import Card from "@/components/ui/Card";
import Alert from "@/components/ui/Alert";
import Typography from "@/components/ui/Typography";
import ComboBox from "@/components/ui/ComboBox";
import Select from "@/components/ui/Select";
import Checkbox from "@/components/ui/Checkbox";
import Radio from "@/components/ui/Radio";
import Switch from "@/components/ui/Switch";
import DatePicker from "@/components/ui/DatePicker";
import Dialog from "@/components/ui/Dialog";
import { FormControl, FormLabel, FormGroup, FormControlLabel, FormHelperText, MenuItem, InputLabel } from "@mui/material";
import { SnackbarProvider, useSnackbar } from '@/components/ui/SnackbarProvider';

const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];
const countryOptions = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "United Kingdom", value: "uk" },
  { label: "Australia", value: "au" },
];
const colorOptions = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];
const notificationOptions = [
  { label: "Email", value: "email" },
  { label: "SMS", value: "sms" },
  { label: "Push", value: "push" },
];

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .min(18, "You must be at least 18")
    .max(120, "Please enter a valid age")
    .required("Age is required"),
  gender: yup.string().required("Gender is required"),
  country: yup
    .object({ label: yup.string(), value: yup.string() })
    .required("Country is required"),
  favoriteColor: yup.string().required("Favorite color is required"),
  acceptTerms: yup.bool().oneOf([true], "You must accept the terms").required(),
  notification: yup.string().required("Notification preference is required"),
  darkMode: yup.bool().required(),
  birthdate: yup
    .mixed<Dayjs>()
    .test(
      "is-dayjs",
      "Birthdate is required",
      (value) => dayjs.isDayjs(value) && value.isValid()
    )
    .required("Birthdate is required"),
});

type FormData = yup.InferType<typeof schema>;

function ValidationDemoForm() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [submitted, setSubmitted] = useState<FormData | null>(null);
  const { showSnackbar } = useSnackbar();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      age: 18,
      gender: genderOptions[0].value,
      country: countryOptions[0],
      favoriteColor: colorOptions[0].value,
      acceptTerms: false,
      notification: notificationOptions[0].value,
      darkMode: false,
      birthdate: dayjs(),
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setSubmitted(data);
    setDialogOpen(true);
  };

  const onError = () => {
    showSnackbar('Please fix the errors in the form.', { severity: 'error' });
  };

  return (
    <Card style={{ maxWidth: 600, margin: "2rem auto", padding: 24 }}>
      <Typography variant="h4" gutterBottom>
        Validation Demo Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
                margin="dense"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
                margin="dense"
              />
            )}
          />
          <Controller
            name="age"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Age"
                type="number"
                error={!!errors.age}
                helperText={errors.age?.message}
                fullWidth
                margin="dense"
              />
            )}
          />
          <FormControl component="fieldset" error={!!errors.gender} margin="dense">
            <FormLabel component="legend">Gender</FormLabel>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <FormGroup row>
                  {genderOptions.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      control={
                        <Radio
                          {...field}
                          checked={field.value === option.value}
                          value={option.value}
                          color="primary"
                        />
                      }
                      label={option.label}
                      onChange={() => field.onChange(option.value)}
                    />
                  ))}
                </FormGroup>
              )}
            />
            {!!errors.gender && <FormHelperText>{errors.gender.message}</FormHelperText>}
          </FormControl>
          <Controller
            name="country"
            control={control}
            render={({ field }) => (
              <ComboBox
                {...field}
                options={countryOptions}
                value={field.value}
                onChange={(_, v) => field.onChange(v)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Country"
                    error={!!errors.country}
                    helperText={errors.country?.message}
                    fullWidth
                    margin="dense"
                  />
                )}
              />
            )}
          />
          <FormControl error={!!errors.favoriteColor} fullWidth margin="dense">
            <InputLabel id="favorite-color-label">Favorite Color</InputLabel>
            <Controller
              name="favoriteColor"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="favorite-color-label"
                  label="Favorite Color"
                  fullWidth
                  margin="dense"
                >
                  {colorOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {!!errors.favoriteColor && (
              <FormHelperText>{errors.favoriteColor.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl error={!!errors.acceptTerms} component="fieldset" margin="dense">
            <FormGroup>
              <Controller
                name="acceptTerms"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        {...field}
                        checked={!!field.value}
                        color="primary"
                      />
                    }
                    label="Accept Terms"
                  />
                )}
              />
            </FormGroup>
            {!!errors.acceptTerms && <FormHelperText>{errors.acceptTerms.message}</FormHelperText>}
          </FormControl>
          <FormControl component="fieldset" error={!!errors.notification} margin="dense">
            <FormLabel component="legend">Notification Preference</FormLabel>
            <Controller
              name="notification"
              control={control}
              render={({ field }) => (
                <FormGroup row>
                  {notificationOptions.map((option) => (
                    <FormControlLabel
                      key={option.value}
                      control={
                        <Radio
                          {...field}
                          checked={field.value === option.value}
                          value={option.value}
                          color="primary"
                        />
                      }
                      label={option.label}
                      onChange={() => field.onChange(option.value)}
                    />
                  ))}
                </FormGroup>
              )}
            />
            {!!errors.notification && <FormHelperText>{errors.notification.message}</FormHelperText>}
          </FormControl>
          <Controller
            name="darkMode"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Switch {...field} checked={!!field.value} color="primary" />}
                label="Dark Mode"
              />
            )}
          />
          <Controller
            name="birthdate"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                label="Birthdate"
                value={field.value}
                onChange={field.onChange}
                slotProps={{
                  textField: {
                    error: !!errors.birthdate,
                    helperText: errors.birthdate?.message,
                    fullWidth: true,
                    margin: "dense",
                  },
                }}
              />
            )}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: 24 }}>
            Submit
          </Button>
        </form>
        {submitted && (
          <Alert severity="success" style={{ marginTop: 24 }}>
            <pre style={{ margin: 0 }}>{JSON.stringify(submitted, null, 2)}</pre>
          </Alert>
        )}
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} title="Form Submitted">
          <Typography variant="body1">Form submitted successfully!</Typography>
          <Button onClick={() => setDialogOpen(false)} color="primary" style={{ marginTop: 16 }}>
            Close
          </Button>
        </Dialog>
    </Card>
  );
}

export default function ValidationDemoPage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SnackbarProvider>
        <ValidationDemoForm />
      </SnackbarProvider>
    </LocalizationProvider>
  );
} 