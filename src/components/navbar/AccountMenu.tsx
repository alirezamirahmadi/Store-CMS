
import { useState, useEffect } from 'react';
import {
  Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Typography, Tooltip, useTheme
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import Logout from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';

import { RootState, AppDispatch } from '../../redux/store/Store';
import { logout, getLogin } from '../../redux/reducers/LoginReducer';
import { MenuData } from '../../assets/data/Data';

export default function AccountMenu(): React.JSX.Element {

  const dispatch = useDispatch<AppDispatch>();
  const loginInfo = useSelector((state: RootState) => state.login);
  const navigate = useNavigate();
  const theme = useTheme();
  const [, , removeCookie] = useCookies(['token']);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuItemSelected, setMenuItemSelected] = useState<string>('');
  const open = Boolean(anchorEl);
  const location = useLocation();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleNavigate = (href: string) => {
    setAnchorEl(null);
    setMenuItemSelected(href);
    navigate(href);
  }

  const handleLogout = () => {
    dispatch(logout(loginInfo.id)).then(() => dispatch(getLogin('0')));
    navigate('/');
    removeCookie('token');
  }

  useEffect(() => {
    setMenuItemSelected(location.pathname);
  }, [])
  

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="My Account">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar src={loginInfo.userInfo?.image} sx={{ width: 36, height: 36, bgcolor: theme.palette.primary.main }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{cursor:'default'}}>
          <ListItemIcon>
            <PersonIcon fontSize="small" color='info'/>
            <Typography variant='body2' sx={{ marginX: '4px' }} color={theme.palette.info.main}>{loginInfo.userInfo?.firstName} {loginInfo.userInfo?.lastName}</Typography>
          </ListItemIcon>
        </MenuItem>
        <Divider />
        {
          MenuData?.map(menuItem => (
            loginInfo.userInfo?.permissions.includes(menuItem.href) &&
            <div key={menuItem.id} className='block lg:hidden'>
              <MenuItem onClick={() => handleNavigate(menuItem.href)}>
                <ListItemIcon sx={{color:menuItemSelected === menuItem.href ? theme.palette.primary.main : ''}}>
                  {menuItem.icon}
                  <Typography variant='body2' sx={{ marginX: '4px' }}>{menuItem.title}</Typography>
                </ListItemIcon>
              </MenuItem>
              <Divider />
            </div>
          ))
        }
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
            <Typography variant='body2' sx={{ marginX: '4px' }}>Logout</Typography>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  );
}
