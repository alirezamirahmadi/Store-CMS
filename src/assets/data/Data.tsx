import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ViewListIcon from '@mui/icons-material/ViewList';
import DiscountIcon from '@mui/icons-material/Discount';

import type { MenuType } from "../../type/HomeType";
import type { ProductCategoryType, ProductType } from '../../type/ProductType';

const MenuData: MenuType[] = [
  { id: 1, title: 'Home', icon: <MeetingRoomIcon fontSize='medium' color='inherit' />, href: '/home' },
  { id: 2, title: 'Products', icon: <Inventory2Icon fontSize='medium' color='inherit' />, href: '/products' },
  { id: 3, title: 'Comments', icon: <CommentIcon fontSize='medium' color='inherit' />, href: '/comments' },
  { id: 4, title: 'Users', icon: <PeopleAltOutlinedIcon fontSize='medium' color='inherit' />, href: '/users' },
  { id: 5, title: 'Orders', icon: <ViewListIcon fontSize='medium' color='inherit' />, href: '/orders' },
  { id: 6, title: 'Discount', icon: <DiscountIcon fontSize='medium' color='inherit' />, href: '/discount' },

]

const ProductCategoryData: ProductCategoryType[] = [
  { id: '1', title: 'Phone' }, { id: '2', title: 'Laptop' }, { id: '3', title: 'Monitor' }
]

const ProductData: ProductType[] = [
  { id: '1', category: { id: '1', title: 'Phone' }, title: 'Redmi 9', image: 'logo192.png', price: 120, stock: 5 },
  { id: '2', category: { id: '1', title: 'Phone' }, title: 'Redmi Note 10', image: 'logo192.png', price: 160, stock: 12 },
  { id: '3', category: { id: '2', title: 'Laptop' }, title: 'Asus A10', image: 'logo192.png', price: 320, stock: 52 },
  { id: '4', category: { id: '2', title: 'Laptop' }, title: 'hp RE4', image: 'logo192.png', price: 400, stock: 15 },
  { id: '5', category: { id: '3', title: 'Monitor' }, title: 'Samsung 22', image: 'logo192.png', price: 170, stock: 67 },
  { id: '6', category: { id: '3', title: 'Monitor' }, title: 'LG 20', image: 'logo192.png', price: 130, stock: 34 },
]

export {
  MenuData, ProductCategoryData, ProductData
}