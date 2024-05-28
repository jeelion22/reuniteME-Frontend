import React from "react";
import { useLoaderData } from "react-router-dom";

const Profile = () => {
  const { user } = useLoaderData();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <td colSpan={2}>
                  <h3 className="text-center">Profile</h3>
                </td>
              </tr>
            </thead>

            <tbody>
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
                <td>{user.data.user.userCategory}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
