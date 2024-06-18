import React, { useEffect } from "react";
import userServices from "../../services/userServices";
import { Link, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export async function loader() {
  const user = await userServices.getCurrentUser();

  return { user };
}

const UserDashboardNav = () => {
  const navigate = useNavigate();

  const { user } = useLoaderData();

  const handleLogout = () => {
    userServices
      .logout()
      .then((response) => {
        alert(response.data.message);
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.message);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <Link className="navbar-brand" to="/">
              ReUniteMe
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Welcome {user.data.user.firstname} {user.data.user.lastname}
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-md-3">
          <Sidebar userType={user.data.user.userCategory} />
        </div>
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboardNav;
