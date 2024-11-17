import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="flex justify-center  min-h-screen bg-[#1e1e1e]">
      <main className="w-full font-inter  max-w-screen-lg bg-[#1D1E22] my-4 md:w-3/4">
        <Navbar />
        <Outlet />
        <Footer className="font-bold" />
      </main>
    </div>
  );
}

export default Layout;

{
  /* <Sidebar className="w-1/4 hidden md:block" /> */
}
{
  /* Sidebar only shows on md+ screens */
}
