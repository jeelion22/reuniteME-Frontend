import "../styles/Home.css";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header title">Welcome to ReUniteME!</div>
              <div className="card-body">
                <ul className="text-muted">
                  <li>
                    <span className="border rounded p-1 reuniteme">
                      {" "}
                      "ReuniteMe"{" "}
                    </span>{" "}
                    is a web-based platform that enables users to upload and tag
                    photos with the locations of mentally ill individuals found
                    wandering.{" "}
                  </li>
                  <li>
                    The application ensures privacy with a detailed registration
                    process for family searchers and a simplified one for the
                    general public. Its primary goal is to facilitate family
                    reunifications through a secure, map-based search
                    functionality.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
