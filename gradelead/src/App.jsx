import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import BlogDetails from "./components/BlogDetails.jsx";
import ScrollToHash from "./ScrollToHash.jsx";
import BlogsPage from "./components/BlogsPage.jsx";
import AllBlogs from "./components/AllBlogs.jsx";

function App() {
  return (
    <BrowserRouter>
    <ScrollToHash />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
         <Route
          path="/blogs"
          element={<BlogsPage />}
        />
        <Route
    path="/blogs"
    element={<AllBlogs />}
  />


        {/* Blog Details Page */}
        <Route path="/blog/:slug" element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;