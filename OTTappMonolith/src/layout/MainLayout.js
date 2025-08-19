import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./MainLayout.css";

/**
 * PUBLIC_INTERFACE
 * MainLayout composes the app's main layout with Navbar and routed content.
 */
export default function MainLayout() {
  return (
    <div className="layout-root">
      <Navbar />
      <main className="layout-content" id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <footer className="layout-footer" aria-label="Footer">
        <p>© {new Date().getFullYear()} OTT Monolith. All rights reserved.</p>
      </footer>
    </div>
  );
}
