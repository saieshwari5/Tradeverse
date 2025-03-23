import React from "react";
import Navbar from "./Navbar"; 
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />  {/* ✅ Ensure Navbar is always present */}
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
