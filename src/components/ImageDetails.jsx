import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import axios from "axios";
import userServices from "../../services/userServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ImageDetails = () => {
  const { imageId } = useParams();
  const { user } = useLoaderData();
  const [imageUrl, setImageUrl] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const response = await userServices.getImage(imageId);
        setImageUrl(response.data.url);
      } catch (error) {
        console.log("Error fetching image URL:", error);
        alert(error.message);
      }
    };
    fetchImageUrl();
  }, [imageId]);

  const handleImageUrl = async () => {
    try {
      const response = await userServices.getMapUrl(imageId);
      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.log("Error fetching Google Maps URL:", error);
      alert(error.message);
    }
  };

  const contribution = user.data.user.contributions.find((contribution) => {
    return contribution._id.toString() === imageId;
  });

  if (!contribution) {
    return <div>Contribution not found</div>;
  }

  return (
    <div className="container border rounded mt-2">
      <div className="row mt-2">
        <div className="col-md-12 text-end">
          <FontAwesomeIcon
            // className="btn btn-outline-dark"
            type="button"
            icon={faRectangleXmark}
            style={{ fontSize: "36px" }}
            onClick={() => {
              navigate("/users/contributions");
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 text-center p-2 ">
          <h5>Details of Reunite Seeker</h5>
        </div>
      </div>

      <div className="row p-2">
        <div className="col-md-6 col-sm-12">
          <img
            src={imageUrl}
            className="img-fluid rounded"
            alt={contribution.key.split("/")[1]}
          />
        </div>

        <div className="col-md-6 col-lg-6 col-sm-12 ">
          <div className="row">
            <div className="col-md-12">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <th>Description</th>
                    <td>{contribution.description}</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{contribution.name}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{contribution.address}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{contribution.phone}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Location</th>
                    <td>
                      <FontAwesomeIcon
                        icon={faMapLocationDot}
                        type="button"
                        onClick={handleImageUrl}
                        style={{ fontSize: "36px" }}
                      />
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
