import "../styles/Home.css";
import React from "react";
// import HomepageCarousel from "./HomepageCarousel";
import humanity from "../assets/humanity.png";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {/* <div className="card">
              <div className="card-header title">Welcome to ReUniteME!</div>
              <div className="card-body">
                <ul className="text-muted">
                  <li>
                    <span className="border rounded p-1 reuniteme">
                      {" "}
                      "ReuniteMe"{" "}
                    </span>{" "}
                    is a web application designed to facilitate the reunion of
                    person with mental health issues and individuals in
                    endangered situations with their families. The application
                    enables users to upload and tag photos with the locations of
                    person with mental health issues.{" "}
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
            </div> */}

            {/* <HomepageCarousel /> */}

            <div className="text-center p-4">
              <div
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "bold",
                  fontSize: "28px",
                  lineHeight: "35px",
                  marginBottom: "8px",
                  color: "rgb(83, 20, 134)",
                }}
              >
                Help reunite missing with families
              </div>

              <div style={{ color: "rgb(74, 73, 75)" }}>
                Contribute information or search for missing persons. <br />{" "}
                Your actions can make a difference.
              </div>

              <div className="d-flex mt-4 gap-4 justify-content-center">
                <button
                  type="button"
                  class="btn btn-primary "
                  onClick={() => navigate("/users/register")}
                >
                  Contribute
                </button>

                <button
                  type="button"
                  class="btn btn-light btn-transparent rounded"
                  onClick={() => navigate("/users/login")}
                >
                  Search
                </button>
              </div>

              <div>
                <img
                  src={humanity}
                  className="w-50"
                  alt="humanity-image"
                  // style={{
                  //   animation: "spin 24s linear infinite",
                  // }}
                />
                <style>
                  {`
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}
                </style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
