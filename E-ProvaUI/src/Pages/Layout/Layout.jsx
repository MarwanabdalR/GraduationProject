import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Nav />
      <div className="mx-3">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
