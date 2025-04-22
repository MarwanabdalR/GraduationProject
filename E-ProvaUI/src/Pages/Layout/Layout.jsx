import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";
import BottomMenu from "./BottomMenu";
import CategoryNav from "./CategoryNav";

export default function Layout() {
  return (
    <>
      <Nav />
      <div className="mx-3 mt-32">
        <CategoryNav />
        <Outlet />
        <BackToTopButton />
        
      </div>
      <BottomMenu />
      <Footer />
    </>
  );
}
