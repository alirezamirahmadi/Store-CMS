import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ViewListIcon from '@mui/icons-material/ViewList';
import DiscountIcon from '@mui/icons-material/Discount';

import { MenuType } from "../../type/HomeType";

const MenuData: MenuType[] = [
  { id: 1, title: 'Home', icon: <MeetingRoomIcon  fontSize='medium' color='inherit'/>, href:'/home' },
  { id: 2, title: 'Products', icon: <Inventory2Icon  fontSize='medium' color='inherit'/>, href:'/products' },
  { id: 3, title: 'Comments', icon: <CommentIcon  fontSize='medium' color='inherit'/>, href:'/comments' },
  { id: 4, title: 'Users', icon: <PeopleAltOutlinedIcon  fontSize='medium' color='inherit'/>, href:'/users' },
  { id: 5, title: 'Orders', icon: <ViewListIcon  fontSize='medium' color='inherit'/>, href:'/orders' },
  { id: 6, title: 'Discount', icon: <DiscountIcon  fontSize='medium' color='inherit'/>, href:'/discount' },

]



export {
  MenuData
}