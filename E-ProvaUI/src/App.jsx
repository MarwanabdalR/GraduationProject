import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthProvider } from "./Func/context/AuthContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
// User
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
import ResetCode from "./Pages/Auth/RsetCode";
import AdminLayout from "./Pages/Layout/Admin/AdminLayout";
import Dashboard from "./Pages/Admin/Dashboard";
// Admin
import ManageAdmin from "./Pages/Admin/ManageAdmin";
import AdminOrders from "./Pages/Admin/AdminOrders";
import AdminReviews from "./Pages/Admin/AdminReviews";
import ManageProduct from "./Pages/Admin/Product/ManageProduct";
import AdminProducts from "./Pages/Admin/Product/AdminProducts";
import AdminCategories from "./Pages/Admin/Category/AdminCategories";
import ManageCategories from "./Pages/Admin/Category/ManageCategories";
import AdminBrands from "./Pages/Admin/Brand/AdminBrands";
import ManageBrands from "./Pages/Admin/Brand/ManageBrands";
import AdminOffer from "./Pages/Admin/Offer/AdminOffer";
import AddOffer from "./Pages/Admin/Offer/AddOffer";
import { BrandContextProvider } from "./Func/context/Admin/BrandContextProvider";
import ProtectedPath from "./Pages/Auth/ProtectedPath";

const queryClient = new QueryClient();

function App() {
  const route = createBrowserRouter([
    // User
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
        },
      ],
    },
    // Admin
    {
      path: "/e-prova/admin",
      element: (
          <AdminLayout />
      ),
      children: [
        {
          path: "/e-prova/admin/dashboard",
          element: (
              <Dashboard />
          ),
        },
        {
          path: "/e-prova/admin/*",
          element: (
              <NotFound />
          ),
        },
        {
          path: "/e-prova/admin",
          element: (
              <Dashboard />
          ),
        },
        {
          path: "/e-prova/admin/add-admin",
          element: (
              <ManageAdmin />
          ),
        },
        {
          path: "/e-prova/admin/products/manage",
          element: (
              <ManageProduct />
          ),
        },
        {
          path: "/e-prova/admin/products",
          element: (
              <AdminProducts />
          ),
        },
        {
          path: "/e-prova/admin/categories",
          element: (
              <AdminCategories />
          ),
        },
        {
          path: "/e-prova/admin/categories/manage",
          element: (
              <ManageCategories />
          ),
        },
        {
          path: "/e-prova/admin/brands",
          element: (
              <AdminBrands />
          ),
        },
        {
          path: "/e-prova/admin/brands/manage",
          element: (
              <ManageBrands />
          ),
        },
        {
          path: "/e-prova/admin/orders",
          element: (
              <AdminOrders />
          ),
        },
        {
          path: "/e-prova/admin/reviews",
          element: (
              <AdminReviews />
          ),
        },
        {
          path: "/e-prova/admin/offers",
          element: (
              <AdminOffer />
          ),
        },
        {
          path: "/e-prova/admin/add-offer",
          element: (
              <AddOffer />
          ),
        },
      ],
    },
    // 404
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <BrandContextProvider>
          <AuthProvider>
            <Toaster position="top-right" reverseOrder={false} />
            <RouterProvider router={route} />
          </AuthProvider>
        </BrandContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
