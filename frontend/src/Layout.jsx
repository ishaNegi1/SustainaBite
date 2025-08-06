import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, ScrollToTop } from "./components/allComponents";
import { useDispatch } from "react-redux";
import { login } from "./slices/authSlice";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(login(user));
    }
  }, []);

  return (
    <>
    <ScrollToTop />
      <div className=" bg-white dark:bg-black transition-colors duration-500">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
