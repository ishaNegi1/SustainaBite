import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Login,
  Signup,
  Donation,
  Fertilizer,
  Recipes,
  Blogs,
  Dashboard,
} from "./pages/allPages";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./Layout";
import store from "./store";
import { Provider } from "react-redux";

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
      {
        path: "blogs",
        element: (
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        ),
      },
      {
        path: "donation",
        element: (
          <PrivateRoute>
            <Donation />
          </PrivateRoute>
        ),
      },
      {
        path: "fertilizer",
        element: (
          <PrivateRoute>
            <Fertilizer />
          </PrivateRoute>
        ),
      },
      {
        path: "recipes",
        element: (
          <PrivateRoute>
            <Recipes />
          </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login/signup",
    element: <Navigate to="/signup" replace />,
  },
  {
    path: "/signup/login",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
