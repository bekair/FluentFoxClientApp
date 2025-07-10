'use client';

import { useTheme } from '@/theme/ThemeProvider';
import AppContainer from '@/components/ui/Container';
import AppBox from '@/components/ui/Box';
import AppStack from '@/components/ui/Stack';
import AppCard from '@/components/ui/Card';
import AppCardContent from '@/components/ui/CardContent';
import AppIconButton from '@/components/ui/IconButton';
import AppChip from '@/components/ui/Chip';
import AppButton from '@/components/ui/Button';
import AppTypography from '@/components/ui/Typography';
import AppAlert from '@/components/ui/Alert';
import { 
  Home as HomeIcon, 
  Code as CodeIcon, 
  LightMode as LightModeIcon, 
  DarkMode as DarkModeIcon,
  Palette as PaletteIcon
} from '@mui/icons-material';

export default function Home() {
  const { mode, toggleTheme } = useTheme();

  return (
    <AppContainer maxWidth="md" sx={{ py: 8 }}>
      <AppBox sx={{ textAlign: 'center', mb: 6 }}>
        <AppBox sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <AppTypography variant="h2" component="h1" sx={{ fontWeight: 300, flex: 1 }}>
            FluentFox
          </AppTypography>
          <AppIconButton 
            onClick={toggleTheme} 
            size="large" 
            color="primary"
            sx={{ 
              border: 1, 
              borderColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.main',
                color: 'primary.contrastText'
              }
            }}
          >
            {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          </AppIconButton>
        </AppBox>
        
        <AppStack direction="row" spacing={1} justifyContent="center" sx={{ mb: 2 }}>
          <AppChip 
            icon={<PaletteIcon />} 
            label={`${mode} mode`} 
            color="primary" 
            variant="outlined" 
          />
          <AppChip label="Next.js 15" color="secondary" />
          <AppChip label="Material-UI v7" color="success" />
          <AppChip label="TypeScript" color="info" />
        </AppStack>
        
        <AppTypography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 400, color: 'text.secondary' }}>
          Next.js + Material-UI + Roboto Font
        </AppTypography>
        <AppTypography variant="body1" sx={{ mt: 2, mb: 4 }}>
          This is a test page to verify that Material-UI components and Roboto font are working correctly.
          The text you&apos;re reading should be displayed in the Roboto font family.
        </AppTypography>
        
        <AppAlert severity="success" sx={{ mb: 4 }}>
          ✨ Theme system is working! Click the theme toggle button to switch between light and dark modes.
        </AppAlert>
      </AppBox>
      
      <AppStack spacing={4} sx={{ mb: 6 }}>
        <AppCard elevation={2}>
          <AppCardContent>
            <AppTypography variant="h4" gutterBottom sx={{ fontWeight: 500, color: 'primary.main' }}>
              🎨 Theme Colors
            </AppTypography>
            <AppStack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <AppChip label="Primary" color="primary" />
              <AppChip label="Secondary" color="secondary" />
              <AppChip label="Success" color="success" />
              <AppChip label="Error" color="error" />
              <AppChip label="Warning" color="warning" />
              <AppChip label="Info" color="info" />
            </AppStack>
          </AppCardContent>
        </AppCard>
        
        <AppCard elevation={2}>
          <AppCardContent>
            <AppTypography variant="h4" gutterBottom sx={{ fontWeight: 500, color: 'secondary.main' }}>
              📝 Typography Examples
            </AppTypography>
            <AppStack spacing={2}>
              <AppTypography variant="h1">Heading 1 - Roboto Light</AppTypography>
              <AppTypography variant="h2">Heading 2 - Roboto Light</AppTypography>
              <AppTypography variant="h3">Heading 3 - Roboto Regular</AppTypography>
              <AppTypography variant="h4">Heading 4 - Roboto Regular</AppTypography>
              <AppTypography variant="h5">Heading 5 - Roboto Regular</AppTypography>
              <AppTypography variant="h6">Heading 6 - Roboto Medium</AppTypography>
              <AppTypography variant="subtitle1">Subtitle 1 - Roboto Regular</AppTypography>
              <AppTypography variant="subtitle2">Subtitle 2 - Roboto Medium</AppTypography>
              <AppTypography variant="body1">Body 1 - Roboto Regular</AppTypography>
              <AppTypography variant="body2">Body 2 - Roboto Regular</AppTypography>
              <AppTypography variant="caption">Caption - Roboto Regular</AppTypography>
              <AppTypography variant="overline">Overline - Roboto Regular</AppTypography>
            </AppStack>
          </AppCardContent>
        </AppCard>
        
        <AppCard elevation={2}>
          <AppCardContent>
            <AppTypography variant="h4" gutterBottom sx={{ fontWeight: 500, color: 'success.main' }}>
              ⚖️ Font Weight Examples
            </AppTypography>
            <AppStack spacing={2}>
              <AppTypography variant="body1" sx={{ fontWeight: 300 }}>
                Roboto Light (300) - The quick brown fox jumps over the lazy dog
              </AppTypography>
              <AppTypography variant="body1" sx={{ fontWeight: 400 }}>
                Roboto Regular (400) - The quick brown fox jumps over the lazy dog
              </AppTypography>
              <AppTypography variant="body1" sx={{ fontWeight: 500 }}>
                Roboto Medium (500) - The quick brown fox jumps over the lazy dog
              </AppTypography>
              <AppTypography variant="body1" sx={{ fontWeight: 700 }}>
                Roboto Bold (700) - The quick brown fox jumps over the lazy dog
              </AppTypography>
            </AppStack>
          </AppCardContent>
        </AppCard>
      </AppStack>

      <AppBox sx={{ textAlign: 'center' }}>
        <AppStack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <AppButton 
            variant="contained" 
            startIcon={<HomeIcon />}
            size="large"
          >
            Material-UI Button
          </AppButton>
          <AppButton 
            variant="outlined" 
            startIcon={<CodeIcon />}
            size="large"
          >
            Get Started
          </AppButton>
        </AppStack>
      </AppBox>
    </AppContainer>
  );
}
