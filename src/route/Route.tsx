import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Users from "../pages/users/Users";
import Comments from "../pages/comments/Comments";
import DiscountCodes from "../pages/discountCodes/DiscountCodes";
import Orders from "../pages/orders/Orders";
import NotFound from "../pages/notFound/NotFound";

const routes = (isLogin: boolean) => [
    { path: '/', element: isLogin ? <Home /> : <NotFound /> },
    { path: '/products', element: isLogin ? <Products /> : <NotFound /> },
    { path: '/users', element: isLogin ? <Users /> : <NotFound /> },
    { path: '/comments', element: isLogin ? <Comments /> : <NotFound /> },
    { path: '/discount-codes', element: isLogin ? <DiscountCodes /> : <NotFound /> },
    { path: 'orders', element: isLogin ? <Orders /> : <NotFound /> },
]

export default routes