// import { useState } from "react";
import "./App.css";
import Energy from "./components/Energy";
import Calculator from "./components/Calculator";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Contact_us from "./components/Contact_us";
// import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/Home",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/AboutUs",
    element: (
      <>
        <Navbar />
        <AboutUs />
      </>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <>
        <Navbar />
        <Contact_us />
      </>
    ),
  },
  {
    path: "/energy",
    element: (
      <>
        <Navbar />
        <Energy />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/calculator",
    element: (
      <>
        <Navbar />
        <Calculator />
      </>
    ),
  },
]);

function App() {
  // const [selectedImageName, setSelectedImageName] = useState(null);

  // const handleImageSelect = (imageName) => {
  //   setSelectedImageName(imageName);
  // };

  // const imageNames = ["Image 1", "Image 2"]; // Add more image names as needed

  return (
    <>
      {/* <div>
        <ImageSelector onImageSelect={handleImageSelect} />
        <Dropdown
          imageNames={imageNames}
          selectedImageName={selectedImageName}
        />
      </div> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
