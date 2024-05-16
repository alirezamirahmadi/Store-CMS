import { useState, useEffect } from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import {
  Box, Tooltip, Toolbar, List, CssBaseline, Typography, Divider, IconButton,
  ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { MenuData } from '../../assets/data/Data';
import NavBar from '../navbar/NavBar';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar({ children }: { children: React.ReactNode }): React.JSX.Element {

  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  // const [openCollapse, setOpenCollapse] = useState<openCollapseType[]>([]);
  const [listSelected, setListSelected] = useState<string>('');

  const handleDrawerOpen = () => {
    setOpen(true);
  }

  const handleDrawerClose = () => {
    setOpen(false);
  }

  const selectCategory = (href: string) => {
    setListSelected(href);
    navigate(href);
  }

  // const handleOpenCollapse = (id: number) => {
  //   let collapse = openCollapse?.find(col => col.id === id);
  //   let tempArray = openCollapse?.filter(col => col.id != id);
  //   collapse && setOpenCollapse([...tempArray, { id, open: !collapse.open }])
  // }

  // useEffect(() => {
  //   let tempArray: openCollapseType[] = [];
  //   MenuData?.map(menuItem => {
  //     menuItem && tempArray.push({ id: menuItem.id, open: false })
  //   })
  //   setOpenCollapse([...tempArray]);
  // }, [])

  useEffect(() => {
    setListSelected(location.pathname);
  }, [])

  return (
    <div className='flex'>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar sx={{ display: 'flex' }}>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start"
            sx={{ ...(open && { display: 'none' }), }}
          >
            <MenuIcon />
          </IconButton>
          <NavBar />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{ width: '100%', height: '100%', maxWidth: 360 }}
          component="nav"
          aria-labelledby="category-menu">
          {
            MenuData?.map(menuItem => (
              <ListItem key={menuItem.id} disablePadding sx={{ display: 'block', mb: 2.5 }}>
                <Tooltip title={open ? '' : menuItem.title}>
                  <ListItemButton onClick={() => selectCategory(menuItem.href)} sx={{ height: 30, justifyContent: open ? 'initial' : 'center', px: 2.5, mb: 1, color: listSelected === menuItem.href ? theme.palette.primary.main : '' }}>
                    <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center', color: listSelected === menuItem.href ? theme.palette.primary.main : '' }} >
                      {menuItem.icon}
                    </ListItemIcon>
                    <ListItemText sx={{ opacity: open ? 1 : 0 }} primary={<Typography variant='body1' >{menuItem.title}</Typography>} />
                  </ListItemButton>
                </Tooltip>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 0.5, pt: 7 }}>
        {children}
      </Box>
    </div>
  );
}