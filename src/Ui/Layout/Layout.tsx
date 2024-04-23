import { Outlet, useLocation } from "react-router-dom";
import Navbar from "src/Ui/Components/Common/Navbar/Navbar";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar isHome={location.pathname === "/"} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
