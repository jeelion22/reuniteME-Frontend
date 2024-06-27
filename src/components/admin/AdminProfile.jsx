import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const AdminProfile = () => {
  const [adminInfo, setAdminInfo] = useState({});

  const admin = useLoaderData();

  const handleProfileUpdate = () => {};

  useEffect(() => {
    if (admin) {
      setAdminInfo(admin);
    }
  }, [admin]);

  return (
    <div className="container" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="row justify-content-center ">
        <div
          className="col-md-8 col-sm-12 border rounded p-4 m-4"
          style={{ backgroundColor: "white" }}
        >
          <div className="col-md-12 ">
            <table className="table table-borderless ">
              <thead>
                <tr>
                  <td colSpan={3}>
                    <h3
                      className="text-center border-bottom"
                      style={{ color: "#343a40" }}
                    >
                      Profile
                    </h3>
                  </td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td colSpan={3} className="text-end">
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      type="button"
                      className="btn btn-outline-primary "
                      onClick={handleProfileUpdate}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Username</td>
                  <td>{admin.username}</td>
                </tr>

                <tr>
                  <td>Fullname</td>
                  <td>
                    {adminInfo.firstname} {adminInfo.lastname}
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{adminInfo.email}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{adminInfo.phone}</td>
                </tr>
                <tr>
                  <td>Role</td>
                  <td>{adminInfo.role} </td>
                </tr>

                <tr>
                  <td>Permissions</td>
                  <td>{adminInfo.permissions?.join(", ")}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{adminInfo.status}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
