import { useState } from "react";
import { Outlet, useLoaderData, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrashCan,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";
import userServices from "../../services/userServices";
import EditSeekerData from "./EditSeekerData";
import ReactPaginate from "react-paginate";

const Contributions = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleDelete = async (imageId) => {
    try {
      const response = await userServices.deleteImage(imageId);
      console.log("Image deleted successfully:", response);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  const handlePageClick = (data) => {
    console.log(data.selected);
    setCurrentPage(data.selected);
  };

  const itemsPerPage = 6;
  const contributions = user.data.user.contributions || [];
  const paginatedContributions = contributions.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 border rounded text-center p-4"
            style={{ backgroundColor: "purple", color: "white" }}
          >
            <h5>To make a new contribution, please </h5>
            <button
              className="btn btn-primary btn-sm"
              onClick={() => {
                navigate("/users/contributions/new");
              }}
            >
              Click ME!
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {contributions.length === 0 ? (
              <div className="col-md-12 contribution-status text-center mt-5">
                <p>***Not yet contributed***</p>
              </div>
            ) : (
              <ol className="list-group  mt-2">
                {paginatedContributions.map((contribution, index) => {
                  const itemNumber = currentPage * itemsPerPage + index + 1;
                  return (
                    <>
                      <li
                        className="list-group-item d-flex justify-content-around align-items-center"
                        key={contribution._id.toString()}
                      >
                        <span>{itemNumber}. </span>
                        <Link to={`${contribution._id.toString()}`}>
                          {contribution.key.split("/")[1]}
                        </Link>

                        <div className="d-flex justify-content-end gap-2">
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={() => {
                              setEdit(contribution._id.toString());
                            }}
                          />

                          <FontAwesomeIcon
                            className="btn btn-outline-danger"
                            icon={faTrashCan}
                            type="button"
                            onClick={() => {
                              handleDelete(contribution._id.toString());
                            }}
                          />
                        </div>
                      </li>
                      {edit === contribution._id.toString() && (
                        <EditSeekerData
                          setEdit={setEdit}
                          contribution={contribution}
                        />
                      )}
                    </>
                  );
                })}
              </ol>
            )}
          </div>
          <div className="col-md-6">
            <Outlet />
          </div>
        </div>

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
      </div>
    </>
  );
};

export default Contributions;
