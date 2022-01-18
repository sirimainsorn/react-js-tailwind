import React from "react";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import { Sidebar } from "../components/Sidebar";
// import PropTypes from "prop-types";

export default function AdminLayout() {
  return (
    <div>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
      </div>
    </div>
  );
}

// AdminLayout.propTypes = {};
