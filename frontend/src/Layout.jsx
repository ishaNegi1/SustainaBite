import React from 'react'
import {Outlet} from 'react-router-dom'
import {Footer, Navbar} from './components/allComponents'

const Layout = () => {
  return (
    <>
      <div className=" bg-white dark:bg-black transition-colors duration-500">
      <Navbar />
        <Outlet />
      <Footer />
      </div>
    </>
  )
}

export default Layout
