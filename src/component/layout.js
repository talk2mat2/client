import React from "react";
import Navbar from "./navBar";
import SideBar from "./sideBar";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-row bg-grey">
      <SideBar />
      <div className="flex-fill">
        <Navbar />
        <div className="mt-5 px-3">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
