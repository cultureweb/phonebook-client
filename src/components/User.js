import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/UserService";

const User = (props) => {
  const initialUserState = {
    id: null,
    name: "",
    email: "",
    published: false,
  };
  const [currentUser, setCurrentUser] = useState(initialUserState);
  const [message, setMessage] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  const getUser = (id) => {
    UserDataService.getById(id)
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getUser(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const updatePublished = (status) => {
    var data = {
      id: currentUser.id,
      email: currentUser.email,
      name: currentUser.name,
      published: status,
    };

    UserDataService.update(currentUser.id, data)
      .then((response) => {
        setCurrentUser({ ...currentUser, published: status });
        // setCurrentUser({ ...currentUser });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateUser = () => {
    const { role, id, ...rest } = currentUser;
    UserDataService.update(currentUser.id, rest)
      .then((response) => {
        setMessage("The user was updated successfully!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteUser = () => {
    UserDataService.remove(currentUser.id)
      .then((response) => {
        setMessage("The user was deleted successfully!");
        setIsDeleted(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentUser && !isDeleted ? (
        <div>
          <h4>User</h4>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={currentUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={currentUser.email}
                onChange={handleInputChange}
              />
            </div>
            {/* <div>
              <label>
                <strong>Status:</strong>
              </label>
              {currentUser.published ? "Published" : "Pending"}
            </div> */}
          </form>

          {/* {currentUser.published ? (
            <button onClick={() => updatePublished(false)}>UnPublish</button>
          ) : (
            <button onClick={() => updatePublished(true)}>Publish</button>
          )} */}

          <button onClick={deleteUser}>Delete</button>

          <button type="submit" onClick={updateUser}>
            Update
          </button>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a User...</p>
        </div>
      )}
      <p>{message}</p>
      <Link to="/">View userList</Link>
    </div>
  );
};

export default User;
