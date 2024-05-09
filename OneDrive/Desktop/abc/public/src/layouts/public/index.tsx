import { Box, styled } from '@mui/material';
import { ReactNode } from 'react';
import AppBar from 'src/components/organisms/nav-bar';
import Footer from 'src/sections/footer';

interface LayoutProps {
  children?: ReactNode;
}

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  height: '100%',
}));


const PublicLayout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <LayoutRoot>
      <Box>
        <AppBar />
      </Box>
      <Box sx={{
        minHeight: 'calc(100vh - 11.25rem )',
      }}
      >
        {children}
      </Box>
        <Footer />
    </LayoutRoot>
  );
};

export default PublicLayout;