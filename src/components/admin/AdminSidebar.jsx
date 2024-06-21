import { useState } from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [active, setActive] = useState("Profile");

  const items = ["Profile", "Users", "Contributions", "Dashboard"];

  return (
    <div className="list-group" style={{ maxHeight: 100 }}>
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
