import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import axios from "axios";
import userServices from "../../services/userServices";

const ImageDetails = () => {
  const { imageId } = useParams();
  const { user } = useLoaderData();
  const [imageUrl, setImageUrl] = useState(null);

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
    <div className="card" style={{ width: "36rem" }}>
      {imageUrl ? (
        <img
          src={imageUrl}
          className="card-img-top"
          alt={contribution.key.split("/")[1]}
        />
      ) : (
        <div>Loading image...</div>
      )}
      <div className="card-body">
        <h5 className="card-title">Details of reunite seeker</h5>
        <p className="card-text">Description: {contribution.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Name: {contribution.name} </li>
        <li className="list-group-item">Address: {contribution.address}</li>
        <li className="list-group-item">Phone: {contribution.phone}</li>
      </ul>
      <div className="card-body">
        <button onClick={handleImageUrl} className="card-link btn btn-primary">
          Click for Location
        </button>
      </div>
    </div>
  );
};

export default ImageDetails;
