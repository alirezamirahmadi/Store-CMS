
import { useState } from 'react';
import {
  Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Typography, Tooltip, useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Logout from '@mui/icons-material/Logout';
import LockOpenIcon from '@mui/icons-material/LockOpen';


export default function AccountMenu(): React.JSX.Element {

  const navigate = useNavigate();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const handleAddress = () => {
    setAnchorEl(null);
    navigate('/my-account');
  }
  const handleLogout = () => {

  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="My Account">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}></Avatar>
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
        <MenuItem onClick={handleAddress}>
          <ListItemIcon>
            <LockOpenIcon fontSize="small" />
            <Typography variant='body2' sx={{ marginX: '4px' }}>Change Password</Typography>
          </ListItemIcon>
        </MenuItem>
        <Divider />
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
