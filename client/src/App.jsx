import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./context/userContext";
// screens
import RegisterScreen from "./screens/RegisterScreen";

// toastify library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import authApi from "./api/auth";

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    setUser(authApi.getUser() || null);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ToastContainer autoClose={15000} />
      <RegisterScreen />
    </UserContext.Provider>
  );
}

export default App;
