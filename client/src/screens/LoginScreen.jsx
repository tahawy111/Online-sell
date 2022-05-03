import React, { useState } from "react";
import usersApi from "../api/usersApi";
import Input from "../components/Input";
import { toast } from "react-toastify";
import authApi from "../api/auth";
const LoginScreen = () => {
  const [data, setData] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: token } = await usersApi.loginUser(data);
      toast.success("Your account has been registered");
      authApi.setToken(token);
      window.location = "/";
    } catch (err) {
      if (
        err.response &&
        err.response.status >= 400 &&
        err.response.status < 500
      )
        toast.error(err.response.data);
    }
  };

  const handleChange = ({ target }) =>
    setData({ ...data, [target.name]: target.value });
  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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

export default LoginScreen;
