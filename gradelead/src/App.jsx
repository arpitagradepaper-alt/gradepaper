import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

import Home from "./Home.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import ScrollToHash from "./ScrollToHash.jsx";
import BlogsPage from "./components/BlogsPage.jsx";
import AllBlogs from "./components/AllBlogs.jsx";

function App() {
  return (
    <BrowserRouter>
      {/* Scroll to hash / section */}
      <ScrollToHash />

      {/* Navbar + Mobile Hamburger */}
      <Navbar />

      <Routes>
        {/* =========================
            HOME PAGE
        ========================= */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* =========================
            BLOGS PAGE
        ========================= */}
        <Route
          path="/blogs"
          element={<BlogsPage />}
        />

        {/* =========================
            BLOG DETAILS
        ========================= */}
        <Route
          path="/blog/:slug"
          element={<BlogDetails />}
        />

        {/* =========================
            ALL BLOGS
        ========================= */}
        <Route
          path="/all-blogs"
          element={<AllBlogs />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;