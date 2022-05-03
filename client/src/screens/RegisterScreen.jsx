import React, { useState } from "react";

import usersApi from "../api/usersApi";
import Input from "../components/Input";
const RegisterScreen = () => {
  const [data, setData] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: user } = await usersApi.createUser(data);
      console.log(user);
    } catch (err) {
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status < 500
      )
        alert(err.response.data);
    }
  };

  const handleChange = ({ target }) =>
    setData({ ...data, [target.name]: target.value });
  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {/* <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={data.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={data.password}
            onChange={handleChange}
          />
        </div> */}

        <Input
          type="text"
          id="username"
          label="Username"
          value={data.username}
          handleChange={handleChange}
        />
        <Input
          type="password"
          id="password"
          label="Password"
          value={data.password}
          handleChange={handleChange}
        />

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
