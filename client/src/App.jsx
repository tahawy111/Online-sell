import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserContext from "./context/userContext";
// screens
import RegisterScreen from "./screens/RegisterScreen";

// toastify library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import authApi from "./api/auth";
import LoginScreen from "./screens/LoginScreen";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import PrivateRoute from "./components/Routes/PrivateRoute";

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  useEffect(() => {
    setUser(authApi.getUser() || null);
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <ToastContainer autoClose={13000} />
        {/* Here is Code */}
        <Navbar />
        <Routes>
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <PrivateRoute path={"/"} element={<HomeScreen />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
