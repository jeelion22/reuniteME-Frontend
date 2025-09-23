import { useEffect, useState } from "react";
import "../styles/HomeNav.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import reuniteMeLogo from "../assets/reuniteme_logo.svg";

const HomeNav = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const [isAreaExpanded, setIsAreaExpanded] = useState(false);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  function activateLink(currentLink) {
    setActive(currentLink);
  }

  const handleNavButton = () => {
    setIsAreaExpanded((prev) => !prev);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg home-dashboard-nav ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={reuniteMeLogo} alt="ReUniteME Logo" />
          </Link>
          <button
            className={`navbar-toggler border-0 nav-toggle ${
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
              className="hamburger-icon"
            >
              <line className="line top" x1="20" y1="30" x2="80" y2="30" />
              <line className="line middle" x1="20" y1="50" x2="80" y2="50" />
              <line className="line bottom" x1="20" y1="70" x2="80" y2="70" />
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    active === "/users/register" ? "active" : ""
                  }
                   `}
                  aria-current="page"
                  to="/users/register"
                  onClick={() => {
                    activateLink("/users/register");
                  }}
                >
                  <h6>Register</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    active === "/users/login" ? "active" : ""
                  }`}
                  to="/users/login"
                  onClick={() => {
                    activateLink("/users/login");
                  }}
                >
                  <h6>Login</h6>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    active === "/admins/login" ? "active" : ""
                  }`}
                  to="/admins/login"
                  onClick={() => {
                    activateLink("/admins/login");
                  }}
                >
                  <h6>Admin Login</h6>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
};

export default HomeNav;
