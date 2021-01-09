import http from "../http-common";

// class UserService {
const getAll = (params) => {
  return http.get("/users", { params });
};

const getById = (id) => {
  return http.get(`/users/${id}`);
};

const findByName = (name) => {
  return http.get(`/users?name=${name}`);
};

const create = (data) => {
  return http.post("/users", data);
};

const update = (id, data) => {
  return http.patch(`/users/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/users/${id}`);
};

// other CRUD methods
// }

export default {
  getAll,
  getById,
  findByName,
  create,
  update,
  remove,
};
