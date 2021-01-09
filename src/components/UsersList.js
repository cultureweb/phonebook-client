import React, { useState, useEffect } from "react";
import UserDataService from "../services/UserService";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setSearchName] = useState("");

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  const pageSizes = [5, 10, 15];

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const getRequestParams = (searchName, page, pageSize) => {
    let params = {};

    if (searchName) {
      params["name"] = searchName;
    }

    if (page) {
      params["page"] = page;
    }

    if (pageSize) {
      params["limit"] = pageSize;
    }

    return params;
  };

  const retrieveUsers = () => {
    const params = getRequestParams(searchName, page, pageSize);

    UserDataService.getAll(params)
      .then((response) => {
        console.log({ response });
        const { results, totalPages } = response.data;

        setUsers(results);
        console.log({ users });
        setCount(totalPages);

        console.log("response.data", response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(retrieveUsers, [page, pageSize]);

  const refreshList = () => {
    retrieveUsers();
    setCurrentUser(null);
    setCurrentIndex(-1);
  };

  const setActiveUser = (user, index) => {
    setCurrentUser(user);
    console.log("cms", user);
    setCurrentIndex(index);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  return (
    <div>
      <div>
        <div>
          <input
            type="text"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangeSearchName}
          />
          <div>
            <button type="button" onClick={retrieveUsers}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <h4>Users List</h4>

        <div>
          {"Items per Page: "}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

          {/* <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          /> */}
        </div>

        <ul>
          {users &&
            users.map((user, index) => (
              <li
                // className={
                //   "list-group-item " + (index === currentIndex ? "active" : "")
                // }
                onClick={() => setActiveUser(user, index)}
                key={index}
              >
                {user.name}
              </li>
            ))}
        </ul>
      </div>
      <div>
        {currentUser ? (
          <div>
            <h4>User</h4>
            {/* <div>
              <label>
                <strong>Role:</strong>
              </label>{" "}
              {currentUser.role}
            </div> */}
            <div>
              <label>
                <strong>Name:</strong>
              </label>{" "}
              {currentUser.name}
            </div>
            <div>
              <label>
                <strong>Email:</strong>
              </label>{" "}
              {currentUser.email}
            </div>

            <Link to={"/users/" + currentUser.id}>Edit</Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a User to see email and role</p>
          </div>
        )}
        <Pagination
          count={count}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </div>
      <Link to="/add-user">Create a new user</Link>
    </div>
  );
};

export default UsersList;
