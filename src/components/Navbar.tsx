'use client';

import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import Person2Icon from '@mui/icons-material/Person2';
import Popover from '@mui/material/Popover';
import Grid from '@mui/material/Grid';
import SidebarPopup from '@/components/SidebarPopup';
import { Menu as SideIcon } from '@mui/icons-material';
// swap in your own SVG or image
import Image from 'next/image';
const logoSrc = '/image/school-logo.png';

const navItems = [
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Mission & Vision', href: '/about#mission' },
      { label: 'Our Story', href: '/about#story' },
      { label: 'Accreditation', href: '/about#accreditation' },
      { label: 'School Board', href: '/about#board' },
      { label: 'School Calendar', href: '/about#calendar' },
      { label: 'Global Citizenship / Service-Learning', href: '/about#global' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions',
    children: [
      { label: 'Inquire', href: '/admissions#inquire' },
      { label: 'Financial Aid', href: '/admissions#aid' },
      { label: 'Fees and Tuitions', href: '/admissions#fees' },
      { label: 'Apply', href: '/admissions#apply' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    children: [
      { label: 'Elementary School', href: '/academics#elementary' },
      { label: 'Middle School', href: '/academics#middle' },
      { label: 'High School', href: '/academics#high' },
      { label: 'World Languages', href: '/academics#languages' },
      { label: 'Advanced Placement Program', href: '/academics#ap' },
    ],
  },
  {
    label: 'Community',
    href: '/community',
    children: [
      { label: 'Contact Us', href: '/community#contact' },
      { label: 'Visitors', href: '/community#visitors' },
    ],
  },
  {
    label: 'Careers',
    href: '/careers',
    children: [
      { label: 'Living in Kigali', href: '/careers#living' },
      { label: 'Employment', href: '/careers#employment' },
      { label: 'Tenders', href: '/careers#tenders' },
    ],
  },
];

export default function Navbar() {
  const theme = useTheme();
  const isMdUp = useMediaQuery((theme: any) => theme.breakpoints.up('md'));

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  // Mobile drawer state
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleOpen = (item: string) => (e: React.MouseEvent<HTMLElement>) => {
    if (!isMdUp) return;
    setAnchorEl(e.currentTarget);
    setOpenMenu(item);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={2}
        sx={{
          bgcolor: 'common.white',
          color: 'text.primary',
          py: 0.5,
          boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          zIndex: (theme) => theme.zIndex.tooltip + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 6 } }}>
          {/* Logo + Brand */}
          <Box
            component={Link}
            href="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textDecoration: 'none',
            }}
          >
            <Image src={logoSrc} alt="ISK Logo" width={56} height={56} />
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                fontSize: 18,
                color: 'text.primary',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              International School of Kigali
            </Box>
          </Box>

          {isMdUp ? (
            // DESKTOP MENU
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {navItems.map((item) => (
                <Box key={item.label} onMouseLeave={handleClose}>
                  <Button
                    component={Link}
                    href={item.href}
                    onMouseEnter={item.children ? handleOpen(item.label) : undefined}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                      textTransform: 'none',
                      '&:hover': {
                        borderBottom: '2px solid',
                        borderColor: 'secondary.main',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                  {item.children && (
                    <Popover
                      open={openMenu === item.label}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                      disableScrollLock
                      sx={{ pointerEvents: 'none' }}
                      PaperProps={{
                        sx: {
                          pointerEvents: 'auto',
                          bgcolor: 'primary.dark',
                          color: 'common.white',
                          px: 4,
                          py: 3,
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: 220 }}>
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            style={{
                              color: '#fff',
                              textDecoration: 'none',
                              fontWeight: 500,
                              padding: '6px 0',
                              display: 'block',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                            onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </Box>
                    </Popover>
                  )}
                </Box>
              ))}
              {/* search icon */}
              <IconButton href="/#search" sx={{ color: 'text.primary' }}>
                <SearchIcon />
              </IconButton>
              {/* sidebar trigger */}
              <IconButton onClick={() => setSidebarOpen(true)} sx={{ color: 'text.primary' }}>
                <SideIcon />
              </IconButton>
            </Box>
          ) : (
            // MOBILE TOGGLE
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 240, pt: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            {/* portals */}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/portal/student" onClick={() => setDrawerOpen(false)}>
                <SchoolIcon sx={{ mr: 1 }} />
                <ListItemText primary="Student Portal" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/portal/parent" onClick={() => setDrawerOpen(false)}>
                <PeopleIcon sx={{ mr: 1 }} />
                <ListItemText primary="Parent Portal" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/portal/teacher" onClick={() => setDrawerOpen(false)}>
                <Person2Icon sx={{ mr: 1 }} />
                <ListItemText primary="Teacher Portal" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                component={Link}
                href="/#search"
                onClick={() => setDrawerOpen(false)}
              >
                <SearchIcon sx={{ mr: 1 }} />
                <ListItemText primary="Search" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Sidebar Popup */}
      <SidebarPopup open={sidebarOpen} onClose={() => setSidebarOpen(false)} title="Quick Links">
        <List sx={{ p: 0 }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component={Link} href={item.href} onClick={() => setSidebarOpen(false)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
          {/* portals */}
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/portal/student" onClick={() => setSidebarOpen(false)}>
              <SchoolIcon sx={{ mr: 1 }} />
              <ListItemText primary="Student Portal" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/portal/parent" onClick={() => setSidebarOpen(false)}>
              <PeopleIcon sx={{ mr: 1 }} />
              <ListItemText primary="Parent Portal" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/portal/teacher" onClick={() => setSidebarOpen(false)}>
              <Person2Icon sx={{ mr: 1 }} />
              <ListItemText primary="Teacher Portal" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} href="/#search" onClick={() => setSidebarOpen(false)}>
              <SearchIcon sx={{ mr: 1 }} />
              <ListItemText primary="Search" />
            </ListItemButton>
          </ListItem>
        </List>
      </SidebarPopup>
    </>
  );
}
