import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <Header />
      <ToastContainer/>
      <Outlet />
    </>
  );
}

export default App;
