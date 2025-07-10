import AppBox from '@/components/ui/Box';
import AppTypography from '@/components/ui/Typography';

export default function Footer() {
  return (
    <AppBox component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'background.paper', mt: 'auto' }}>
      <AppTypography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} FluentFox. All rights reserved.
      </AppTypography>
    </AppBox>
  );
} 