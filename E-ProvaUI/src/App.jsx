import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Pages/Auth/Login";
import Layout from "./Pages/Layout/Layout";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home/Home";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import NotFound from "./Pages/NotFound/NotFound";
import WishList from "./Pages/WishList/WishList";
import Products from "./Pages/products/Products";
import NewArrivals from "./Pages/NewArrivals/NewArrivals";
import Blog from "./Pages/blog/Blog";
import Cart from "./Pages/Cart/Cart";
import { AuthProvider } from "./Func/context/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import ResetCode from "./Pages/Auth/RsetCode";
import AdminLayout from "./Pages/Layout/Admin/AdminLayout";
import Dashboard from "./Pages/Admin/Dashboard";
import AdminProducts from "./Pages/Admin/AdminProducts";
import ManageAdmin from "./Pages/Admin/ManageAdmin";
import ManageProduct from "./Pages/Admin/ManageProduct";
import AdminCategories from "./Pages/Admin/AdminCategories";
import ManageCategories from "./Pages/Admin/ManageCategories";
import AdminBrands from "./Pages/Admin/AdminBrands";
import ManageBrands from "./Pages/Admin/ManageBrands";
import AdminOrders from "./Pages/Admin/AdminOrders";
import AdminReviews from "./Pages/Admin/AdminReviews";
import AdminOffer from "./Pages/Admin/AdminOffer";

const queryClient = new QueryClient();

function App() {
  const route = createBrowserRouter([
    {
      path: "/e-prova",
      element: <Layout />,
      children: [
        {
          path: "/e-prova/*",
          element: <NotFound />,
        },
        {
          path: "/e-prova",
          element: <Login />,
        },
        {
          path: "/e-prova/login",
          element: <Login />,
        },
        {
          path: "/e-prova/register",
          element: <Register />,
        },
        {
          path: "/e-prova/forgotpassword",
          element: <ForgetPassword />,
        },
        {
          path: "/e-prova/home",
          element: <Home />,
        },
        {
          path: "/e-prova/wishlist",
          element: <WishList />,
        },
        {
          path: "/e-prova/products",
          element: <Products />,
        },
        {
          path: "/e-prova/newarrivals",
          element: <NewArrivals />,
        },
        {
          path: "/e-prova/blog",
          element: <Blog />,
        },
        {
          path: "/e-prova/cart",
          element: <Cart />,
        },
        {
          path: "/e-prova/resetcode",
          element: <ResetCode />,
        }
      ],
    },
    {
      path: "/e-prova/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/e-prova/admin/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/e-prova/admin/*",
          element: <NotFound />,
        },
        {
          path: "/e-prova/admin",
          element: <Dashboard />,
        },
        {
          path: "/e-prova/admin/add-admin",
          element: <ManageAdmin />,
        },
        {
          path: "/e-prova/admin/products/manage",
          element: <ManageProduct />,
        },
        {
          path: "/e-prova/admin/products",
          element: <AdminProducts />,
        },
        {
          path: "/e-prova/admin/categories",
          element: <AdminCategories />,
        },
        {
          path: "/e-prova/admin/categories/manage",
          element: <ManageCategories />,
        },
        {
          path: "/e-prova/admin/brands",
          element: <AdminBrands />,
        },
        {
          path: "/e-prova/admin/brands/manage",
          element: <ManageBrands />,
        },
        {
          path: "/e-prova/admin/orders",
          element: <AdminOrders />,
        },
        {
          path: "/e-prova/admin/reviews",
          element: <AdminReviews />,
        },
        {
          path: "/e-prova/admin/offers",
          element: <AdminOffer />,
        }


      ],
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ]);
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <RouterProvider router={route} />
        </AuthProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
