import { useState, useRef, useEffect } from "react";
import { Outlet, useLoaderData, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import userServices from "../../services/userServices";

const Contributions = () => {
  const { user } = useLoaderData();
  const [selectedImg, setSelectedImg] = useState(null);
  const [location, setLocation] = useState(null);
  const mapRef = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedImg(event.target.files[0]);
  };

  const handleImgUpload = async () => {
    if (selectedImg) {
      try {
        const formData = new FormData();
        formData.append("file", selectedImg);

        const response = await userServices.uploadImage(formData);
        console.log("Image uploaded successfully:", response);

        alert(response.data.message);
      } catch (error) {
        console.log("Error uploading image:", error);
        alert(error.message);
      }
    }
  };

  const handleDelete = async (imageId) => {
    try {
      const response = await userServices.deleteImage(imageId);
      console.log("Image deleted successfully:", response);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div class="mb-3">
            <label htmlFor="reunite-seeker-picture" className="form-label">
              Picture of reunite seeker
            </label>
            <div className="input-group">
              <input
                className="form-control form-control-sm"
                id="reunite-seeker-picture"
                type="file"
                onChange={handleFileChange}
              />
              <button
                type="button"
                className="btn btn-primary btn-sm ms-2"
                onClick={handleImgUpload}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <button
            type="button"
            className="btn btn-primary btn-sm ms-2"
            onClick={() => {
              navigate("/users/contributions/new");
            }}
          >
            Add Picture!
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          {user.data?.user?.contributions?.length === 0 ? (
            <div className="contributation-status text-center mt-5">
              ***Not yet contributed***
            </div>
          ) : (
            <ol className="list-group list-group-numbered">
              {user.data.user.contributions.map((contribution) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between gap-2"
                    key={contribution._id.toString()}
                  >
                    <Link to={`${contribution._id.toString()}`}>
                      {contribution.key.split("/")[1]}
                    </Link>

                    <div className="d-flex justify-content-end gap-2">
                      <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(contribution._id.toString());
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ol>
          )}
        </div>
        <div className="col-md-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Contributions;
