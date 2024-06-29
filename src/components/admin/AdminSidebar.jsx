import { useState } from "react";
import { Link } from "react-router-dom";

const AdminSidebar = ({ admin }) => {
  const [active, setActive] = useState("Dashboard");

  const requiredPermissions = ["read", "write", "update", "delete"];

  const isAdminAuthorized = requiredPermissions.every((permission) =>
    admin.permissions.includes(permission)
  );

  let items;

  if (isAdminAuthorized) {
    items = [
      "Dashboard",
      "Contributions",
      "Users",
      "Create-Admin",
      "Admins-List",
      "Profile",
    ];
  } else {
    items = ["Dashboard", "Contributions", "Users", "Profile"];
  }

  return (
    <div className="list-group mb-2">
      {items.map((item, index) => (
        <Link
          key={index}
          to={`${item.toLowerCase()}`}
          className={`list-group-item list-group-item-action ${
            active === item ? "active" : ""
          }`}
          onClick={() => setActive(item)}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default AdminSidebar;
