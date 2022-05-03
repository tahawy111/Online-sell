import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

// screens
import RegisterScreen from "./screens/RegisterScreen";

// toastify library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={15000} />
      <RegisterScreen />
    </>
  );
}

export default App;
