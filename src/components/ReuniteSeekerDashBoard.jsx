import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import userServices from "../../services/userServices";
import ReactPaginate from "react-paginate";

export const ReuniteSeekerDashBoard = () => {
  const [contributions, setContributions] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function getAllContributions() {
      try {
        const response = await userServices.getAllContributions();
        setContributions(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllContributions();
  }, []);

  const handleLocation = async (location) => {
    try {
      const url = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}`;

      window.location.href = url;
    } catch (error) {
      console.log("Error fetching Google Maps URL:", error);
      alert(error.message);
    }
  };

  const itemsPerPage = 6;
  const paginatedContributions = contributions.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {paginatedContributions.map((contribution) => (
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
                      <small className="text-muted">
                        {contribution.uploadDate}
                      </small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Status: {contribution.status}
                      </small>
                    </p>
                  </div>
                  <div className="card-footer text-center">
                    <FontAwesomeIcon
                      icon={faMapLocationDot}
                      type="button"
                      className="btn btn-outline-success"
                      onClick={() => handleLocation(contribution.location)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {paginatedContributions && (
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            pageCount={Math.ceil(contributions.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            className="pagination justify-content-center mt-4"
            pageClassName="page_item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
            onPageChange={handlePageClick}
          />
        )}
      </div>
    </div>
  );
};
