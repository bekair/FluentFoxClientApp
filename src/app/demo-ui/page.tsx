// If you haven't already, install dayjs: npm install dayjs
"use client";
import { useState } from "react";
import AppButton from "@/components/ui/Button";
import AppTextField from "@/components/ui/TextField";
import AppCard from "@/components/ui/Card";
import AppTypography from "@/components/ui/Typography";
import AppComboBox from "@/components/ui/ComboBox";
import AppSelect from "@/components/ui/Select";
import AppCheckbox from "@/components/ui/Checkbox";
import AppRadio from "@/components/ui/Radio";
import AppSwitch from "@/components/ui/Switch";
import AppDatePicker from "@/components/ui/DatePicker";
import AppDialog from "@/components/ui/Dialog";
import { Box, MenuItem, Stack, FormControlLabel, FormControl, FormLabel, RadioGroup, Typography, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SnackbarProvider, useSnackbar } from '@/components/ui/SnackbarProvider';

// Strongly type ComboBox options
interface ComboBoxOption {
  label: string;
  id: number;
}
const comboBoxOptions: ComboBoxOption[] = [
  { label: "Option 1", id: 1 },
  { label: "Option 2", id: 2 },
  { label: "Option 3", id: 3 },
];

function DemoAlertButtons() {
  const { showSnackbar } = useSnackbar();
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      <AppButton
        variant="outlined"
        color="info"
        sx={{ flex: '1 1 45%', minWidth: 120 }}
        onClick={() => showSnackbar('This is an info alert!', { severity: 'info' })}
      >
        Show Info Alert
      </AppButton>
      <AppButton
        variant="outlined"
        color="success"
        sx={{ flex: '1 1 45%', minWidth: 120 }}
        onClick={() => showSnackbar('This is a success alert!', { severity: 'success' })}
      >
        Show Success Alert
      </AppButton>
      <AppButton
        variant="outlined"
        color="warning"
        sx={{ flex: '1 1 45%', minWidth: 120 }}
        onClick={() => showSnackbar('This is a warning alert!', { severity: 'warning' })}
      >
        Show Warning Alert
      </AppButton>
      <AppButton
        variant="outlined"
        color="error"
        sx={{ flex: '1 1 45%', minWidth: 120 }}
        onClick={() => showSnackbar('This is an error alert!', { severity: 'error' })}
      >
        Show Error Alert
      </AppButton>
    </Box>
  );
}

export default function DemoUIPage() {
  const [comboValue, setComboValue] = useState<ComboBoxOption | null>(null);
  const [selectValue, setSelectValue] = useState<string>("");
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("a");
  const [switchValue, setSwitchValue] = useState(false);
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const [dialogOpen, setDialogOpen] = useState(false);

  // Type guard for ComboBoxOption
  function isComboBoxOption(option: unknown): option is ComboBoxOption {
    return typeof option === "object" && option !== null && "id" in option && "label" in option;
  }

  return (
    <SnackbarProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ p: 4, maxWidth: 700, mx: "auto" }}>
          <AppTypography variant="h4" gutterBottom>Demo UI Components</AppTypography>
          
          <AppCard sx={{ mb: 4, p: 3 }}>
            <DemoAlertButtons />
          </AppCard>
          <AppCard sx={{ mb: 4, p: 3 }}>
            <AppTypography variant="h6" gutterBottom>AppButton</AppTypography>
            <Stack direction="row" spacing={2}>
              <AppButton onClick={() => alert("Clicked!")}>Contained</AppButton>
              <AppButton variant="outlined">Outlined</AppButton>
              <AppButton color="secondary">Secondary</AppButton>
            </Stack>
          </AppCard>

          <AppCard sx={{ mb: 4, p: 3 }}>
            <AppTypography variant="h6" gutterBottom>AppTextField</AppTypography>
            <AppTextField label="Your Name" placeholder="Enter your name" />
          </AppCard>

          <AppCard sx={{ mb: 4, p: 3 }}>
            <AppTypography variant="h6" gutterBottom>AppComboBox</AppTypography>
            <AppComboBox<ComboBoxOption>
              label="ComboBox"
              options={comboBoxOptions}
              value={comboValue}
              onChange={(_, v) => setComboValue(isComboBoxOption(v) ? v : null)}
              getOptionLabel={option => isComboBoxOption(option) ? option.label : ""}
              isOptionEqualToValue={(o, v) => isComboBoxOption(o) && isComboBoxOption(v) && o.id === v.id}
              renderInput={params => <TextField {...params} label="ComboBox" variant="outlined" fullWidth margin="normal" />}
            />
          </AppCard>

          <AppCard sx={{ mb: 4, p: 3 }}>
            <AppTypography variant="h6" gutterBottom>AppSelect</AppTypography>
            <AppSelect
              label="Select"
              value={selectValue}
              onChange={e => setSelectValue(e.target.value as string)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="one">One</MenuItem>
              <MenuItem value="two">Two</MenuItem>
            </AppSelect>
          </AppCard>

          <AppCard sx={{ mb: 4, p: 3 }}>
            <AppTypography variant="h6" gutterBottom>AppCheckbox</AppTypography>
            <FormControlLabel
              control={<AppCheckbox checked={checked} onChange={e => setChecked(e.target.checked)} />}
              label="Check me!"
            />
          </AppCard>

          <AppCard sx={{ mb: 4, p: 3 }}>
            <AppTypography variant="h6" gutterBottom>AppRadio</AppTypography>
            <FormControl>
              <FormLabel>Choose one</FormLabel>
              <RadioGroup
                row
                value={radioValue}
                onChange={e => setRadioValue(e.target.value)}
              >
                <FormControlLabel value="a" control={<AppRadio />} label="A" />
                <FormControlLabel value="b" control={<AppRadio />} label="B" />
              </RadioGroup>
            </FormControl>
          </AppCard>

          <AppCard sx={{ mb: 4, p: 3 }}>
            <AppTypography variant="h6" gutterBottom>AppSwitch</AppTypography>
            <FormControlLabel
              control={<AppSwitch checked={switchValue} onChange={e => setSwitchValue(e.target.checked)} />}
              label="Toggle me!"
            />
          </AppCard>

          <AppCard sx={{ mb: 4, p: 3 }}>
            <AppTypography variant="h6" gutterBottom>AppDatePicker</AppTypography>
            <AppDatePicker
              label="Pick a date"
              value={dateValue}
              onChange={setDateValue}
            />
          </AppCard>

          <AppCard sx={{ mb: 4, p: 3 }}>
            <AppTypography variant="h6" gutterBottom>AppDialog</AppTypography>
            <AppButton onClick={() => setDialogOpen(true)}>Open Dialog</AppButton>
            <AppDialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
              <Box sx={{ p: 3 }}>
                <Typography variant="h6">Dialog Content</Typography>
                <Typography>This is a demo dialog.</Typography>
                <AppButton onClick={() => setDialogOpen(false)} sx={{ mt: 2 }}>Close</AppButton>
              </Box>
            </AppDialog>
          </AppCard>
        </Box>
      </LocalizationProvider>
    </SnackbarProvider>
  );
} 