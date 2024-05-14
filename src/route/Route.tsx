import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Users from "../pages/users/Users";
import Comments from "../pages/comments/Comments";
import DiscountCodes from "../pages/discountCodes/DiscountCodes";
import Orders from "../pages/orders/Orders";
import Login from "../pages/login/Login";

const routes = [
    { path: '/', element: <Login /> },
    { path: '/products', element: <Products /> },
    { path: '/users', element: <Users /> },
    { path: '/comments', element: <Comments /> },
    { path: '/discount-codes', element: <DiscountCodes /> },
    { path: 'orders', element: <Orders /> },
]

export default routes