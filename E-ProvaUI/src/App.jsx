import "./Pages/Auth/style.css"
import Login from "./Pages/Auth/Login"
import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Pages/Layout/Layout"
function App() {
  const route = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Login />
          }
        ]
          
      }
    ]
  )
  return (
    <div className="px-6">
      <RouterProvider router={route} />
    </div>
  )
}

export default App
