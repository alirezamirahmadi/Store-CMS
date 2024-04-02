import Products from "../pages/products/Products";
import Users from "../pages/users/Users";

const routes = [
    {path:'/', element:<div />},
    {path:'/products', element:<Products />},
    {path:'/users', element:<Users />},
]

export default routes