import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({});

  const navigate = useNavigate();
  const { user } = useLoaderData();

  const handleProfileUpdate = () => {
    navigate("update");
  };

  useEffect(() => {
    if (user) {
      setUserInfo(user.data.user);
    }
  }, [user]);

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
                  <td>Fullname</td>
                  <td>
                    {userInfo.firstname} {userInfo.lastname}
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{userInfo.email}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{userInfo.phone}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{userInfo.userCategory} </td>
                </tr>
                {["reuniteSeeker", "both"].includes(userInfo.userCategory) && (
                  <>
                    <tr>
                      <td>Address</td>
                      <td>{userInfo.address}</td>
                    </tr>
                    <tr>
                      <td>Authorized Id: </td>
                      <td>{userInfo.authorizedIdType}</td>
                    </tr>
                    <tr>
                      <td>Authorized Id No.</td>
                      <td>{userInfo.authorizedIdNo}</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
