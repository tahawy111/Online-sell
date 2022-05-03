import React, { useState } from "react";
import usersApi from "../api/usersApi";
import Input from "../components/Input";
import { toast } from "react-toastify";
const RegisterScreen = () => {
  const [data, setData] = useState({ username: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const { data: user } = await usersApi.createUser(data);
      toast.success("Your account has been registered");
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
      <h1>Register</h1>
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

export default RegisterScreen;
