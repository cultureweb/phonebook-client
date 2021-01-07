import { useEffect, useState } from "react";

const baseURL = "http://localhost:42001/api/v1";

export class Api {
  static async getUsers() {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token provided.");
    }

    return fetch(`${baseURL}/users`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        return json.results;
      });
  }
}

export function useUsers() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    Api.getUsers()
      .then((users) => {
        // setData(indexBy(prop("id"), users));
        setData(users);
        setLoading(false);
      })
      .catch(setError);
  }, []);
  console.log({ data });
  return {
    loading,
    data,
    error,
  };
}
