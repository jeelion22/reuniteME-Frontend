import "../styles/AdminDashboardNav.css";
import { useState } from "react";
import { useNavigate, Link, Outlet, useLoaderData } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import userServices from "../../services/userServices";
import { getUserCategoryLabel } from "./UserDashboardNav";
import reuniteMeLogo from "../assets/reuniteme_logo.svg";
import { toast } from "react-toastify";

export async function loader() {
  try {
    const response = await userServices.getCurrentAdmin();

    return { ...response.data.admin };
  } catch (error) {
    alert(error.response.data.message);
    return null;
  }
}

const AdminDashboardNave = () => {
  const navigate = useNavigate();
  const [isAreaExpanded, setIsAreaExpanded] = useState(false);

  const admin = useLoaderData();

  const handleLogout = async () => {
    try {
      const response = await userServices.adminLogout();

      if (response.status === 204) {
        toast.success("Logged out successfully!");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleNavButton = () => {
    setIsAreaExpanded((prev) => !prev);
  };

  return (
    <div class="container-fluid">
      <div class="row ">
        <div class="col admin-dashboard-nav">
          <nav class="navbar navbar-expand-lg">
            <img src={reuniteMeLogo} alt="ReUniteME Logo" />
            <button
              class={`navbar-toggler border-0 nav-toggle ${
                isAreaExpanded ? "open" : ""
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded={isAreaExpanded}
              aria-label="Toggle navigation"
              onClick={handleNavButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 100 100"
                class="hamburger-icon"
              >
                <line class="line top" x1="20" y1="30" x2="80" y2="30" />
                <line class="line middle" x1="20" y1="50" x2="80" y2="50" />
                <line class="line bottom" x1="20" y1="70" x2="80" y2="70" />
              </svg>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link disabled " aria-disabled="true">
                    <h6 class="user-logged">
                      Welcome {admin?.firstname} {admin?.lastname}
                    </h6>
                  </a>
                </li>
                <li class="nav-item">
                  <button class="nav-link" onClick={handleLogout}>
                    <h6 class="logout">Logout</h6>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div class="mt-4 text-end user-logged">
        {getUserCategoryLabel(admin.role)}
      </div>

      <div class="row mt-5">
        <div class="col-md-3">
          <AdminSidebar admin={admin} />
        </div>
        <div class="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardNave;
