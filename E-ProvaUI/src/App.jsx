import { createBrowserRouter, RouterProvider } from "react-router"
import Login from "./Pages/Auth/Login"
import Layout from "./Pages/Layout/Layout"
import Register from "./Pages/Auth/Register"
import Home from "./Pages/Home/Home"
import ForgetPassword from "./Pages/Auth/ForgetPassword"
import NotFound from "./Pages/NotFound/NotFound"
import WishList from "./Pages/WishList/WishList"
import Products from "./Pages/products/Products"
import NewArrivals from "./Pages/NewArrivals/NewArrivals"
import Blog from "./Pages/blog/Blog"
import Cart from "./Pages/Cart/Cart"
function App() {
  const route = createBrowserRouter(
    [
      {
        path: "/e-prova",
        element: <Layout />,
        children: [
          {
            path: "/e-prova/*",
            element: <NotFound />
          },
          {
            path: "/e-prova",
            element: <Login />
          },
          {
            path: "/e-prova/login",
            element: <Login />
          },
          {
            path: "/e-prova/register",
            element: <Register />
          },
          {
            path: "/e-prova/forgotpassword",
            element: <ForgetPassword />
          },
          {
            path: "/e-prova/home",
            element: <Home />
          },
          {
            path: "/e-prova/wishlist",
            element: <WishList />
          },
          {
            path: "/e-prova/products",
            element: <Products />
          },
          {
            path:"/e-prova/newarrivals",
            element:<NewArrivals />
          },
          {
            path:"/e-prova/blog",
            element:<Blog />
          },
          {
            path:"/e-prova/cart",
            element:<Cart/> 
          }
        ]
      }
    ]
  )
  return (
    <div className="">
      <RouterProvider router={route} />
    </div>
  )
}

export default App
