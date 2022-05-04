import React, { useContext } from "react";
import UserContext from "../context/userContext";

const HomeScreen = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Hello {user}</h1>
    </div>
  );
};

export default HomeScreen;
