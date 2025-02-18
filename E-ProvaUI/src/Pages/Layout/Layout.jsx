import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";

export default function Layout() {
  return (
    <>
      <Nav />
      <div className="mx-3 mt-32">
        <Outlet />
        <BackToTopButton />
      </div>
      <Footer />
    </>
  );
}
