// src/layout/MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/src/assets/winter-bg.jpg')" }}>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default MainLayout;
