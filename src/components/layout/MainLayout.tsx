'use client';

import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import AppBox from '@/components/ui/Box';
import AppDrawer from '@/components/ui/Drawer';
import ErrorBoundary from '@/components/ui/ErrorBoundary';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <AppBox sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <AppBox sx={{ display: 'flex', flex: 1 }}>
        {/* Sidebar - Separate boundary for navigation */}
        <ErrorBoundary>
          <AppDrawer
            variant="permanent"
            sx={{
              width: 240,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: 240,
                boxSizing: 'border-box',
                mt: 8, // Account for AppBar height
              },
            }}
          >
            <SidebarContent />
          </AppDrawer>
        </ErrorBoundary>
        <MainContent>{children}</MainContent>
      </AppBox>
      <Footer />
    </AppBox>
  );
}

// Separate component for sidebar content
function SidebarContent() {
  // Sidebar navigation items, menus, etc.
  return (
    <AppBox sx={{ p: 2 }}>
      {/* Add your navigation items here */}
    </AppBox>
  );
}
