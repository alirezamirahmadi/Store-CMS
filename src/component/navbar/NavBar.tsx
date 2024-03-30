import { IconButton, useTheme } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountMenu from './AccountMenu';

export default function NavBar() {
  const theme = useTheme();

  const loginHandler = () => {

  }

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <p className="text-2xl">AnnaLena Shop</p>
        <div className="flex">
          <AccountMenu />
          <IconButton onClick={loginHandler} size="large" sx={{ color: theme.palette.primary.contrastText }}><LogoutIcon fontSize="inherit" /></IconButton>
        </div>
      </div>
    </>
  )
}