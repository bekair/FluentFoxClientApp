import { Box, Container } from '@mui/material';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: 'background.default',
        p: 3,
        mt: 8, // Account for AppBar height
        ml: { sm: '240px' }, // If sidebar is present
      }}
    >
      <ErrorBoundary>
        <Container maxWidth="xl">{children}</Container>
      </ErrorBoundary>
    </Box>
  );
} 