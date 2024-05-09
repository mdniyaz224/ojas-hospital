import MenuIcon from '@mui/icons-material/Menu';
import {
  Container,
  Grid,
  LinkBaseProps,
  AppBar as MUIAppBar,
  Link as MUILink,
  styled,
} from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { dark } from '@mui/material/styles/createPalette';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { borderRadius, height, width } from '@mui/system';
import { t } from 'i18next';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import Logo from 'public/LACROSSE-logo.svg';
import * as React from 'react';
import { useEffect } from 'react';
import Button from 'src/components/atoms/button';
import { useRouter } from 'src/hooks/use-router';
import { tokens } from 'src/locales/tokens';
import { paths } from 'src/paths';
import URL from 'src/services/urls';
import { orange, grey } from 'src/theme/colors';

interface Props {
  window?: () => Window;
}
interface ILinkProps extends LinkBaseProps {
  selectedNavItems: boolean;
}

const drawerWidth = 240;
const navItems = [
  { label: 'Home', path: paths.home },
  { label: 'About', path: '#' },
  { label: 'Service', path: '#' },
  { label: 'Galary', path: '#' },
  { label: 'Contact', path: '#' },
];

export default function AppBar(props: Props) {
  const { window } = props;
  const router = useRouter();
  const pathName = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedNavItem, setSelectedNavItem] = React.useState(pathName);
  const handleLinkClick = (item: { label: string; path: string }, path: string) => {
    if (item.path !== '#') {
      setSelectedNavItem(item.path);
    }
    router.push(path);
  };
  const token = false;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  useEffect(() => {
    setSelectedNavItem(pathName);
  }, [pathName]);

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <Box sx={{ my: 2 }}>
        <Logo />
      </Box>
      <Box>
        <List>
          {navItems.map((item, index) => (
            <ListItem
              key={`${item.label}_${index}`}
              disablePadding
              sx={{ padding: '8px' }}
            >
              <Box mx={1}>
                <StyledNavLink
                  underline="none"
                  selectedNavItems={selectedNavItem == item.path}
                  variant={selectedNavItem === item.path ? 'caption' : 'body1'}
                  onClick={() => handleLinkClick(item, item.path)}
                  sx={{
                    color: selectedNavItem === item.path ? orange.dark : 'text.secondary',
                  }}
                >
                  {item.label}
                </StyledNavLink>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <CssBaseline />
        <MUIAppBar
          component="nav"
          sx={{ background: grey.lightest }}
        >
          <Toolbar disableGutters>
            <Container maxWidth="xl">
              <Grid container>
                <Grid
                  item
                  // md={3}
                  lg={2}
                  // sm={6}
                  // xs={6}
                  sx={{ display: { md: 'block', sm: 'space-between' } }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Box
                    sx={{
                      mr: 2,
                      display: { xs: 'none', sm: 'none', md: 'block' },
                    }}
                  >
                    <Typography
                      variant="h6"
                      mt={1}
                    >
                      <Logo style={{ width: 'auto', height: 'auto' }} />
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={10}
                >
                  <ListBoxStyle>
                    <BoxStyle>
                      <List sx={{ display: 'flex', gap: { lg: 3 } }}>
                        {navItems.map((item, index) => (
                          <ListItem
                            key={`${item.label}_${index}`}
                            disablePadding
                            sx={{ width: 'auto', height: '50px' }}
                          >
                            <Box mx={1}>
                              <StyledNavLink
                                underline="none"
                                selectedNavItems={selectedNavItem == item.path}
                                variant={selectedNavItem === item.path ? 'caption' : 'body1'}
                                onClick={() => handleLinkClick(item, item.path)}
                                sx={{
                                  color:
                                    selectedNavItem === item.path ? orange.dark : 'text.secondary',
                                }}
                              >
                                {item.label}
                              </StyledNavLink>
                            </Box>
                          </ListItem>
                        ))}
                      </List>
                    </BoxStyle>
                  </ListBoxStyle>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </MUIAppBar>

        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                backgroundColor: grey.lightest,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
      <Toolbar />
    </>
  );
}

const ButtonsStyle = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '1rem',
}));
const ListBoxStyle = styled(Box)(() => ({
  // display: 'flex',
  // justifyContent: 'center',
  float: 'right',
}));

const BoxStyle = styled(Box)(({ theme }) => ({
  // Accessing theme breakpoints and setting display property accordingly
  display: 'none', // Hide by default
  [theme.breakpoints.up('md')]: {
    display: 'block', // Display on medium screens and larger
  },
}));

const StyledNavLink = styled(MUILink)<ILinkProps>(({ theme, selectedNavItems }) => ({
  marginX: theme.spacing(1),
  textDecoration: 'none',
  cursor: 'pointer',
  position: 'relative',
  fontWeight: selectedNavItems ? 'bold' : 'normal',
  color: selectedNavItems ? orange.dark : 'text.secondary',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 20,
    left: 0,
    width: '100%',
    textDecoration: 'none',
    borderRadius: 15,
    height: 3,
    backgroundColor: selectedNavItems ? orange.dark : 'transparent',
    transition: 'background-color 0.8s ease',
  },
}));
