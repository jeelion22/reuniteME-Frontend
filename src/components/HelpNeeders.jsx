import React, { useEffect, useState } from "react";
import ReuniteSeekerResponseForm from "./ReuniteSeekerResponseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import UpdateReuniteSeekerStatus from "./UpdateReuniteSeekerStatus";
import userServices from "../../services/userServices";

const HelpNeeders = ({ contribution }) => {
  const [showResponse, setShowResponse] = useState(false);
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    const handleStatus = async (contributionId) => {
      try {
        const response = await userServices.getStatus(contributionId);

        if (
          response.data?.message?.checking &&
          response.data?.message?.status === "not-rescued"
        ) {
          if (response.data.visitorsId === contributionId) {
            setShowResponse(true);
          }

          setBtnDisable(true);
        }

        if (response.data.message?.status === "rescued") {
          setBtnDisable(true);
        }

        if (contribution.status === "rescued") {
          setBtnDisable(true);
        }
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    };
    handleStatus(contribution._id);
  }, [contribution._id]);

  return (
    <div className="col" key={contribution._id}>
      <div className="card h-100">
        <img
          src={contribution.url}
          className="card-img-top img-thumbnail img-fluid"
          alt="..."
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{contribution.name}</h5>
          <p className="card-text">{contribution.description}</p>
          <p className="card-text">
            <small className="text-muted">{contribution.uploadDate}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">Status: {contribution.status}</small>
          </p>
        </div>

        {showResponse && <UpdateReuniteSeekerStatus />}

        <div
          className="modal fade"
          id={`exampleModal-${contribution._id}`}
          tabIndex="-1"
          aria-labelledby={`exampleModalLabel-${contribution._id}`}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title fs-5 "
                  id={`exampleModalLabel-${contribution._id}`}
                >
                  For Location
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ReuniteSeekerResponseForm contribution={contribution} />
              </div>
              {/* <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div> */}
            </div>
          </div>
        </div>
        <div className="card-footer text-center">
          <button className="btn" disabled={btnDisable}>
            <FontAwesomeIcon
              icon={faMapLocationDot}
              type="button"
              className="btn btn-outline-success"
              data-bs-toggle="modal"
              data-bs-target={`#exampleModal-${contribution._id}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpNeeders;
