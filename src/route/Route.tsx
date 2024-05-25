import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Users from "../pages/users/Users";
import Comments from "../pages/comments/Comments";
import DiscountCodes from "../pages/discountCodes/DiscountCodes";
import Orders from "../pages/orders/Orders";
import NotFound from "../pages/notFound/NotFound";

const routes = (isLogin: boolean, permissions: string[]) => [
    { path: '/', element: (isLogin && permissions.includes('/')) ? <Home /> : <NotFound /> },
    { path: '/products', element: (isLogin && permissions.includes('/products')) ? <Products /> : <NotFound /> },
    { path: '/users', element: (isLogin && permissions.includes('/users')) ? <Users /> : <NotFound /> },
    { path: '/comments', element: (isLogin && permissions.includes('/comments')) ? <Comments /> : <NotFound /> },
    { path: '/discount-codes', element: (isLogin && permissions.includes('/discount-codes')) ? <DiscountCodes /> : <NotFound /> },
    { path: '/orders', element: (isLogin && permissions.includes('/orders')) ? <Orders /> : <NotFound /> },
    { path: '/*', element: <NotFound /> },
]

export default routes