import AppAppBar from '@/components/ui/AppBar';
import AppLink from '@/components/ui/Link';
import AppToolbar from '@/components/ui/Toolbar';
import AppTypography from '@/components/ui/Typography';

export default function Header() {
  return (
    <AppAppBar position="fixed">
      <AppToolbar>
        <AppTypography variant="h6" noWrap component="div">
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', height: 40 }}>
            <AppLink href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600, fontSize: 18 }}>
              FluentFox
            </AppLink>
          </div>
        </AppTypography>
      </AppToolbar>
    </AppAppBar>
  );
} 