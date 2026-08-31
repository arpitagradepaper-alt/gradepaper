import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import ScrollToHash from "./ScrollToHash.jsx";

import Home from "./Home.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import BlogsPage from "./components/BlogsPage.jsx";
import AllBlogs from "./components/AllBlogs.jsx";

import RealEstate from "./components/RealEstate.jsx";
import Education from "./components/Education.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* INDUSTRIES */}
        <Route
          path="/industries/real-estate"
          element={<RealEstate />}
        />

        <Route
          path="/industries/education"
          element={<Education />}
        />

        {/* BLOGS */}
        <Route
          path="/blogs"
          element={<BlogsPage />}
        />

        <Route
          path="/blog/:slug"
          element={<BlogDetails />}
        />

        <Route
          path="/all-blogs"
          element={<AllBlogs />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;