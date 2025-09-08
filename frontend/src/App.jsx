import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
