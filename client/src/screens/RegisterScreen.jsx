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
        <Input
          id="username"
          value={data.password}
          handleChange={handleChange}
          label="Password"
        />
        <Input
          id="password"
          type="password"
          value={data.username}
          handleChange={handleChange}
          label="Username"
        />

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
