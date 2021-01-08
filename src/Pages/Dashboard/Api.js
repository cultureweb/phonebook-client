// import { useEffect, useState } from "react";

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
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        } else return res.json();
      })
      .then((json) => {
        return json.results;
      });
  }
}
