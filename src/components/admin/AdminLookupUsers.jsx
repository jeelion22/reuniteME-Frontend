import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import userServices from "../../../services/userServices";

const AdminLookupUsers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [usersList, setUsersList] = useState([]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await userServices.adminGetAllUsers();

        if (response) {
          setUsersList(response.data.users);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    };

    getAllUsers();
  }, []);

  const itemsPerPage = 10;
  const users = usersList || [];
  const paginatedUsersList = users.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="table-responsive">
              <table className="table align-middle">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Fullname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Category</th>
                    <th scope="col">isActive</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedUsersList.map((user, index) => {
                    const itemNumber = currentPage * itemsPerPage + index + 1;
                    return (
                      <tr key={user._id.toString()}>
                        <th scope="row">{itemNumber}</th>
                        <td>
                          {user.firstname} {user.lastname}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.userCategory}</td>
                        <td>{user.isActive.toString()}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <ReactPaginate
        previousLabel="previous"
        nextLabel="next"
        breakLabel="..."
        pageCount={Math.ceil(users.length / itemsPerPage)}
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
    </>
  );
};

export default AdminLookupUsers;
