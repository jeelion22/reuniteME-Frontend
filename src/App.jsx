import { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeNav from "./wrappers/HomeNav";
import UserRegister from "./components/UserRegister";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import Home from "./components/Home";
import VerifyAccount from "./components/VerifyAccount";
import CreatePassword from "./components/CreatePassword";
import UserForgotPassword from "./components/UserForgotPassword";
import UserDashboardNav from "./wrappers/UserDashboardNav";
import { loader as UserLoader } from "./wrappers/UserDashboardNav";
import Profile from "./components/Profile";
import Contributions from "./components/Contributions";
import ImageDetails from "./components/ImageDetails";
import NewContribution from "./components/NewContribution";
import UpdateSeekerData from "./components/UpdateSeekerData";
import ContributerDashboard from "./components/ContributerDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeNav />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "users/register",
        element: <UserRegister />,
      },
      {
        path: "/users/verify/:activationId",
        element: <VerifyAccount />,
      },
      {
        path: "/users/verified/create-password/:userId",
        element: <CreatePassword />,
      },

      {
        path: "/users/forgot-password",
        element: <UserForgotPassword />,
      },

      {
        path: "users/login",
        element: <UserLogin />,
      },
      { path: "admins/login", element: <AdminLogin /> },
    ],
  },
  {
    path: "users",

    element: <UserDashboardNav />,
    loader: UserLoader,
    children: [
      {
        path: "dashboard",
        element: <ContributerDashboard />,
        loader: UserLoader,
      },
      {
        path: "profile",
        loader: UserLoader,
        element: <Profile />,
      },
      {
        path: "contributions",
        loader: UserLoader,
        element: <Contributions />,
        children: [
          {
            path: ":imageId",
            loader: UserLoader,
            element: <ImageDetails />,
          },
        ],
      },
      {
        path: "contributions/new",
        loader: UserLoader,
        element: <NewContribution />,
      },
      {
        path: "contributions/edit/:imageId",
        element: <UpdateSeekerData />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
