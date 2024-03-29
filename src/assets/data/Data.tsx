import DoorBackOutlinedIcon from '@mui/icons-material/DoorBackOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';


import { MenuType } from "../../type/HomeType";

const MenuData: MenuType[] = [
  { id: 1, title: 'Home', icon: <DoorBackOutlinedIcon  fontSize='medium' color='inherit'/>, href:'/home' },
  { id: 2, title: 'Products', icon: <Inventory2OutlinedIcon  fontSize='medium' color='inherit'/>, href:'/products' },
  { id: 3, title: 'Comments', icon: <ModeCommentOutlinedIcon  fontSize='medium' color='inherit'/>, href:'/comments' },
  { id: 4, title: 'Users', icon: <PeopleAltOutlinedIcon  fontSize='medium' color='inherit'/>, href:'/users' },
  { id: 5, title: 'Orders', icon: <ListAltOutlinedIcon  fontSize='medium' color='inherit'/>, href:'/orders' },
  { id: 6, title: 'Discount', icon: <DiscountOutlinedIcon  fontSize='medium' color='inherit'/>, href:'/discount' },

]



export {
  MenuData
}