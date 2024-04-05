import Products from "../pages/products/Products";
import Users from "../pages/users/Users";
import Comments from "../pages/comments/Comments";
import DiscountCodes from "../pages/discountCodes/DiscountCodes";

const routes = [
    {path:'/', element:<div />},
    {path:'/products', element:<Products />},
    {path:'/users', element:<Users />},
    {path:'/comments', element:<Comments />},
    {path:'/discount-codes', element:<DiscountCodes />},
]

export default routes