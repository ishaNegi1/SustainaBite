import { createRoot } from 'react-dom/client'
import './index.css'
import {
   createBrowserRouter,
   RouterProvider,
   Navigate,
 } from "react-router-dom";
import {Home, About, Contact, Login, Signup} from './pages/allPages'
import Layout from './Layout'

const router = createBrowserRouter([
   {
     path: "/",
     element: <Layout />,
     children: [
       {
         path: "",
         element: <Home />,
       },
       {
         path: "about",
         element: <About />,
       },
       {
         path: "contact",
         element: <Contact />,
       },
       {
         path: "login",
         element: <Login />,
       },
       {
         path: "signup",
         element: <Signup />,
       },
     ],
   },
   {
      path: '/login',
      element: <Login />,
   },
   {
      path: '/signup',
      element: <Signup />,
   },
   {
      path: '/login/signup',
      element: <Navigate to="/signup" replace />,
   },
   {
      path: '/signup/login',
      element: <Navigate to="/login" replace />
   },
   {
      path: '*',
      element: <Navigate to="/" replace />
   },
 ]);

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
