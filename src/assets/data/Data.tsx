import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ViewListIcon from '@mui/icons-material/ViewList';
import DiscountIcon from '@mui/icons-material/Discount';

import type { MenuType } from "../../type/HomeType";
import type { ProductCategoryType, ProductType } from '../../type/ProductType';
import { UserType } from '../../type/UserType';
import { CommentType } from '../../type/CommentType';
import { DiscountCodesType } from '../../type/DiscountCodesType';
import { OrderType } from '../../type/OrderType';

const MenuData: MenuType[] = [
  { id: 1, title: 'Home', icon: <MeetingRoomIcon fontSize='medium' color='inherit' />, href: '/home' },
  { id: 2, title: 'Products', icon: <Inventory2Icon fontSize='medium' color='inherit' />, href: '/products' },
  { id: 3, title: 'Comments', icon: <CommentIcon fontSize='medium' color='inherit' />, href: '/comments' },
  { id: 4, title: 'Users', icon: <PeopleAltOutlinedIcon fontSize='medium' color='inherit' />, href: '/users' },
  { id: 5, title: 'Orders', icon: <ViewListIcon fontSize='medium' color='inherit' />, href: '/orders' },
  { id: 6, title: 'Discount', icon: <DiscountIcon fontSize='medium' color='inherit' />, href: '/discount-codes' },
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

const UserData: UserType[] = [
  { id: '1', firstName: 'Anna', lastName: 'Mirahmadi', image: './image/users/user-1.png', province: 'Kerman', city: 'Kerman', address: 'Shariati St', phone: '09139875583', postalCode: '6587-6587', email: 'kerman@yahoo.com', ePhone: '09139876543', description: 'beautiful' },
  { id: '2', firstName: 'Lena', lastName: 'Mirahmadi', image: './image/users/user-2.png', province: 'Kerman', city: 'Kerman', address: 'Shariati St', phone: '09139875583', postalCode: '6587-6587', email: 'kerman@yahoo.com', ePhone: '09139876543', description: 'beautiful' },
  { id: '3', firstName: 'Fakhri', lastName: 'Khorasani', image: './image/users/user-3.png', province: 'Kerman', city: 'Kerman', address: 'Shariati St', phone: '09139875583', postalCode: '6587-6587', email: 'kerman@yahoo.com', ePhone: '09139876543', description: 'beautiful' },
  { id: '4', firstName: 'Alireza', lastName: 'Mirahmadi', image: './image/users/user-1.png', province: 'Kerman', city: 'Kerman', address: 'Shariati St', phone: '09139875583', postalCode: '6587-6587', email: 'kerman@yahoo.com', ePhone: '09139876543', description: 'beautiful' },
]

const CommentData: CommentType[] = [
  { id: '1', creator: { id: '1', firstName: 'Anna', lastName: 'Mirahmadi', image: './image/users/user-1.png', phone: '09139875583' }, content: 'Hello LenaAnna 1', date: '2024-02-03', time: '11:32' },
  { id: '2', creator: { id: '2', firstName: 'Lena', lastName: 'Mirahmadi', image: './image/users/user-2.png', phone: '09139875583' }, content: 'Hello LenaAnna 2', date: '2024-02-03', time: '11:30' },
  {
    id: '3', creator: { id: '3', firstName: 'Fakhri', lastName: 'Khorasani', image: './image/users/user-3.png', phone: '09139875583' }, content: 'Hello LenaAnna 3', date: '2024-02-03', time: '12:32',
    answer: [{ id: '1', creator: { id: '1', firstName: 'Anna', lastName: 'Mirahmadi', image: './image/users/user-1.png', phone: '09139875583' }, content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis omnis, doloribus sunt expedita inventore delectus nisi quidem earum hic. Sapiente voluptas nostrum similique optio ullam magni accusantium facilis voluptatibus! Rerum?', date: '2024-02-03', time: '02:32' }],
  },
]

const DiscountCodesData: DiscountCodesType[] = [
  { id: '1', code: '87er', percent: 40, maximumuse: 1, used: 0, },
  { id: '2', code: '34er', percent: 20, maximumuse: 2, used: 1, },
  { id: '3', code: '23er', percent: 50, maximumuse: 1, used: 0, },
  { id: '4', code: '67er', percent: 10, maximumuse: 10, used: 5, },
  { id: '5', code: '12er', percent: 30, maximumuse: 1, used: 0, },
  { id: '6', code: '43er', percent: 70, maximumuse: 1, used: 0, },
]


const OrderData: OrderType[] = [
  {
    id: '1', code: '23765', orderDate: '06/11/1401', status: "Delivered", price: 252, off: 28, details: [
      { id: '1', category: { id: '1', title: 'Phone' }, title: 'Redmi 9', image: 'logo192.png', price: 120, stock: 5 },
      { id: '2', category: { id: '1', title: 'Phone' }, title: 'Redmi Note 10', image: 'logo192.png', price: 160, stock: 12 },
    ]
  },
  {
    id: '2', code: '87543', orderDate: '08/12/1401', status: "Canceled", price: 128, off: 32, details: [
      { id: '2', category: { id: '1', title: 'Phone' }, title: 'Redmi Note 10', image: 'logo192.png', price: 160, stock: 12 },
    ]
  },
  {
    id: '3', code: '09755', orderDate: '06/06/1402', status: "Delivered", price: 120, details: [
      { id: '1', category: { id: '1', title: 'Phone' }, title: 'Redmi 9', image: 'logo192.png', price: 120, stock: 5 },
    ]
  },
  {
    id: '4', code: '12432', orderDate: '15/10/1402', status: "In process", price: 630, off: 70, details: [
      { id: '4', category: { id: '2', title: 'Laptop' }, title: 'hp RE4', image: 'logo192.png', price: 400, stock: 15 },
      { id: '5', category: { id: '3', title: 'Monitor' }, title: 'Samsung 22', image: 'logo192.png', price: 170, stock: 67 },
      { id: '6', category: { id: '3', title: 'Monitor' }, title: 'LG 20', image: 'logo192.png', price: 130, stock: 34 },
    ]
  }
]

export {
  MenuData, ProductCategoryData, ProductData, UserData, CommentData, DiscountCodesData, OrderData
}