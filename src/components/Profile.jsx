import React from "react";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const { user } = useLoaderData();

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
                      onClick={() => {}}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Fullname</td>
                  <td>
                    {user.data.user.firstname} {user.data.user.lastname}
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{user.data.user.email}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{user.data.user.phone}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{user.data.user.userCategory} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
