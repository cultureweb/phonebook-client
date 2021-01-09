// import { useEffect, useState } from "react";

const baseURL = "http://localhost:42001/api/v1";
//const baseURL = "https://phonebook-server-api.herokuapp.com/api/v1";

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
  static async createUser(name, email, password, role) {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token provided.");
    }
    return fetch(`${baseURL}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        name,
        email,
        password,
        role,
      }),
    }).then(async (res) => {
      const data = await res.json();
      if (res.status !== 201) {
        alert("Failed to save");
      } else {
        alert("Save success");
        return data;
      }
    });
  }
}
